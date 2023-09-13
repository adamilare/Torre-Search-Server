import express from 'express';
import searchSchema from './search.schema';
import { addRecentSearch, recentSearches, search } from './search.controller';
import { personSchema } from '../favorite/favorite.schema';

const router = express.Router();

router.post('/', searchSchema(), search); // search

router.post('/recent', personSchema(), addRecentSearch); // recent-searches

router.get('/recent', recentSearches); // recent-searches

export default router;
