import Home from './components/Home';
import Shows from './components/shows/Shows';

import { getShows } from '../server/services/showsService';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/shows',
    component: Shows,
  }
];

export default routes;
