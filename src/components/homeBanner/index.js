import React, { Component } from 'react';
import { TimelineLite, Power0 } from 'gsap/dist/gsap';

import SubHeadingSlider from './SubHeadingSlider';
import HeadingSlider from './HeadingSlider';
import styles from './homebanner.module.scss';
import Blob from '../blob/Blob';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.blobAnimation = this.blobAnimation.bind(this);
  }
  componentDidMount() {
    this.blobAnimation();
  }
  blobAnimation() {
    const blob = new TimelineLite();
    blob.fromTo(
      '.banner-blob',
      1,
      { opacity: 0, x: -400, filter: 'blur(9px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', ease: Power0.inOut },
      '+=1'
    );
  }
  render() {
    return (
      <section className={`${styles.bannerWrapper} section`}>
        <div className="container">
          <div
            className={`${styles.row} row justify-content-center no-gutters`}
          >
            <div className="col-md-10 col-xs-10 col-sm-10 col-lg-10">
              <div className={styles.banner}>
                <div className={styles.view}>
                  <Blob
                    thinline={false}
                    blobAnimClass="banner-blob"
                    bbbgcolor="#ccdef2"
                    bb1opacity="0.24"
                    bb2opacity="0.44"
                    blobBorder="#000"
                    mainblog="#c9def4"
                  />
                  <SubHeadingSlider />
                  <HeadingSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
