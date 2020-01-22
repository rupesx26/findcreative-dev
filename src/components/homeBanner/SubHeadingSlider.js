import React, { Component } from 'react';
import { TweenMax, TimelineLite, TimelineMax, Power0 } from 'gsap/dist/gsap';
import styles from './subheading.module.scss';
class SubHeadingSlider extends Component {
  constructor(props) {
    super();
    this.bannerAnimation = this.bannerAnimation.bind(this);
  }

  componentDidMount() {
    this.bannerAnimation();
  }

  bannerAnimation() {
    TweenMax.to('.sub-slide-2', 0.1, { left: '-100px' });
    TweenMax.to('.sub-slide-2, .type', 0.1, {
      y: 20,
      opacity: 0,
      x: 10,
      position: 'absolute'
    });
    TweenMax.from(
      `.animation-slide`,
      1,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, ease: Power0.easeInOut }
    );
    const tl = new TimelineMax({ paused: true, repeat: -1 });
    const subtitleTimeline = new TimelineLite();
    subtitleTimeline
      .fromTo(
        '.sub-slide-1',
        1,
        { opacity: 0, y: 20, ease: Power0.easeInOut },
        { opacity: 1, y: 0, ease: Power0.easeInOut },
        '+=1'
      )
      .to(
        '.sub-slide-1',
        1,
        { opacity: 0, y: -20, ease: Power0.easeInOut },
        '+=1'
      )
      .to(
        '.sub-slide-2',
        1,
        { opacity: 1, y: 0, ease: Power0.easeInOut },
        '+=1'
      )
      .fromTo(
        '.type-1',
        1.5,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        '+=.5'
      )
      .to('.type-1', 1.5, { opacity: 0, y: -20 }, '+=.6')
      .to('.type-2', 1.5, { opacity: 1, y: 0 }, '+=.5')
      .to('.type-2', 1.5, { opacity: 0, y: -20 }, '+=.6')
      .to('.type-3', 1.5, { opacity: 1, y: 0 }, '+=.5')
      .to('.type-3', 1.5, { opacity: 0, y: -20 }, '+=.6')
      .to('.last', 1.5, { opacity: 1, y: 0 }, '+=.5')
      .to(
        '.sub-slide-2',
        1,
        { opacity: 0, y: -20, ease: Power0.easeInOut },
        '+=1'
      )
      .to(`.sub-slide-1`, 1, { opacity: 0, y: 20, ease: Power0.easeInOut });

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
      <div className={styles.subHeadBanner}>
        <div className={styles.subTitle}>
          <div className={styles.animationSlide}>
            <h2>
              <span className={`${styles.slide} sub-slide-1`}>
                We are findcreative Ave.
              </span>
              <span className={`${styles.slide} sub-slide-2`}>
                <span className="init-text">findcreative Ave is </span>
                <span className={styles.bucket}>
                  <span className="type type-1">design agency</span>
                  <span className="type type-2">creative agency</span>
                  <span className="type type-3">digital agency</span>
                  <span className="type last">loves crazy</span>
                </span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SubHeadingSlider;
