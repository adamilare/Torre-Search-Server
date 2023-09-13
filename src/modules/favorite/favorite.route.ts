import express from 'express';
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from './favorite.controller';
import { personSchema, removeFavoriteSchema } from './favorite.schema';

const router = express.Router();

router.post('/', personSchema(), addFavorite);

router.get('/', getFavorites);

router.delete('/', removeFavoriteSchema(), removeFavorite);

export default router;
