import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Input, Pagination } from 'antd';

import css from './Movies.module.css';
import { apiMovies } from '../../api/api';

import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const { Search } = Input;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [nameMovie, setNameMovie] = useState('');
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = useCallback(async () => {
    if (nameMovie === '') {
      return;
    }

    const data = await apiMovies(
      'search/movie?query=',
      `${nameMovie}&&page=${currentPage}`
    );
    console.log(data);

    setMovies(data.results);
    setTotalMovies(data.total_results);
  }, [currentPage, nameMovie]);

  const onChange = numberPage => {
    setCurrentPage(numberPage);
  };
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <div className={css.Wrapper}>
        <Search
          className={css.Text}
          placeholder="input search text"
          enterButton={'Search'}
          size="large"
          onSearch={value => setNameMovie(value)}
        />
      </div>
      <Grid arr={movies} />
      {totalMovies !== 0 && (
        <Pagination
          defaultPageSize={20}
          className={css.Pagination}
          onChange={onChange}
          total={totalMovies}
          showTotal={total => `Total ${total} films`}
        />
      )}

      <ScrollToTop />
    </>
  );
};

export default Movies;
