import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap/dist/gsap';
import styles from './work.module.scss';
import Head from '../Head';

const Services = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);
  const scrollArea = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      [blue.current, green.current, yellow.current],
      0.5,
      { y: 18, opacity: 0 },
      { y: -50, opacity: 1, yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [red.current],
      0.5,
      { y: 18 },
      { y: -18, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <div>
      <Head
        title="new react ssr services page"
        description="services page description"
        content="services us page content"
      />

      <div ref={scrollArea} className="test">
        <h1 className={styles.title}>
          {' '}
          Services page we can add any thing and check on run time{' '}
        </h1>
        <svg viewBox="0 0 150 33.2" width="180" height="150">
          <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
          <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
          <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
          <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
        </svg>
      </div>
    </div>
  );
};

export default Services;
