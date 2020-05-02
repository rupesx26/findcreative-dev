import React, { Component } from 'react';
import { TweenMax, TimelineLite, TimelineMax, Power0, CSSPlugin } from 'gsap';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import './subheading.scss';
const plugins = [CSSPlugin];

class SubHeadingSlider extends Component {
  constructor(props) {
    super(props);
    this.bannerAnimation = this.bannerAnimation.bind(this);
    this.bannerAnimationMobile = this.bannerAnimationMobile.bind(this);
    this.subHeadingDesktop = this.subHeadingDesktop.bind(this);
    this.subHeadingMobile = this.subHeadingMobile.bind(this);
  }

  componentDidMount() {
    if (!isMobile) {
      this.bannerAnimation();
    }
    // } else {
    //   this.bannerAnimationMobile()
    // }
  }

  bannerAnimationMobile() {
    TweenMax.to('.slide-mob', 0.1, { opacity: 0, y: 20 });
    const mobtTimelineMax = new TimelineMax({ paused: true, repeat: -1 });
    const mobtTimelineLite = new TimelineLite();
    mobtTimelineLite
      .to('.sub-mob-slide-1', 2.5, { opacity: 1, y: 0 })
      .to('.sub-mob-slide-1', 2.5, { opacity: 0, y: -20 }, '+=1')
      .to('.sub-mob-slide-2', 2.5, { opacity: 1, y: 0 })
      .to('.sub-mob-slide-2', 2.5, { opacity: 0, y: -20 }, '+=1')
      .to('.sub-mob-slide-3', 2.5, { opacity: 1, y: 0 })
      .to('.sub-mob-slide-3', 2.5, { opacity: 0, y: -20 }, '+=1')
      .to('.sub-mob-slide-4', 2.5, { opacity: 1, y: 0 })
      .to('.sub-mob-slide-4', 2.5, { opacity: 0, y: -20 }, '+=1')
      .to('.sub-mob-slide-5', 2.5, { opacity: 1, y: 0 })
      .to('.sub-mob-slide-5', 2.5, { opacity: 0, y: -20 }, '+=1');
    mobtTimelineMax.add(mobtTimelineLite);

    // delay start of slider for 2 seconds
    TweenMax.delayedCall(
      1,
      function(tl) {
        tl.restart(true, false);
      },
      [mobtTimelineMax]
    );
  }

  bannerAnimation() {
    TweenMax.to('.sub-slide-2', 0.1, { left: '-100px' });
    TweenMax.to('.sub-slide-2, .type', 0.1, {
      y: 20,
      opacity: 0,
      x: 10
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
        2,
        { opacity: 0, y: 20, ease: Power0.easeInOut },
        { opacity: 1, y: 0, ease: Power0.easeInOut },
        '+=1'
      )
      .to(
        '.sub-slide-1',
        2,
        { opacity: 0, y: -20, ease: Power0.easeInOut },
        '+=1'
      )
      .to(
        '.sub-slide-2',
        2,
        { opacity: 1, y: 0, ease: Power0.easeInOut },
        '+=1'
      )
      .fromTo('.type-1', 2, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '+=1')
      .to('.type-1', 2.5, { opacity: 1 })
      .to('.type-1', 2.5, { opacity: 0, y: -20 }, '+=1')
      .to('.type-2', 2.5, { opacity: 1, y: 0 }, '+=1')
      .to('.type-2', 2.5, { opacity: 1 })
      .to('.type-2', 2.5, { opacity: 0, y: -20 }, '+=1')
      .to('.type-3', 2.5, { opacity: 1, y: 0 }, '+=1')
      .to('.type-3', 2.5, { opacity: 1 })
      .to('.type-3', 2.5, { opacity: 0, y: -20 }, '+=1')
      .to('.sub-slide-2', 1, { left: '-50px' })
      .to('.for-last', 1, { opacity: 0, y: -20 }, '+=1')
      .to('.last', 1, { opacity: 0, x: -35 }, '+=1')
      .to('.last', 2.5, { opacity: 1, y: 0 }, '+=1')
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

  subHeadingDesktop() {
    return (
      <h2>
        <span className="slideWrap sub-slide-1">We are findcreative Ave.</span>
        <span className="slideWrap sub-slide-2">
          <span className="init-text">
            findcreative Ave <span className="for-last">is a</span>{' '}
          </span>
          <span>
            <span className="type type-1">design agency</span>
            <span className="type type-2">creative agency</span>
            <span className="type type-3">digital agency</span>
            <span className="type last">loves crazy</span>
          </span>
        </span>
      </h2>
    );
  }

  subHeadingMobile() {
    return (
      <div className="mobile-subhead-wrapper">
        <h2 className="sub-mob-slide-1 slide-mob">We are findcreative Ave.</h2>
        {/* <h2 className='sub-mob-slide-2 slide-mob'>findcreative Ave is a design agency</h2>
        <h2 className='sub-mob-slide-3 slide-mob'>findcreative Ave is a creative agency</h2>
        <h2 className='sub-mob-slide-4 slide-mob'>findcreative Ave is a digital agency</h2>
        <h2 className='sub-mob-slide-5 slide-mob'>findcreative Ave loves crazy</h2> */}
      </div>
    );
  }

  render() {
    return (
      <div className="sub-head-banner">
        <div className="sub-title">
          <div className="animation-slide">
            {!isMobile ? this.subHeadingDesktop() : this.subHeadingMobile()}
          </div>
        </div>
      </div>
    );
  }
}

export default SubHeadingSlider;
