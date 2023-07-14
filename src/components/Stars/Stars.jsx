import { Rate, ConfigProvider } from 'antd';
import React from 'react';

const Stars = ({ rating, secondaryColor, numberRating, style }) => {
  return (
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
  );
};

export default Stars;
