import React, { Component } from 'react';
import SubHeadingSlider from './SubHeadingSlider';
import HeadingSlider from './HeadingSlider';

import styles from './homebanner.module.scss';
class Banner extends Component {
  render() {
    return (
      <section className={styles.bannerWrapper}>
        <div className="container">
          <div
            className={`${styles.row} row justify-content-center no-gutters`}
          >
            <div className="col-md-10 col-xs-10 col-sm-10 col-lg-10">
              <div className={styles.banner}>
                <div className={styles.view}>
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
