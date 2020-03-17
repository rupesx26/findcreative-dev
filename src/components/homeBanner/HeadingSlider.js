import React, { Component } from 'react';
import {
  TweenMax,
  TimelineLite,
  TimelineMax,
  Power0,
  Expo
} from 'gsap/dist/gsap';
import styles from './heading.module.scss';
import Blob from '../blob/Blob';

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
    this.blobAnimation = this.blobAnimation.bind(this);
    this.bannerAnimationHead = this.bannerAnimationHead.bind(this);
  }

  componentDidMount() {
    this.bannerAnimationHead();
    this.blobAnimation();
  }

  bannerAnimationHead() {
    TweenMax.to(
      '.head-slide-1, .head-slide-2, .head-slide-3, .head-slide-4, .head-slide-5, .head-slide-6, .head-slide-7, .head-slide-8, .head-slide-9',
      0.1,
      { opacity: 1 }
    );
    TweenMax.from(
      `.animation-slide-head`,
      1,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, ease: Power0.easeInOut }
    );

    const tl = new TimelineMax({ paused: true, repeat: -1 });
    const subtitleTimeline = new TimelineLite();
    subtitleTimeline
      .fromTo(
        '.head-slide-1 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-1 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      //.to('.head-slide-1 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-1 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-2 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-2 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-2 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-2 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-3 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-3 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-3 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-3 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-4 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-4 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-4 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-4 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-5 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-5 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-5 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-5 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 2.5,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-6 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-6 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-6 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-6 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-7 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-7 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-7 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-7 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-8 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-8 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-8 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-8 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      )

      .fromTo(
        '.head-slide-9 div',
        { opacity: 0, y: 50, filter: 'blur(9px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        '+=1.5'
      )
      // .fromTo(
      //   '.head-slide-9 .uniq',
      //   0.7,
      //   { scale: 1 },
      //   { scale: 1.03, ease: Power0.easeInOut },
      //   '+=1'
      // )
      // .to('.head-slide-9 .uniq', 0.7, { scale: 1 }, '+=.2')
      .to(
        '.head-slide-9 div',
        {
          opacity: 0,
          y: 50,
          filter: 'blur(2px)',
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        '+=1'
      );

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
  blobAnimation() {
    const blob = new TimelineLite();
    blob.fromTo(
      '.banner-blob',
      2,
      { opacity: 0, x: 0, filter: 'blur(9px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', ease: Power0.inOut },
      '+=4'
    );
  }

  render() {
    return (
      <div className={styles.headBanner}>
        <Blob
          thinline={false}
          blobAnimClass="banner-blob"
          bb1opacity="0.24"
          bb2opacity="0.44"
          blobBorder="#000"
          bb1BgColor="#c9def4"
          bb2BgColor="#ccdef2"
          bb3BgColor="#ccdef2"
        />
        <div className={styles.title}>
          <div className={styles.animationSlideHead}>
            <h1>
              <div className={`${styles.slide} head-slide-1`}>
                <div>to&nbsp;</div>
                <div>create&nbsp;</div>
                <div>is&nbsp;</div>
                <br />
                <div>to&nbsp;</div>
                <div className="uniq">unite</div>
              </div>
              <div className={`${styles.slide} head-slide-2`}>
                <div>now&nbsp;</div>
                <div>is&nbsp;</div>
                <div className="uniq">everything</div>
              </div>
              <div className={`${styles.slide} head-slide-3`}>
                <div>we&nbsp;</div>
                <div>make&nbsp;</div>
                <div>product&nbsp;</div>
                <div>and&nbsp;</div> <div>package&nbsp;</div>
                <div className="uniq">design</div>
              </div>
              <div className={`${styles.slide} head-slide-4`}>
                <div>we&nbsp;</div>
                <div>make&nbsp;</div>
                <div>branding&nbsp;</div>
                <div>and&nbsp;</div>
                <div>digital&nbsp;</div>
                <div className="uniq">content</div>
              </div>
              <div className={`${styles.slide} head-slide-5`}>
                <div className="uniq">audit&nbsp;</div>
                <div>and&nbsp;</div>
                <div>research&nbsp;</div>
                <div>helps&nbsp;</div>
                <div>us&nbsp;</div>
                <div>build&nbsp;</div>
                <div className="uniq">great&nbsp;</div>
                <div>design</div>
              </div>
              <div className={`${styles.slide} head-slide-6`}>
                <div>our&nbsp;</div>
                <div>strategy&nbsp;</div>
                <div>is&nbsp;</div>
                <div>always&nbsp;</div>
                <div className="uniq">design-led</div> 
              </div>
              <div className={`${styles.slide} head-slide-7`}>
                <div>our&nbsp;</div>
                <div>approach&nbsp;</div>
                <div>is&nbsp;</div>
                <div>audit,&nbsp;</div>
                <div>research&nbsp;</div>
                <div>&amp;&nbsp;</div>
                <div className="uniq">execute</div>
              </div>
              <div className={`${styles.slide} head-slide-8`}>
                <div>branding&nbsp;</div>
                <div>is&nbsp;</div>
                <br />
                <div>our&nbsp;</div>
                <div className="uniq">middle&nbsp;</div>
                <div>name</div>
              </div>
              <div className={`${styles.slide} head-slide-9`}>
                <div>crazy&nbsp;</div>
                <div>client&nbsp;</div>
                <div>brings&nbsp;</div>
                <br />
                <div className="uniq">crazy&nbsp;</div>
                <div>ideas.</div>
              </div>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadingSlider;
