import { Avatar, Empty, List } from 'antd';
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
      {reviews.length !== 0 ? (
        <List
          className={css.List}
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={({ content, author }, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={author}
                description={content}
              />
            </List.Item>
          )}
        />
      ) : (
        <Empty className={css.Empty} description={<span>No Reviews</span>} />
      )}
    </>
  );
};

export default Reviews;
