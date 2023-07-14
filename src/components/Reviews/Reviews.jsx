import { ConfigProvider, Descriptions, Empty } from 'antd';
import { apiMovies } from 'api/api';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const getMovieDetails = useCallback(async () => {
    if (!movieId) {
      return;
    }

    const { results } = await apiMovies('movie/', movieId + '/reviews');
    setReviews(results);
  }, [movieId]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colonMarginLeft: '10px',
          },
        }}
      >
        <Descriptions className={css.table} bordered column={1}>
          <Descriptions.Item className={css.item} label="Author">
            Content
          </Descriptions.Item>
          {reviews?.length > 0 &&
            reviews.map(({ content, id, author }) => (
              <Descriptions.Item key={id} label={author}>
                {content}
              </Descriptions.Item>
            ))}
        </Descriptions>
        {reviews?.length < 1 && (
          <Empty className={css.Empty} description={<span>No Reviews</span>} />
        )}
      </ConfigProvider>
    </>
  );
};

export default Reviews;
