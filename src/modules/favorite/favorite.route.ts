import express from 'express';
import { addFavorite, getfavorites } from './favorite.controller';

const router = express.Router();

router.post('/', addFavorite);

router.get('/', getfavorites);

export default router;
