import { NextFunction, Request, Response } from 'express';
import { apiResponse } from '../../utils/response';
import logger from '../../utils/logger';

export default {
  addFavorite,
  getfavorites,
};

async function addFavorite(req: Request, res: Response, next: NextFunction) {
  logger.info('addFavorite controller called');

  try {
    return apiResponse(res, 'Favorite added successfully', null, 201);
  } catch (err) {
    next(err);
  }
}

async function getfavorites(req: Request, res: Response, next: NextFunction) {
  logger.info('getFavorites controller called');

  try {
    return apiResponse(res, 'All favorites', null, 201);
  } catch (err) {
    next(err);
  }
}

export { addFavorite, getfavorites };
