import logger from '../../utils/logger';
import { RecentSearch, RecentSearchModel } from './search.model';

export async function createRecentSearch(query: string) {
  const closestMatch: RecentSearch | null = await RecentSearchModel.findOne({
    $text: { $search: query },
  });

  logger.info(closestMatch);

  if (closestMatch) {
    logger.info('Closest match found:', closestMatch.searchString);

    if (query.length > closestMatch.searchString.length) {
      logger.info('Search string is longer than existing search');
      // If the query is longer, update it
      closestMatch.searchString = query;
      await RecentSearchModel.updateOne(closestMatch);
    }
  } else {
    // If the query doesn't exist, insert a new record
    logger.info('Search does not exist');
    await RecentSearchModel.create({ searchString: query });
  }

  return true;
}

export async function allRecentSearch() {
  return RecentSearchModel.find();
}
