import React from 'react';
import { Link } from 'react-router-dom';
import './sayhello.scss';

const SayHello = props => {
  return (
    <Link to="/connect" className={`say-hello ${props.colorUpdate}`}>
      Say Hello
    </Link>
  );
};

export default SayHello;
