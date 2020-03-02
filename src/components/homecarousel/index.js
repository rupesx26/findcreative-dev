import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  TimelineMax,
  Power0,
  Power1,
  Power2,
  Power3,
  Power4,
  TweenMax
} from 'gsap/dist/gsap';
import { workImagePath } from '../../utils/assetUtils';
import './wrapper.scss';
import Pagination from '../verticalpagination';

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.currentIndex = this.props.activeSlide;
    this.slideAnimation1 = new TimelineMax();
    this.slideAnimation2 = new TimelineMax();
    this.slideAnimation3 = new TimelineMax();
    this.slideAnimation4 = new TimelineMax();
    this.footerAnimation = new TimelineMax();
    this.image1 = workImagePath('hrx.jpg');
    this.image2 = workImagePath('nihar-gold.jpg');
    this.image3 = workImagePath('coco-soul.jpg');
    this.image4 = workImagePath('sussegado.jpg');
    this.paginationBar = new TimelineMax();
    this.state = {
      toggleHeader: this.props.toggleHeader,
      count: 0,
      totalCount: 4
    };
  }
  componentDidMount() {
    // //Slide 1 animation
    this.slideAnimation1
      .to('.slide-1 .carousel-img-clip', 0.1, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: Power0.inOut
      })
      .to('.slide-1 .project-title', 0.1, { y: -350, opacity: 0 })
      .to('.slide-1 .project-type', 0.1, { y: 200, opacity: 0 });

    this.slideAnimation2
      .to('.slide-2 .carousel-img-clip', 0.1, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: Power0.inOut
      })
      .to('.slide-2 .project-title', 0.1, { y: -350, opacity: 0 })
      .to('.slide-2 .project-type', 0.1, { y: 200, opacity: 0 });

    this.slideAnimation3
      .to('.slide-3 .carousel-img-clip', 0.1, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: Power0.inOut
      })
      .to('.slide-3 .project-title', 0.1, { y: -350, opacity: 0 })
      .to('.slide-3 .project-type', 0.1, { y: 200, opacity: 0 });

    this.slideAnimation4
      .to('.slide-4 .carousel-img-clip', 0.1, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        ease: Power0.inOut
      })
      .to('.slide-4 .project-title', 0.1, { y: -350, opacity: 0 })
      .to('.slide-4 .project-type', 0.1, { y: 200, opacity: 0 });

    this.footerAnimation.to('#footer-view', 1, {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    });

    this.paginationBar.to('.carousel-bar-tracker', 0, {
      opacity: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      ease: Power0.inOut
    });
  }
  componentWillReceiveProps(nextProps) {
    //Slide 0 start
    if (nextProps.activeSlide === 0 && nextProps.direction === 'up') {
      this.slideAnimation1
        .to('.slide-1 .project-title', 0.2, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-1 .project-type', 0.2, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-1 .carousel-img-clip', 0.5, {
          opacity: 1,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });

      this.paginationBar.to('.carousel-bar-tracker', 0, {
        opacity: 0,
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        ease: Power0.inOut
      });
    }
    //Slide 0 end

    //Slide 1 start
    if (nextProps.activeSlide === 1 && nextProps.direction === 'down') {
      this.slideAnimation1
        .to('.slide-1 .carousel-img-clip', 0.5, {
          opacity: 1,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
          ease: Power4.inOut
        })
        .to('.slide-1 .project-title', 0.2, {
          y: 0,
          opacity: 1,
          ease: Power3.inOut
        })
        .to('.slide-1 .project-type', 0.2, {
          y: 70,
          opacity: 1,
          ease: Power3.inOut
        });
      this.setState({
        count: nextProps.activeSlide
      });
      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 23%, 0 23%)',
          ease: Power2.inOut
        },
        '+=0.1'
      );
    } else if (nextProps.activeSlide === 1 && nextProps.direction === 'up') {
      this.slideAnimation2
        .to('.slide-2 .project-title', 0.2, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-2 .project-type', 0.2, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-2 .carousel-img-clip', 0.5, {
          opacity: 1,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });

      this.slideAnimation1
        .to('.slide-1 .carousel-img-clip', 0.5, {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        })
        .to('.slide-1 .project-title', 0.2, {
          y: 0,
          opacity: 1,
          ease: Power1.inOut
        })
        .to(
          '.slide-1 .project-type',
          0.2,
          { y: 70, opacity: 1, ease: Power1.inOut },
          '-=0.1'
        )
        .set('.fca-white', { className: '+=fca-black' });
      this.setState({
        count: nextProps.activeSlide
      });
      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 23%, 0 23%)',
          ease: Power2.inOut
        },
        '+=0.1'
      );
    }
    //Slide 1 end

    //Slide 2 start
    if (nextProps.activeSlide === 2 && nextProps.direction === 'down') {
      this.slideAnimation1
        .to('.slide-1 .project-title', 0.2, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-1 .project-type', 0.2, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-1 .carousel-img-clip', 0.5, {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          ease: Power4.inOut
        });

      this.slideAnimation2
        .to('.slide-2 .carousel-img-clip', 0.5, {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        })
        .to('.slide-2 .project-title', 0.2, {
          y: 0,
          opacity: 1,
          ease: Power1.inOut
        })
        .to(
          '.slide-2 .project-type',
          0.2,
          { y: 70, opacity: 1, ease: Power1.inOut },
          '-=0.1'
        );
      this.setState({
        count: nextProps.activeSlide
      });

      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          ease: Power2.inOut
        },
        '+=0.1'
      );
    } else if (nextProps.activeSlide === 2 && nextProps.direction === 'up') {
      this.slideAnimation3
        .to('.slide-3 .project-title', 0.2, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-3 .project-type', 0.2, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-3 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });

      this.slideAnimation2
        .to('.slide-2 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        })
        .to('.slide-2 .project-title', 0.2, {
          y: 0,
          opacity: 1,
          ease: Power1.inOut
        })
        .to(
          '.slide-2 .project-type',
          0.2,
          { y: 70, opacity: 1, ease: Power1.inOut },
          '-=0.1'
        )
        .set('.fca-white', { className: '+=fca-black' });
      this.setState({
        count: nextProps.activeSlide
      });
      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
          ease: Power2.inOut
        },
        '+=0.1'
      );
    }
    //Slide 2 end

    //Slide 3 start
    if (nextProps.activeSlide === 3 && nextProps.direction === 'down') {
      this.slideAnimation2
        .to('.slide-2 .project-title', 0.2, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-2 .project-type', 0.2, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-2 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          ease: Power4.inOut
        });

      this.slideAnimation3
        .to('.slide-3 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        })
        .to('.slide-3 .project-title', 0.2, {
          y: 0,
          opacity: 1,
          ease: Power1.inOut
        })
        .to(
          '.slide-3 .project-type',
          0.2,
          { y: 70, opacity: 1, ease: Power1.inOut },
          '-=0.1'
        );
      this.setState({
        count: nextProps.activeSlide
      });
      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)',
          ease: Power2.inOut
        },
        '+=0.1'
      );
    } else if (nextProps.activeSlide === 3 && nextProps.direction === 'up') {
      this.slideAnimation4
        .to('.slide-4 .project-title', 0.2, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-4 .project-type', 0.2, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-4 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          ease: Power4.inOut
        });

      this.slideAnimation3
        .to('.slide-3 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        })
        .to('.slide-3 .project-title', 0.2, {
          y: 0,
          opacity: 1,
          ease: Power1.inOut
        })
        .to(
          '.slide-3 .project-type',
          0.2,
          { y: 70, opacity: 1, ease: Power1.inOut },
          '-=0.1'
        )
        .set('.fca-white', { className: '+=fca-black' });
      this.setState({
        count: nextProps.activeSlide
      });
      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)',
          ease: Power2.inOut
        },
        '+=0.1'
      );
    }
    //Slide 3 end

    //Slide 4 start
    if (nextProps.activeSlide === 4 && nextProps.direction === 'down') {
      this.slideAnimation3
        .to('.slide-3 .project-title', 0.2, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-3 .project-type', 0.2, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-3 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          ease: Power4.inOut
        });
      this.slideAnimation4
        .to('.slide-4 .carousel-img-clip', 0.5, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power4.inOut
        })
        .to('.slide-4 .project-title', 0.2, {
          y: 0,
          opacity: 1,
          ease: Power1.inOut
        })
        .to(
          '.slide-4 .project-type',
          0.2,
          { y: 80, opacity: 1, ease: Power1.inOut },
          '-=0.1'
        );
      this.setState({
        count: nextProps.activeSlide
      });
      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power2.inOut
        },
        '+=0.1'
      );
    } else if (nextProps.activeSlide === 4 && nextProps.direction === 'up') {
      //this.paginationBar
      //.to('.carouse-pagination-wrapper', .5, {opacity:0, ease: Power2.inOut})
      this.footerAnimation
        .to('#footer-view', 1, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
          ease: Power1.inOut
        })
        .set('.fca-white', { className: '+=fca-black' });

      this.slideAnimation4
        .to(
          '.slide-4 .carousel-img-clip',
          0.5,
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            ease: Power4.inOut
          },
          '+=0.5'
        )
        .to(
          '.slide-4 .project-title',
          0.2,
          {
            y: 0,
            opacity: 1,
            ease: Power1.inOut
          },
          '+=0.1'
        )
        .to(
          '.slide-4 .project-type',
          0.2,
          { y: 80, opacity: 1, ease: Power1.inOut },
          '+=0.1'
        )
        .to(
          '.carouse-pagination-wrapper',
          0.2,
          { opacity: 1, ease: Power2.inOut },
          '+=0.1'
        );

      this.paginationBar.to(
        '.carousel-bar-tracker',
        1,
        {
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          ease: Power2.inOut
        },
        '+=0.2'
      );
    }
    //Slide 4 end

    //Slide 5 start
    if (nextProps.activeSlide === 5 && nextProps.direction === 'down') {
      this.paginationBar.to('.carouse-pagination-wrapper', 0.1, {
        opacity: 0,
        ease: Power2.inOut
      });
      this.slideAnimation4
        .to('.slide-4 .project-title', 0.1, {
          y: -150,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-4 .project-type', 0.1, {
          y: 90,
          opacity: 0,
          ease: Power1.inOut
        })
        .to('.slide-4 .carousel-img-clip', 0.1, {
          clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
          ease: Power4.inOut
        });
      this.footerAnimation
        .to('#footer-view', 1, {
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
          ease: Power4.inOut
        })

        .set('.fca-black', { className: '+=fca-white' });
    }
    //Slide 5 end
  }

  render() {
    return (
      <React.Fragment>
        <section className="section slide-wrapper slide-1">
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
        <section className="section slide-wrapper slide-2">
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
                <div className="carousel-right-content">
                  <div className="project-content">
                    <h2 className="project-title">Nihar Gold</h2>
                    <h3 className="project-type">Packaging Design</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="section slide-wrapper slide-3">
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
                <div className="carousel-right-content">
                  <div className="project-content">
                    <h2 className="project-title">Coco Soul</h2>
                    <h3 className="project-type">Digital Content</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="section slide-wrapper slide-4">
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
                <div className="carousel-right-content">
                  <div className="project-content">
                    <h2 className="project-title">Sussegado</h2>
                    <h3 className="project-type">Product & Package Design</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <Pagination
            totalCount={this.state.totalCount}
            count={this.state.count}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default HomeCarousel;
