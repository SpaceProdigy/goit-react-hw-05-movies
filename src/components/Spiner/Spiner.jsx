import React from 'react';
import { Spin } from 'antd';
import css from './Spiner.module.css';

const Spiner = () => {
  return (
    <div className={css.spiner}>
      <Spin size="large" />
    </div>
  );
};

export default Spiner;
