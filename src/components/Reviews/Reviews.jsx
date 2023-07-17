import { Avatar, Empty, List, Typography } from 'antd';
import { apiMovies } from 'api/api';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import NotFound from 'pages/NotFound/NotFound';
import Spiner from 'components/Spiner/Spiner';
const { Paragraph } = Typography;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovieDetails = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!movieId) {
        return;
      }

      const { results } = await apiMovies('movie/', movieId + '/reviews');
      setReviews(results);
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

  if (error) {
    return <NotFound />;
  }
  return isLoading ? (
    <Spiner />
  ) : (
    <div>
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
                description={
                  <Paragraph
                    ellipsis={{
                      symbol: 'more',
                      expandable: true,
                    }}
                  >
                    {content}
                  </Paragraph>
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <Empty className={css.Empty} description={<span>No Reviews</span>} />
      )}
    </div>
  );
};

export default Reviews;
