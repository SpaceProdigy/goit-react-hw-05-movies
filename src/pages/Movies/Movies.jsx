import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Pagination } from 'antd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './Movies.module.css';
import { apiMovies } from '../../api/api';

import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

import Grid from 'components/Grid/Grid';
import NotFound from 'pages/NotFound/NotFound';
import Spiner from 'components/Spiner/Spiner';

const { Search } = Input;

const myToast = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = searchParams.get('query') ?? '';
  const [paginationVisible, setPaginationVisible] = useState(null);

  const getMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setPaginationVisible(true);
    try {
      if (!query) {
        return;
      }
      const data = await apiMovies(
        'search/movie?query=',
        `${query}&&page=${currentPage}`
      );
      setMovies(data.results);
      setTotalMovies(data.total_results);
      setPaginationVisible(false);
      if (query !== '' && data.results.length === 0) {
        toast.info('Movie not found 🍿', myToast);
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, query]);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onChange = numberPage => {
    setCurrentPage(numberPage);
    scrollTo();
  };
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  if (error) {
    return <NotFound />;
  }
  return (
    <>
      <div className={css.Wrapper}>
        <Search
          className={css.Text}
          placeholder="input search text"
          enterButton={'Search'}
          size="large"
          onSearch={value =>
            value !== ''
              ? setSearchParams({ query: value })
              : toast.info(`Please input film name 📽️`, myToast)
          }
        />
      </div>

      {isLoading ? <Spiner /> : <Grid arr={movies} />}
      <>
        {totalMovies !== 0 && totalMovies > 20 && (
          <Pagination
            defaultCurrent={1}
            defaultPageSize={20}
            className={css.Pagination}
            total={totalMovies > 2000 ? 2000 : totalMovies}
            showSizeChanger={false}
            hideOnSinglePage={true}
            onChange={onChange}
            disabled={paginationVisible}
          />
        )}
        <ScrollToTop />
      </>
    </>
  );
};

export default Movies;
