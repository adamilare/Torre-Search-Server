import express, { Router } from 'express';
import searchRouter from '../modules/search/search.route';
import favoriteRouter from '../modules/favorite/favorite.route';

const router = express.Router();

interface RoutesInterface {
  path: string;
  route: Router;
}

const routes: RoutesInterface[] = [
  {
    path: '/search',
    route: searchRouter,
  },
  {
    path: '/favorite',
    route: favoriteRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
