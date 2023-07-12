import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home, Movies, NotFound } from '../pages/index';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
};
