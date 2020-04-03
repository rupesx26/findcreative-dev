import React from 'react';
import './pagination.scss';
const Pagination = props => {
  const barHeight = props.count * 25 + '%';
  return (
    <div
      className={`carouse-pagination-wrapper ${
        props.hidePagination ? 'deactive' : 'active'
      }`}
    >
      <div className="slide-count slide-count-top">0 {props.count}.</div>
      <div className="carousel-bar">
        <div
          className="carousel-bar-tracker"
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% ${barHeight}, 0 ${barHeight}`
          }}
        ></div>
      </div>
      <div className="slide-count slide-count-bottom">
        0 {props.totalCount}.
      </div>
    </div>
  );
};

export default Pagination;
