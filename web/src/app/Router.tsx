import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Docs, Home } from '@/pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.docs.path} element={<Docs />} />
      </Routes>
    </BrowserRouter>
  );
};