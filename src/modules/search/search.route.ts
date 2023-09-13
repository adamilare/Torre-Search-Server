import express from 'express';
import searchSchema from './search.schema';
import { recentSearches, search } from './search.controller';

const router = express.Router();

router.post('/', searchSchema(), search); // search

router.get('/', recentSearches); // recent-searches

export default router;
