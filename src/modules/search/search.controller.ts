import { NextFunction, Request, Response } from 'express';
import { apiResponse } from '../../utils/response';
import logger from '../../utils/logger';
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

export default {
  search,
  recentSearches,
};

async function search(req: Request, res: Response, next: NextFunction) {
  logger.info('Search controller called');
  const { query } = req.body;
  logger.info(req.body);

  try {
    const response = await axios.post(
      'https://torre.ai/api/entities/_searchStream',
      { query },
    );

    // logger.info(response.data);

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
    return apiResponse(res, 'Recent-search successfully', null, 201);
  } catch (err) {
    next(err);
  }
}

export { search, recentSearches };
