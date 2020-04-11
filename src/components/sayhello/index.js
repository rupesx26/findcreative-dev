import React from 'react';
import './sayhello.scss';

const SayHello = props => {
  return <div className={`say-hello ${props.colorUpdate}`}>Say Hello</div>;
};

export default SayHello;
