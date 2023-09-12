import express from 'express';
import { recentSearches, search } from './search.controller';

const router = express.Router();

router.post('/', search); // search

router.get('/', recentSearches); // recent-searches

export default router;
