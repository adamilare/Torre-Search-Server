import { NextFunction, Request, Response } from 'express';
import { apiResponse } from '../../utils/response';
import logger from '../../utils/logger';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { allRecentSearch, createRecentSearch } from './search.service';

export default {
  search,
  recentSearches,
};

async function search(req: Request, res: Response, next: NextFunction) {
  logger.info('Search controller called');
  const query = req.body;
  logger.info(query);

  try {
    await createRecentSearch(query.query);
    logger.info('recentSearch passed successfully');

    const response = await axios.post(
      'https://torre.ai/api/entities/_searchStream',
      { ...query },
    );

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

async function recentSearches(req: Request, res: Response, next: NextFunction) {
  logger.info('RecentSearch controller called');

  try {
    const allRecentSearches = await allRecentSearch();
    return apiResponse(
      res,
      'Recent-search successfully',
      allRecentSearches,
      201,
    );
  } catch (err) {
    next(err);
  }
}

export { search, recentSearches };
