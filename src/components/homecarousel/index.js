import React, { Component } from 'react';
import './wrapper.scss';
import { TimelineMax, Power0, Power2, Power1 } from 'gsap/dist/gsap';

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.currentIndex = this.props.activeSlide;
    this.slideAnimation1 = new TimelineMax({ paused: true, reversed: true });
    this.slideAnimation2 = new TimelineMax({ paused: true, reversed: true });
    this.slideAnimation3 = new TimelineMax({ paused: true, reversed: true });
    this.slideAnimation4 = new TimelineMax({ paused: true, reversed: true });
  }
  componentDidMount() {
    //this.slideAnimation()
    this.slideAnimation1.fromTo(
      '.in-slide',
      1,
      { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: Power0.inOut
      },
      '+=1'
    );
    this.slideAnimation2.fromTo(
      '.in-slide-1',
      1,
      { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: Power0.inOut
      },
      '+=1'
    );
    this.slideAnimation3.fromTo(
      '.in-slide-2',
      1,
      { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: Power0.inOut
      },
      '+=1'
    );
    this.slideAnimation4.fromTo(
      '.in-slide-3',
      1,
      { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: Power0.inOut
      },
      '+=1'
    );
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextprops', nextProps.activeSlide);
    if (nextProps.activeSlide === 0) {
      this.slideAnimation1.timeScale(2).reverse();
    }
    if (nextProps.activeSlide === 1) {
      this.slideAnimation1.play();
      this.slideAnimation2.timeScale(2).reverse();
    }
    if (nextProps.activeSlide === 2) {
      this.slideAnimation1.timeScale(2).reverse();
      // this.slideAnimation1
      // .fromTo('.in-slide', 1, { opacity:0,  clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"}, { opacity:1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: Power0.inOut}, '+=1');

      this.slideAnimation3.timeScale(2).reverse();
      this.slideAnimation2.play();
    }
    if (nextProps.activeSlide === 3) {
      this.slideAnimation2.timeScale(2).reverse();
      this.slideAnimation4.timeScale(2).reverse();
      this.slideAnimation3.play();
    }
    if (nextProps.activeSlide === 4) {
      this.slideAnimation3.timeScale(2).reverse();
      this.slideAnimation4.play();
    }
    if (nextProps.activeSlide === 5) {
      this.slideAnimation4.timeScale(2).reverse();
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section carousel">
          <div className="in-slide box" style={{ padding: '50px' }}>
            Carousel
          </div>
        </section>
        <section className="section carousel">
          <div className="in-slide-1 box" style={{ padding: '50px' }}>
            Carousel 1
          </div>
        </section>
        <section className="section carousel">
          <div className="in-slide-2 box" style={{ padding: '50px' }}>
            Carousel 2
          </div>
        </section>
        <section className="section carousel">
          <div className="in-slide-3 box" style={{ padding: '50px' }}>
            Carousel 3
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomeCarousel;
