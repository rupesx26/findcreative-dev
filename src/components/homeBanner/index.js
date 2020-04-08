import React, { Component } from 'react';
import SubHeadingSlider from './SubHeadingSlider';
import HeadingSlider from './HeadingSlider';
import './homebanner.scss';
import Blob from '../blob/Blob';
import { imagePath } from '../../utils/assetUtils';

import { TimelineMax, Power0 } from 'gsap';

class Banner extends Component {
  constructor(props) {
    super(props);
    //this.blobAnimation = this.blobAnimation.bind(this);
    this.currentIndex = this.props.activeSlide;
    this.scrollDownAnimation = new TimelineMax();
  }
  componentDidMount() {
    //this.blobAnimation();

    this.scrollDownAnimation.fromTo(
      '.scroll-down',
      0.7,
      {
        opacity: 0,
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
      },
      {
        opacity: 1,
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
        ease: Power0.inOut
      }
    );
  }
  // blobAnimation() {
  //   const blob = new TimelineLite();
  //   blob.fromTo(
  //     '.banner-blob',
  //     1,
  //     { opacity: 0, x: 0, filter: 'blur(9px)' },
  //     { opacity: 1, x: 0, filter: 'blur(0px)', ease: Power0.inOut },
  //     '+=1'
  //   );
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeSlide === 0 && nextProps.direction === 'up') {
      this.scrollDownAnimation.to('.scroll-down', 1, {
        opacity: 1,
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
        ease: Power0.inOut
      });
    }

    if (nextProps.activeSlide === 1 && nextProps.direction === 'down') {
      this.scrollDownAnimation.to('.scroll-down', 1, {
        opacity: 0,
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: Power0.inOut
      });
    }
  }
  render() {
    return (
      <section className="banner-wrapper section">
        <div className="container">
          <div className="row justify-content-center no-gutters">
            <div
              onClick={() => this.props.moveslide.moveSectionDown()}
              className="scroll-down"
            >
              <span className="text">Scroll</span>
              <span>
                <img
                  className="down-arrow"
                  src={imagePath('down-arrow-1.svg')}
                  alt=""
                />
              </span>
            </div>

            <div className="col-md-10 col-xs-10 col-sm-10 col-lg-10">
              <div className="banner">
                <div className="view">
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
