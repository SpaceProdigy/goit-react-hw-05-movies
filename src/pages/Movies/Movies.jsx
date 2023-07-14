import React, { useState, useEffect, useCallback } from 'react';
import { Input } from 'antd';
import css from './Movies.module.css';
import { apiMovies } from '../../api/api';
import { Grid } from 'components';
import { useParams } from 'react-router-dom';

const { Search } = Input;

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [nameMovie, setNameMovie] = useState([]);

  const params = useParams();

  const getMovies = useCallback(async () => {
    const data = await apiMovies('search/movie?query=', nameMovie);
    setMovies(data.results);
  }, [nameMovie]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <div className={css.Wrapper}>
        <Search
          className={css.Text}
          placeholder="input search text"
          // enterButton={}
          size="large"
          onSearch={value => setNameMovie(value)}
        />
      </div>
      <Grid arr={movies} />
    </>
  );
};
