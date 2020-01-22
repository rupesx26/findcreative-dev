import React, { Component } from 'react';
import styles from './blob.module.scss';
import {
  TweenMax,
  TimelineLite,
  TimelineMax,
  Power0,
  Expo
} from 'gsap/dist/gsap';

class Blob extends Component {
  constructor(props) {
    super(props);
    this.blobAnimation = this.blobAnimation.bind(this);
  }

  componentDidMount() {
    this.blobAnimation();
  }

  blobAnimation() {
    // TweenMax.to('.blob-otr', .1, {opacity: 1})

    const blob = new TimelineLite();
    blob.fromTo(
      '.blob-otr',
      1,
      { opacity: 0, x: -400, filter: 'blur(9px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', ease: Power0.easeInOut },
      '+=1'
    );
  }

  render() {
    return (
      <div className={`${styles.blobOuter} blob-otr`}>
        <div className={styles.blobWrapper}>
          <div className={styles.blobLayer1}></div>
          <div className={styles.blobLayer2}></div>
          <div className={styles.blob}></div>
          <div className={styles.blobLayer3}></div>
        </div>
      </div>
    );
  }
}

export default Blob;
