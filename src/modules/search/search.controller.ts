import { NextFunction, Request, Response } from 'express';
import { apiResponse } from '../../utils/response';
import logger from '../../utils/logger';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { TORRE_SEARCH_URL } from '../../constants';
import { PersonEntryType } from '../favorite/favorite.model';
import { allPeople, createPerson } from '../favorite/favorite.service';

async function search(req: Request, res: Response, next: NextFunction) {
  logger.info('Search controller called');
  const query = req.body;

  try {
    const response = await axios.post(`${TORRE_SEARCH_URL}`, { ...query });

    return apiResponse(
      res,
      'Search successfully',
      response.data,
      StatusCodes.OK,
    );
  } catch (err) {
    next(err);
  }
}

async function addRecentSearch(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.info('addFavorite controller called');
  const person = req.body;
  person.entryType = PersonEntryType.RECENT_SEARCH;

  try {
    await createPerson(person);
    const people = await allPeople(person.entryType);

    return apiResponse(res, 'Person added successfully', people, 201);
  } catch (err) {
    next(err);
  }
}

async function recentSearches(req: Request, res: Response, next: NextFunction) {
  logger.info('RecentSearch controller called');

  try {
    const recentSearches = await allPeople(PersonEntryType.RECENT_SEARCH, 10);
    return apiResponse(res, 'Successful', recentSearches, 201);
  } catch (err) {
    next(err);
  }
}

export { search, recentSearches, addRecentSearch };
