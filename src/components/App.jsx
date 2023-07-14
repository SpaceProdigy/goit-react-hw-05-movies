import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Movies } from '../pages/index';
import { MovieDetails } from '.';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="cast" element={<Cast />}></Route>
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
};
