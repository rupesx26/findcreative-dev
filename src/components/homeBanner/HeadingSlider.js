import React, { Component } from 'react';
import { TweenMax, TimelineLite, TimelineMax, Power0 } from 'gsap/dist/gsap';
import styles from './heading.module.scss';

// * to create is to unite
// * now is everything
// *  we make product and package design

// * We make Branding and Digital Content
// * Audit and Research helps us build great Design
// * our strategy is always design-led
// * our approach is audit, research & execute
// * Branding is our middle name
// * crazy client brings crazy ideas.

class HeadingSlider extends Component {
  constructor(props) {
    super();
    this.bannerAnimationHead = this.bannerAnimationHead.bind(this);
  }

  componentDidMount() {
    this.bannerAnimationHead();
  }

  bannerAnimationHead() {
    TweenMax.to(
      '.head-slide-2, .head-slide-3, .head-slide-4, .head-slide-5, .head-slide-6, .head-slide-7, .head-slide-8, .head-slide-9',
      0.1,
      { opacity: 0 }
    );
    // TweenMax.to('.sub-slide-2, .type', .1, {y: 20, opacity: 0, x: 10,  position: 'absolute'})
    TweenMax.from(
      `.animation-slide-head`,
      1,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, ease: Power0.easeInOut }
    );
    const tl = new TimelineMax({ paused: true, repeat: -1 });
    const subtitleTimeline = new TimelineLite();
    subtitleTimeline
      .to(
        '.head-slide-1',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-1', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')
      .to(
        '.head-slide-2',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-2', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-3',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-3', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-4',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-4', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-5',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-5', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-6',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-6', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-7',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-7', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-8',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-8', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-9',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      )
      .to('.head-slide-9', 1.5, { opacity: 0, ease: Power0.easeInOut }, '+=1.5')

      .to(
        '.head-slide-1',
        1.5,
        { opacity: 1, ease: Power0.easeInOut, y: 0 },
        '+=1'
      );
    // .to('.head-slide-3', 1, {opacity: 0, y: -20,  ease: Power0.easeInOut}, '+=1')
    // .to('.head-slide-3', 1.5,  {opacity: 1, y: 0}, '+=.5')
    // .to('.sub-slide-2', 1, {opacity: 1, y: 0, ease: Power0.easeInOut}, '+=1')
    // .fromTo('.type-1', 1.5, {opacity: 0, y: 20}, {opacity: 1, y:0}, '+=.5')
    // .to('.type-1', 1.5, {opacity: 0, y: -20}, '+=.6')
    // .to('.type-2', 1.5,  {opacity: 1, y: 0}, '+=.5')
    // .to('.type-2', 1.5, {opacity: 0, y: -20}, '+=.6')
    // .to('.type-3', 1.5, {opacity: 1, y: 0}, '+=.5')
    // .to('.type-3', 1.5, {opacity: 0, y: -20}, '+=.6')
    // .to('.last', 1.5, {opacity: 1, y: 0}, '+=.5')
    // .to('.sub-slide-2', 1, {opacity: 0, y: -20, ease: Power0.easeInOut}, '+=1')
    // .to(`.sub-slide-1`, .1, {opacity: 0, y: 20, ease: Power0.easeInOut})
    // .to(`.sub-slide-1`, 1, {opacity: 1, y: 0, ease: Power0.easeInOut}, '+=1')

    tl.add(subtitleTimeline);

    // delay start of slider for 2 seconds
    TweenMax.delayedCall(
      1,
      function(tl) {
        tl.restart(true, false);
      },
      [tl]
    );
  }

  render() {
    return (
      <div className={styles.headBanner}>
        <div className={styles.title}>
          <div className={styles.animationSlideHead}>
            <h1>
              <span className={`${styles.slide} head-slide-1`}>
                to create is to unite
              </span>
              <span className={`${styles.slide} head-slide-2`}>
                now is everything
              </span>
              <span className={`${styles.slide} head-slide-3`}>
                we make product and package design
              </span>
              <span className={`${styles.slide} head-slide-4`}>
                We make Branding and Digital Content
              </span>
              <span className={`${styles.slide} head-slide-5`}>
                Audit and Research helps us build great Design
              </span>
              <span className={`${styles.slide} head-slide-6`}>
                our strategy is always design-led 
              </span>
              <span className={`${styles.slide} head-slide-7`}>
                our approach is audit, research & execute
              </span>
              <span className={`${styles.slide} head-slide-8`}>
                Branding is our middle name
              </span>
              <span className={`${styles.slide} head-slide-9`}>
                crazy client brings crazy ideas.
              </span>
              {/* <span className={`${styles.slide} head-slide-3`}>to create is to tret</span> */}
              {/* <span className={`${styles.slide} sub-slide-2`}>
                            <span className='init-text'>findcreative Ave is </span>
                            <span className={styles.bucket}> 
                              <span className='type type-1'>design agency</span>
                              <span className='type type-2'>creative agency</span>
                              <span className='type type-3'>digital agency</span>
                              <span className='type last'>loves crazy</span>
                            </span>
                        </span> */}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadingSlider;
