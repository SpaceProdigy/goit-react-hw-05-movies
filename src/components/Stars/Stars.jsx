import { Rate, ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const Stars = ({ rating, secondaryColor, numberRating, style }) => {
  return (
    rating !== 0 && (
      <ConfigProvider
        theme={{
          token: {
            colorFillContent: secondaryColor ? secondaryColor : 'grey',
          },
        }}
      >
        {numberRating && `${numberRating.toFixed(1)} / 10 `}
        <br />
        {rating && (
          <Rate defaultValue={rating / 2} disabled={true} className={style} />
        )}
      </ConfigProvider>
    )
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
  secondaryColor: PropTypes.string,
  numberRating: PropTypes.number,
  style: PropTypes.string,
};

export default Stars;
