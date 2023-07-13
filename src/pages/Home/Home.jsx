import React, { useState, useEffect } from 'react';
import { apiMovies } from '../../api/api';
import css from './Home.module.css';
import { Grid, MovieDetails } from 'components';
import { Carousel, Rate, ConfigProvider } from 'antd';

const contentStyle = {
  margin: '0 auto',
  position: 'relative',
  maxWidth: '1280px',
  height: '600px',
  backgroundRepeat: 'noRepeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(null);

  const getMovies = async () => {
    const data = await apiMovies('trending/all/day');
    setMovies(data.results);
  };

  const handleId = id => {
    setId(id);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Carousel autoplay>
        {movies.length > 0 &&
          movies
            .slice(0, 5)
            .map(
              ({ title, overview, vote_average, id, name, backdrop_path }) => (
                <div key={id} className={css.wrapper}>
                  <div
                    style={{
                      ...contentStyle,
                      background: `linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%), url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
                    }}
                  >
                    <div className={css.details}>
                      <h2 className={css.filmTitle}>{title || name}</h2>
                      <ConfigProvider
                        theme={{
                          token: {
                            colorFillContent: 'grey',
                          },
                        }}
                      >
                        <Rate
                          defaultValue={vote_average / 2}
                          disabled={true}
                          className={css.stars}
                        />
                      </ConfigProvider>
                      <p className={css.overview}>
                        {overview.slice(0, 150)}...
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
      </Carousel>

      <h2 className={css.title}>Trending today </h2>
      <Grid arr={movies} filmId={handleId} />
      <MovieDetails filmId={id} />
    </>
  );
};
