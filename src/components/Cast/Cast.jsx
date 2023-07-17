import { Carousel, Empty, Image, Tooltip } from 'antd';
import { apiMovies } from 'api/api';
import { UserOutlined } from '@ant-design/icons';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar } from 'antd';
import css from './Cast.module.css';
import NotFound from 'pages/NotFound/NotFound';
import Spiner from 'components/Spiner/Spiner';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [arrow] = useState('Show');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const getMovieDetails = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!movieId) {
        return;
      }

      const { cast } = await apiMovies('movie/', movieId + '/credits');
      setActors(cast);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  const isImg = () => {
    let isNullImg = 0;
    actors?.map(({ profile_path }) => !profile_path && isNullImg++);
    return isNullImg;
  };

  if (error) {
    return <NotFound />;
  }

  return isLoading ? (
    <Spiner />
  ) : (
    <div className={css.wrapperMain}>
      {isImg() !== actors.length && (
        <Carousel autoplay className={css.wrapperCarousel}>
          {actors?.length > 0 &&
            actors.map(({ id, name, profile_path, character }) => {
              if (!profile_path) {
                return null;
              }
              return (
                <div key={id}>
                  <div
                    title={'Photo' + name}
                    className={css.Carousel}
                    style={{
                      background: ` url('https://image.tmdb.org/t/p/original${profile_path}')`,
                      backgroundRepeat: 'noRepeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  >
                    <div className={css.box}>
                      <p>{name}</p>
                      <p>Character: {character}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </Carousel>
      )}

      {actors?.length > 0 && (
        <div className={css.wrapperText}>
          <p className={css.titleName}>Actors:</p>
          {actors.map(({ id, name, profile_path, character }, index) => {
            return (
              <Tooltip
                key={id}
                placement="topRight"
                title={
                  <>
                    <Avatar
                      size={100}
                      icon={
                        profile_path ? (
                          <Image
                            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                          />
                        ) : (
                          <UserOutlined />
                        )
                      }
                    />
                    <p>{name}</p>
                    <p>Character:{character}</p>
                  </>
                }
                arrow={mergedArrow}
              >
                {
                  <p className={css.text}>
                    {index === actors.length - 1 ? `${name}.` : `${name},`}
                  </p>
                }
              </Tooltip>
            );
          })}
        </div>
      )}
      {actors?.length < 1 && (
        <Empty className={css.Empty} description={<span>No Reviews</span>} />
      )}
    </div>
  );
};

export default Cast;
