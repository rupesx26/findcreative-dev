import React from 'react';
import './pagination.scss';
const Pagination = props => {
  return (
    <div className="carouse-pagination-wrapper">
      <div className="slide-count slide-count-top">0 {props.count}.</div>
      <div className="carousel-bar">
        <div className="carousel-bar-tracker"></div>
      </div>
      <div className="slide-count slide-count-bottom">
        0 {props.totalCount}.
      </div>
    </div>
  );
};

export default Pagination;
