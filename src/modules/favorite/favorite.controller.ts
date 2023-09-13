import { NextFunction, Request, Response } from 'express';
import { apiResponse } from '../../utils/response';
import logger from '../../utils/logger';
import {
  allPeople,
  createPerson,
  deleteFavoriteById,
} from './favorite.service';
import { PersonEntryType } from './favorite.model';

async function addFavorite(req: Request, res: Response, next: NextFunction) {
  logger.info('addFavorite controller called');
  logger.info(req.body);

  const person = req.body;
  person.entryType = PersonEntryType.LIKE;

  try {
    await createPerson(person);
    const allNewFavorites = await allPeople(person.entryType);

    return apiResponse(
      res,
      'Favorite added successfully',
      allNewFavorites,
      201,
    );
  } catch (err) {
    next(err);
  }
}

async function getFavorites(req: Request, res: Response, next: NextFunction) {
  logger.info('getFavorites controller called');

  try {
    const favorites = await allPeople(PersonEntryType.LIKE);
    return apiResponse(res, 'All favorites', favorites, 201);
  } catch (err) {
    next(err);
  }
}

async function removeFavorite(req: Request, res: Response, next: NextFunction) {
  logger.info('removeFavorite controller called');
  const { ardaId } = req.body;
  logger.info(req.body);
  logger.info(req.body.ardaId);

  try {
    await deleteFavoriteById(ardaId);
    return apiResponse(res, 'Favorite removed successfully', null, 201);
  } catch (err) {
    next(err);
  }
}

export { addFavorite, getFavorites, removeFavorite };
