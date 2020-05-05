import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import { TimelineLite, TweenMax, Linear, Power4, CSSPlugin } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { hrxImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import HrxSlider from '../../components/pageslider';
import './hrx.scss';
const plugins = [CSSPlugin];

//import 'debug.addIndicators';
class About extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.HrxHeaderBg = hrxImagePath('hrx-banner-bg.jpg');
    this.HrxImgOne = hrxImagePath('hrx-img-1.jpg');
    this.HrxImgTwo = hrxImagePath('hrx-img-2.jpg');
    this.HrxImgThree = hrxImagePath('hrx-img-3.jpg');
    this.HrxImgFour = hrxImagePath('hrx-img-4.jpg');
    this.HrxImgFive = hrxImagePath('book-cover.jpg');
    this.HrxImgSix = hrxImagePath('book-inside.jpg');
    this.HrxGraphicBg = hrxImagePath('hrx-graphic-bg.png');
    this.HrxChar = hrxImagePath('hrx-char.png');

    this.SbbSlide1 = hrxImagePath('strip-1/1.jpg');
    this.SbbSlide2 = hrxImagePath('strip-1/2.jpg');
    this.SbbSlide3 = hrxImagePath('strip-1/3.jpg');
    this.SbbSlide4 = hrxImagePath('strip-1/4.jpg');
    this.SbbSlide5 = hrxImagePath('strip-1/5.jpg');
    this.SbbSlide6 = hrxImagePath('strip-1/6.jpg');

    this.SbbSlide7 = hrxImagePath('strip-2/1.jpg');
    this.SbbSlide8 = hrxImagePath('strip-2/2.jpg');
    this.SbbSlide9 = hrxImagePath('strip-2/3.jpg');
    this.SbbSlide10 = hrxImagePath('strip-2/4.jpg');
    this.SbbSlide11 = hrxImagePath('strip-2/5.jpg');
    this.SbbSlide12 = hrxImagePath('strip-2/6.jpg');

    this.SbbSlide13 = hrxImagePath('strip-3/1.jpg');
    this.SbbSlide14 = hrxImagePath('strip-3/2.jpg');
    this.SbbSlide15 = hrxImagePath('strip-3/3.jpg');
    this.SbbSlide16 = hrxImagePath('strip-3/4.jpg');
    this.SbbSlide17 = hrxImagePath('strip-3/5.jpg');
    this.SbbSlide18 = hrxImagePath('strip-3/6.jpg');

    this.SbbSlide19 = hrxImagePath('strip-4/1.jpg');
    this.SbbSlide20 = hrxImagePath('strip-4/2.jpg');
    this.SbbSlide21 = hrxImagePath('strip-4/3.jpg');
    this.SbbSlide22 = hrxImagePath('strip-4/4.jpg');
    this.SbbSlide23 = hrxImagePath('strip-4/5.jpg');
    this.SbbSlide24 = hrxImagePath('strip-4/6.jpg');
    this.state = {
      toggleHeader: true,
      showSayHello: false,
      footerBgColor: 'dark',
      footerActive: false,
      fullpageAnimation: true,
      footerColor: ''
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    if (!isMobile) {
      this.pageAnimation();
    }
    const classArray = [
      'color1',
      'color2',
      'color3',
      'color4',
      'color5',
      'color6'
    ];
    const random = classArray[Math.floor(Math.random() * classArray.length)];
    this.setState({
      footerColor: random
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  pageAnimation() {
    TweenMax.fromTo(
      '.char-img',
      2.8,
      { y: 0 },
      { y: 20, repeat: -1, yoyo: true, ease: Linear.easeNone }
    );
    this.ScrollMagic = require('scrollmagic');
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineLite);

    const fold2Animation = new TimelineLite();
    fold2Animation
      .fromTo(
        '.fold-2-bg',
        2,
        { opacity: 0, y: 100, filter: 'blur(20px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', ease: Power4.easeOut },
        '+=1'
      )
      .fromTo(
        '.fold-2-content',
        1,
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.55'
      );
    new this.ScrollMagic.Scene({ triggerElement: '#fold-2', reverse: false })
      .setTween(fold2Animation)
      .addTo(this.controller);

    const outers = document.querySelectorAll('.fold-2-img'),
      novelSlides = document.querySelectorAll('.masonry-brick--h');
    for (let i = 0; i < outers.length; i++) {
      const child = outers[i].childNodes[0].childNodes;
      const fold6Animation = new TimelineLite();

      fold6Animation.fromTo(
        child,
        1.5,
        {
          y: 20,
          scale: 1.2,
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
        },
        {
          y: 50,
          scale: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: Power4.easeOut
        },
        '-=.95'
      );

      new this.ScrollMagic.Scene({ triggerElement: outers[i], reverse: false })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(fold6Animation)
        .addTo(this.controller);
    }

    for (let i = 0; i < novelSlides.length; i++) {
      const child = novelSlides[i].childNodes,
        fold6Animation = new TimelineLite();
      if (i % 2 === 0) {
        fold6Animation.fromTo(
          child,
          1.5,
          { y: -50, opacity: 0, filter: 'blur(20px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', ease: Power4.easeOut },
          '-=.95'
        );
      } else {
        fold6Animation.fromTo(
          child,
          1.5,
          { y: 50, opacity: 0, filter: 'blur(20px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', ease: Power4.easeOut },
          '-=.50'
        );
      }

      new this.ScrollMagic.Scene({
        triggerElement: novelSlides[i],
        reverse: false
      })
        .setTween(fold6Animation)
        .addTo(this.controller);
    }
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const bannerElement = this.bannerWrapper.current;

    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: true,
        footerActive: true
      });
    } else if (bannerElement.offsetHeight > winScroll) {
      this.setState({
        toggleHeader: true,
        showSayHello: false
      });
    } else if (bannerElement.offsetHeight < winScroll) {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    } else {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    }
    if (isMobile) {
      const newWinScroll = Math.round(winScroll);
      if (
        mainWrapperElem.offsetHeight < newWinScroll ||
        mainWrapperElem.offsetHeight === newWinScroll
      ) {
        this.setState({
          toggleHeader: true
        });
      }
    }
  }

  render() {
    const projectSummaryContent = {
      workTitle: `Hrithik Roshan`,
      client: `Hrithik Roshan`,
      project: `Graphic Novel Design`,
      brief: `Design a graphic novel for kids inspired from real life stories of Hrithik Roshan`,
      para1: `Hrithik Roshan is extensively involved in charitable initiatives for children. We partnered with him \n in one such event where he wanted to help \n under-confident kids. `,
      para2: `So, we created and designed a graphic novel that \n he would hand out to the kids. The story is inspired \n by Hrithik’s own struggles as a child and how \n he overcame hurdle after hurdle, \n to become the star he is today.`,
      para3: ` `
    };
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title="new react ssr about page"
            description="about page description"
            content="about us page content"
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />
          <div
            className="page-wrapper work-details-page hrx"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg hrx-bg"
              style={{ backgroundImage: `url(${this.HrxHeaderBg})` }}
            >
              <div className="bg-bdr"></div>
              <div className="container">
                <div className="row justify-content-center no-gutters">
                  <div className="col-md-10">
                    <div className="banner-text">
                      {/* Hrithik Roshan */}
                      {/* <img src={HrxBannerTxt}/> */}
                    </div>
                    <div className="char-img">
                      <img src={this.HrxChar} alt="hrx" />
                    </div>
                  </div>
                </div>
              </div>
              <WorkPageNavigation
                prevLink="/work/socranos-gravity"
                nextLink="/work/nihar-gold"
              />
            </div>
            <div className="full-page-wrapper work-content">
              <ProjectPageSummary
                title={projectSummaryContent.workTitle}
                para1={projectSummaryContent.para1}
                para2={projectSummaryContent.para2}
                para3={projectSummaryContent.para3}
                client={projectSummaryContent.client}
                project={projectSummaryContent.project}
                brief={projectSummaryContent.brief}
              />

              <div className="fold-2" id="fold-2">
                <div className="container" id="stage-2">
                  <div className="row justify-content-center no-gutters">
                    <div
                      className="fold-2-bg"
                      style={{
                        height: '100vh',
                        backgroundImage: `url(${this.HrxGraphicBg})`
                      }}
                    ></div>
                    <div className="col-md-11 col-xs-12">
                      <div className="row">
                        <div className="col-md-7"></div>
                        <div className="col-md-5 col-xs-12">
                          <div className="project-content fold-2-content justify-content-right">
                            <p>
                              My name is Hrithik Roshan and I would like <br />
                              to share my story with you. Here are some lessons{' '}
                              <br />
                              I’ve learnt along the way that have helped me{' '}
                              <br />
                              become who I am today.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="fold-5 fold-5-bg"
                id="fold-5"
                style={{ backgroundImage: `url(${this.HrxImgFive})` }}
              >
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-4">
                      <div className="project-image-container fold-5-img">
                        <div className="col-md-12 no-gutters">
                          {/* <img src={HrxImgFive}/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-6" id="fold-6">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-10 col-xs-12">
                      <div id="project-image-wrapper">
                        <div
                          className="project-image-container fold-2-img img-1 justify-content-left"
                          ref={el => (this.container = el)}
                        >
                          <div className="col-md-6 col-xs-12 no-gutters">
                            <img
                              src={this.HrxImgOne}
                              className="img"
                              alt="hrx"
                            />
                          </div>
                        </div>
                        <div
                          className="project-image-container img-2 fold-2-img justify-content-right"
                          ref={el => (this.container = el)}
                        >
                          <div className="col-md-6 col-xs-12 no-gutters">
                            <img
                              src={this.HrxImgTwo}
                              className="img"
                              alt="hrx"
                            />
                          </div>
                        </div>
                        <div
                          className="project-image-container img-3 fold-2-img  justify-content-left"
                          ref={el => (this.container = el)}
                        >
                          <div className="col-md-6 col-xs-12 no-gutters">
                            <img
                              src={this.HrxImgThree}
                              className="img"
                              alt="hrx"
                            />
                          </div>
                        </div>

                        <div
                          className="project-image-container img-4 fold-2-img justify-content-right"
                          ref={el => (this.container = el)}
                        >
                          <div className="col-md-6 col-xs-12 no-gutters">
                            <img
                              src={this.HrxImgFour}
                              className="img"
                              alt="hrx"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3" id="fold-3">
                <div className="container row no-gutters">
                  <div className="row no-gutters">
                    <div className="view" data-slide="1">
                      <HrxSlider
                        dots={false}
                        infinite={true}
                        speed={4000}
                        slidesToShow={2}
                        slidesToScroll={1}
                        fade={false}
                        autoplay={true}
                        autoplaySpeed={2000}
                        pauseOnHover={false}
                        centerMode={false}
                        variableWidth={true}
                        slide1={this.SbbSlide1}
                        slide2={this.SbbSlide2}
                        slide3={this.SbbSlide3}
                        slide4={this.SbbSlide4}
                        slide5={this.SbbSlide5}
                        slide6={this.SbbSlide6}
                      />
                    </div>
                    <div className="view" data-slide="2">
                      <HrxSlider
                        dots={false}
                        infinite={true}
                        speed={4000}
                        slidesToShow={2}
                        slidesToScroll={-1}
                        fade={false}
                        autoplay={true}
                        autoplaySpeed={2000}
                        pauseOnHover={false}
                        centerMode={false}
                        variableWidth={true}
                        slide1={this.SbbSlide12}
                        slide2={this.SbbSlide11}
                        slide3={this.SbbSlide10}
                        slide4={this.SbbSlide9}
                        slide5={this.SbbSlide8}
                        slide6={this.SbbSlide7}
                      />
                    </div>
                    <div className="view" data-slide="3">
                      <HrxSlider
                        dots={false}
                        infinite={true}
                        speed={4000}
                        slidesToShow={2}
                        slidesToScroll={1}
                        fade={false}
                        autoplay={true}
                        autoplaySpeed={2000}
                        pauseOnHover={false}
                        centerMode={false}
                        variableWidth={true}
                        slide1={this.SbbSlide13}
                        slide2={this.SbbSlide14}
                        slide3={this.SbbSlide15}
                        slide4={this.SbbSlide16}
                        slide5={this.SbbSlide17}
                        slide6={this.SbbSlide18}
                      />
                    </div>

                    <div className="view" data-slide="4">
                      <HrxSlider
                        dots={false}
                        infinite={true}
                        speed={4000}
                        slidesToShow={2}
                        slidesToScroll={-1}
                        fade={false}
                        autoplay={true}
                        autoplaySpeed={2000}
                        pauseOnHover={false}
                        centerMode={false}
                        variableWidth={true}
                        slide1={this.SbbSlide24}
                        slide2={this.SbbSlide23}
                        slide3={this.SbbSlide22}
                        slide4={this.SbbSlide21}
                        slide5={this.SbbSlide20}
                        slide6={this.SbbSlide19}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="fold-4 fold-5-bg"
                id="fold-4"
                style={{ backgroundImage: `url(${this.HrxImgSix})` }}
              >
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-6">
                      <div className="project-image-container fold-4-img">
                        <div className="col-md-12 no-gutters">
                          {/* <img src={HrxImgSix}/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer
            activeSlide={this.state.currentSlide}
            direction={this.state.currentDirection}
            footerBgColor={this.state.footerBgColor}
            toggleHeader={this.state.toggleHeader}
            footerActive={this.state.footerActive}
            fullpageAnimation={this.state.fullpageAnimation}
            ref={this.footerWrapper}
            onScroll={this.handleScroll}
          >
            <small className="footer-subtitle subtitle">Next Project?</small>
            <Link
              to="/work/nihar-gold"
              data-text="Nihar Gold"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Nihar Gold
              <div className="footer-arrow">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </Link>
          </Footer>
        </div>
      </PageAnimWrapper>
    );
  }
}

export default About;
