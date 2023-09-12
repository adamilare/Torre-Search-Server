import { NextFunction, Request, Response } from 'express';
import { apiResponse } from '../../utils/response';
import logger from '../../utils/logger';

export default {
  search,
  recentSearches,
};

async function search(req: Request, res: Response, next: NextFunction) {
  logger.info('Search controller called');

  try {
    return apiResponse(res, 'Search successfully', null, 201);
  } catch (err) {
    next(err);
  }
}

async function recentSearches(req: Request, res: Response, next: NextFunction) {
  logger.info('RecentSearch controller called');

  try {
    return apiResponse(res, 'Recent-search successfully', null, 201);
  } catch (err) {
    next(err);
  }
}

export { search, recentSearches };
