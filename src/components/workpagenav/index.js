import React from 'react';
import { Link } from 'react-router-dom';

const WorkPageNavigation = props => {
  return (
    <div>
      <div className="prev-project">
        <Link to={props.prevLink}>Prev</Link>
      </div>
      <div className="next-project">
        <Link to={props.nextLink}>Next</Link>
      </div>
    </div>
  );
};

export default WorkPageNavigation;
