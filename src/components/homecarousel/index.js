import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  TimelineMax,
  Power0,
  Power2,
  Power4,
  Power1,
  TweenMax
} from 'gsap/dist/gsap';
import { workImagePath } from '../../utils/assetUtils';
import './wrapper.scss';

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.currentIndex = this.props.activeSlide;

    this.slideAnimation1 = new TimelineMax();
    this.slideAnimation2 = new TimelineMax();
    this.slideAnimation3 = new TimelineMax();
    this.slideAnimation4 = new TimelineMax();
    this.image1 = workImagePath('hrx.jpg');
    this.image2 = workImagePath('nihar-gold.jpg');
    this.image3 = workImagePath('coco-soul.jpg');
    this.image4 = workImagePath('sussegado.jpg');
  }
  componentDidMount() {
    // //Slide 1 animation
    this.slideAnimation1
      .to('.slide-1 .carousel-wrapper', 0.5, {
        y: 200,
        opacity: 0,
        visibility: 'hidden'
      })
      .to('.slide-1 .carousel-img-clip', 0.5, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: Power0.inOut
      });

    this.slideAnimation2
      .to('.slide-2 .carousel-wrapper', 0.5, {
        y: 200,
        opacity: 0,
        visibility: 'hidden'
      })
      .to('.slide-2 .carousel-img-clip', 0.5, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: Power0.inOut
      });
    // this.slideAnimation1
    // .to(
    //   '.slide-1 .carousel-wrapper',
    //   .5,
    //   {  opacity: 0 },
    //   // {
    //   //   opacity: 1,
    //   //   visibility: 'visible',
    //   //   ease: Power0.inOut
    //   // },
    //   '+=0.6'
    // )
    // .fromTo(
    //   '.slide-1 .carousel-img-clip',
    //   .7,
    //   { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' ,
    //     ease: Power0.inOut
    //   },
    //   '-=0.01'
    // )

    //Slide 2 animation
    // this.slideAnimation2
    // .fromTo(
    //   '.slide-2 .carousel-wrapper',
    //   .5,
    //   {  opacity: 0 },
    //   {
    //     opacity: 1,
    //     visibility: 'visible',
    //     ease: Power0.inOut
    //   },
    //   '+=0.6'
    // )
    // .fromTo(
    //   '.slide-2 .carousel-img-clip',
    //   .7,
    //   { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' ,
    //     ease: Power0.inOut
    //   },
    //   '-=0.01'
    // )

    // //Slide 3 animation
    // this.slideAnimation3
    // .fromTo(
    //   '.slide-3 .carousel-wrapper',
    //   .5,
    //   {  opacity: 0 },
    //   {
    //     opacity: 1,
    //     visibility: 'visible',
    //     ease: Power0.inOut
    //   },
    //   '+=0.6'
    // )
    // .fromTo(
    //   '.slide-3 .carousel-img-clip',
    //   .7,
    //   { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' ,
    //     ease: Power0.inOut
    //   },
    //   '-=0.01'
    // )

    // //Slide 4 animation
    // this.slideAnimation4
    // .fromTo(
    //   '.slide-4 .carousel-wrapper',
    //   .5,
    //   {  opacity: 0 },
    //   {
    //     opacity: 1,
    //     visibility: 'visible',
    //     ease: Power0.inOut
    //   },
    //   '+=0.6'
    // )
    // .fromTo(
    //   '.slide-4 .carousel-img-clip',
    //   .7,
    //   { y: 200, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' ,
    //     ease: Power0.inOut
    //   },
    //   '-=0.01'
    // )
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.activeSlide === 2 && nextProps.direction === 'down');
    if (nextProps.activeSlide === 0 && nextProps.direction === 'up') {
      this.slideAnimation1
        .to('.slide-1 .carousel-wrapper', 0.5, {
          y: 200,
          opacity: 0,
          visibility: 'hidden'
        })
        .to('.slide-1 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });
      // TweenMax.staggerFromTo('.slide-1 .project-title', 1.5, {y:0, filter: 'blur(0px)',  opacity:1}, {opacity:0, y:300, filter: 'blur(10px)', ease:Power1.inOut }, '+=1');
    }
    if (nextProps.activeSlide === 1 && nextProps.direction === 'down') {
      // TweenMax.staggerFromTo('.slide-1 .project-title', 1.5, {opacity:0, y:300, filter: 'blur(10px)' }, {y:0, filter: 'blur(0px)',  opacity:1, ease:Power1.inOut}, '+=1');
      // TweenMax.staggerFromTo('.slide-1 .project-type', 1.5, {opacity:0, y:90}, {y:0, opacity:1, ease:Power1.inOut});

      this.slideAnimation1
        .to('.slide-1 .carousel-wrapper', 0.7, {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: Power1.inOut
        })
        .to('.slide-1 .carousel-img-clip', 0.7, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
          ease: Power4.inOut
        });
    } else if (nextProps.activeSlide === 1 && nextProps.direction === 'up') {
      this.slideAnimation2
        .to('.slide-2 .carousel-wrapper', 0.5, {
          y: 200,
          opacity: 0,
          visibility: 'hidden'
        })
        .to('.slide-2 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });

      this.slideAnimation1
        .to('.slide-1 .carousel-wrapper', 0.5, {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: Power1.inOut
        })
        .to('.slide-1 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });
    }
    if (nextProps.activeSlide === 2 && nextProps.direction === 'down') {
      this.slideAnimation1
        .to('.slide-1 .carousel-wrapper', 0.5, {
          y: 200,
          opacity: 0,
          visibility: 'hidden',
          ease: Power1.inOut
        })
        .to('.slide-1 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          ease: Power4.inOut
        });

      this.slideAnimation2
        .to('.slide-2 .carousel-wrapper', 0.7, {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: Power1.inOut
        })
        .to('.slide-2 .carousel-img-clip', 0.7, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });
    } else if (nextProps.activeSlide === 2 && nextProps.direction === 'up') {
      // this.slideAnimation2
      // .to('.slide-2 .carousel-wrapper', .5, {y:200, opacity: 0, visibility: 'hidden' })
      // .to('.slide-2 .carousel-img-clip', .5, {clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', ease: Power4.inOut})

      this.slideAnimation2
        .to('.slide-2 .carousel-wrapper', 0.5, {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: Power1.inOut
        })
        .to('.slide-2 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });
    }

    if (nextProps.activeSlide === 3 && nextProps.direction === 'down') {
      this.slideAnimation2
        .to('.slide-2 .carousel-wrapper', 0.5, {
          y: 200,
          opacity: 0,
          visibility: 'hidden',
          ease: Power1.inOut
        })
        .to('.slide-2 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          ease: Power4.inOut
        });
    }
    // if (nextProps.activeSlide === 3) {
    //   this.slideAnimation2.timeScale(1).reverse();
    //   this.slideAnimation4.timeScale(1).reverse();
    //   this.slideAnimation3.play();
    // }
    // if (nextProps.activeSlide === 4) {
    //   this.slideAnimation3.timeScale(1).reverse();
    //   this.slideAnimation4.play();
    // }
    // if (nextProps.activeSlide === 5) {
    //   this.slideAnimation4.timeScale(1).reverse();
    // }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section slide-1">
          <div className="carousel-wrapper">
            <Link>
              <div className="carousel-container">
                <div className="carousel-left-content">
                  <div className="carousel-img-clip">
                    <div
                      className="img-container"
                      style={{ backgroundImage: `url(${this.image1})` }}
                    ></div>
                  </div>
                </div>
                <div className="carousel-right-content">
                  <div className="project-content">
                    <h2 className="project-title">Hrithik Roshan's</h2>
                    <h3 className="project-type">Graphic Novel</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="section slide-2">
          <div className="carousel-wrapper">
            <Link>
              <div className="carousel-container">
                <div className="carousel-left-content">
                  <div className="carousel-img-clip">
                    <div
                      className="img-container"
                      style={{ backgroundImage: `url(${this.image2})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="section slide-3">
          <div className="carousel-wrapper">
            <Link>
              <div className="carousel-container">
                <div className="carousel-left-content">
                  <div className="carousel-img-clip">
                    <div
                      className="img-container"
                      style={{ backgroundImage: `url(${this.image3})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="section slide-4">
          <div className="carousel-wrapper">
            <Link>
              <div className="carousel-container">
                <div className="carousel-left-content">
                  <div className="carousel-img-clip">
                    <div
                      className="img-container"
                      style={{ backgroundImage: `url(${this.image4})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomeCarousel;
