import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '@/layout';
import { Home, Trips, Users } from '@/pages';

import { routes } from './routes';

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.trips.path} element={<Trips />} />
        <Route path={routes.users.path} element={<Users />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
