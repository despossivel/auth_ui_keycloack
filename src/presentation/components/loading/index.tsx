import React from 'react';
import Spinner from './spinner';
import './index.css';

export const Loading = () => (
  <div className="container-loader">
    <div className="content">
      <span>
        Loading...
      </span>
      <Spinner />
    </div>
  </div>
);

export default Loading;
