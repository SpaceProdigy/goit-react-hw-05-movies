import React, { useState, useEffect, useCallback } from 'react';
import { apiMovies } from '../../api/api';
import css from './Home.module.css';

import { Carousel, Pagination } from 'antd';
import Stars from 'components/Stars/Stars';
import { Link } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import Spiner from 'components/Spiner/Spiner';
import NotFound from 'pages/NotFound/NotFound';
import Grid from 'components/Grid/Grid';

const contentStyle = {
  margin: '0 auto',
  position: 'relative',
  maxWidth: '1280px',
  height: '600px',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationVisible, setPaginationVisible] = useState(null);

  const getMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setPaginationVisible(true);

    try {
      const data = await apiMovies('trending/all/day', `?page=${currentPage}`);
      setMovies(data.results);
      setTotalMovies(data.total_results);
      setPaginationVisible(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);
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
      <Carousel autoplay autoplaySpeed={5000}>
        {movies.length > 0 &&
          movies
            .slice(0, 5)
            .map(
              ({ title, overview, vote_average, id, name, backdrop_path }) => (
                <div key={id} className={css.wrapper}>
                  <div
                    style={{
                      ...contentStyle,
                      backgroundImage: `linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%), url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
                      backgroundRepeat: 'noRepeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className={css.details}>
                      <Link to={`/movies/${id}`}>
                        <h2 className={css.filmTitle}>{title || name}</h2>
                      </Link>
                      <Stars
                        rating={vote_average}
                        secondaryColor={'white'}
                        numberRating={vote_average}
                        style={css.stars}
                      />
                      <p className={css.overview}>
                        {overview.slice(0, 150)}...
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
      </Carousel>

      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <h2 className={css.title}>Trending today </h2>
          <Grid arr={movies} />
        </>
      )}

      {totalMovies !== 0 && totalMovies > 20 && (
        <div className={css.PaginationBox}>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={20}
            className={css.Pagination}
            total={totalMovies > 2000 ? 2000 : totalMovies}
            showSizeChanger="false"
            onChange={onChange}
            disabled={paginationVisible}
          />
        </div>
      )}
      <ScrollToTop />
    </>
  );
};

export default Home;
