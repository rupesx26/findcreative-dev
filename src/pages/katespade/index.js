import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import {
  TimelineLite,
  TimelineMax,
  TweenMax,
  Power2,
  Power0,
  Linear,
  Power4,
  CSSPlugin
} from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { kateImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import './kate.scss';
const plugins = [CSSPlugin];

class KateSpade extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.darkArea = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.KateHero = kateImagePath('kate-hero.png');
    this.KateImgOne = kateImagePath('kate-img-1.jpg');
    this.KateImgTwo = kateImagePath('kate-img-2.jpg');
    this.KateImgThree = kateImagePath('kate-img-3.jpg');
    this.KateImgFour = kateImagePath('kate-img-4.jpg');
    this.KateImgFive = kateImagePath('kate-img-5.jpg');
    this.KateImgSix = kateImagePath('kate-img-6.png');
    this.KateImgSeven = kateImagePath('kate-img-7.jpg');
    this.KateImgEight = kateImagePath('kate-img-8.jpg');
    this.KateImgNine = kateImagePath('kate-img-9.jpg');
    this.KateImgTen = kateImagePath('kate-img-10.jpg');
    this.KateImgEleven = kateImagePath('kate-img-11.jpg');
    this.KateImgTwelve = kateImagePath('kate-img-12.jpg');
    this.KateImgThirteen = kateImagePath('kate-img-13.jpg');
    this.KateImgFourteen = kateImagePath('kate-img-14.jpg');
    this.KateImgFifteen = kateImagePath('kate-img-15.png');

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
    //require('debug.addIndicators');

    this.ScrollMagic = require('scrollmagic');
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(
      this.ScrollMagic,
      TweenMax,
      TimelineLite,
      TimelineMax
    );
    const firstFoldAnimation = new TimelineLite();
    firstFoldAnimation
      .fromTo(
        '.img-one',
        2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-two',
        2,
        { opacity: 0, x: -100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.50'
      )
      .fromTo(
        '.img-three',
        2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.50'
      )
      .fromTo(
        '.img-four',
        2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-five',
        2,
        { opacity: 0, x: -100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-six',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-seven',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-2',
      reverse: false,
      triggerHook: 0.7
    })
      .setTween(firstFoldAnimation)
      .addTo(this.controller);

    const thirdFoldAnimation = new TimelineLite();
    thirdFoldAnimation

      .fromTo(
        '.fold-3 h2',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-eight',
        2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-nine',
        2,
        { opacity: 0, x: -100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.3'
      )
      .fromTo(
        '.img-ten',
        2,
        { opacity: 0, y: -100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.3'
      )
      .fromTo(
        '.img-eleven',
        2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-twelve',
        2,
        { opacity: 0, x: -100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-thirteen',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-fourteen',
        2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.3'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-3',
      reverse: false,
      triggerHook: 0.5
    })
      .setTween(thirdFoldAnimation)
      //.addIndicators()
      .addTo(this.controller);

    const fourFoldAnimation = new TimelineLite();
    fourFoldAnimation
      .fromTo(
        '.fold-4 h2',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.img-fifteen',
        2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.3'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-4',
      reverse: false,
      triggerHook: 0.7
    })
      .setTween(fourFoldAnimation)
      // .addIndicators()
      .addTo(this.controller);
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const bannerElement = this.bannerWrapper.current;
    const darkArea = this.darkArea.current;

    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: true,
        footerActive: true,
        showSayHello: true
      });
    } else if (bannerElement.offsetHeight > winScroll) {
      this.setState({
        toggleHeader: true,
        showSayHello: false
      });
    } else if (darkArea.offsetTop + darkArea.offsetHeight - 100 < winScroll) {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    } else if (darkArea.offsetTop + 300 < winScroll) {
      this.setState({
        toggleHeader: true,
        showSayHello: true
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
      if (mainWrapperElem.offsetHeight < winScroll) {
        this.setState({
          toggleHeader: true
        });
      }
    }
  }

  render() {
    const projectSummaryContent = {
      workTitle: `Kate Spade`,
      client: `Sprintler`,
      project: `Digital Audit`,
      brief: `Perform a digital audit for Kate Spade, Singapore`,
      para1: `Being a global luxury fashion brand, Kate Spade was faced with a sudden flurry of new entrants and competition brands stealing the limelight. \n We helped them reclaim their position by auditing their Instagram page and strategizing creative ways to stand out of the clutter. The first step was to build \n a unique, identifiable brand identity, tone of voice and brand personality. We also helped them to identify Instagram fashion influencers/bloggers based out of Singapore.`,
      para2: ` `
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
            className="page-wrapper work-details-page kate"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
            >
              <div className="banner-img-container">
                <img src={this.KateHero} />
              </div>
              <WorkPageNavigation
                prevLink="/work/nihar-gold"
                nextLink="/work/thambbi"
              />
            </div>
            <div className="full-page-wrapper work-content">
              <ProjectPageSummary
                title={projectSummaryContent.workTitle}
                para1={projectSummaryContent.para1}
                para2={projectSummaryContent.para2}
                client={projectSummaryContent.client}
                project={projectSummaryContent.project}
                brief={projectSummaryContent.brief}
              />
            </div>

            <div className="fold-2">
              <div className="container">
                <div className="row justify-content-center no-gutters">
                  <div className="col-md-8 col-xs-12">
                    <div className="project-grid-one">
                      <div className="project-image-container img-one">
                        <img src={this.KateImgOne} />
                      </div>
                      <div className="project-image-container img-two">
                        <img src={this.KateImgTwo} />
                      </div>
                      <div className="project-image-container img-three">
                        <img src={this.KateImgThree} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center no-gutters">
                  <div className="col-md-11 col-xs-12 project-grid-two">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <div className="project-image-container justify-content-left">
                          <div className="col-md-11 col-xs-12 img-four">
                            <img src={this.KateImgFour} />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-xs-12">
                        <div className="project-image-container justify-content-right">
                          <div className="col-md-11 col-xs-12 img-five">
                            <img src={this.KateImgFive} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center no-gutters">
                  <div className="col-md-8 col-xs-12">
                    <div className="row">
                      <div className="project-image-container img-six">
                        <img src={this.KateImgSix} />
                      </div>
                      <div className="project-image-container img-seven">
                        <img src={this.KateImgSeven} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fold-3">
              <div className="container">
                <div className="row justify-content-center no-gutters">
                  <div className="col-md-8 col-xs-12">
                    <div className="row">
                      <div className="project-content">
                        <h2>Visual guide</h2>
                        <div
                          className="col-md-6 no-gutters"
                          style={{ display: 'none' }}
                        >
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>

                      <div className="project-image-container img-eight">
                        <img src={this.KateImgEight} />
                      </div>

                      <div className="project-image-container img-nine">
                        <img src={this.KateImgNine} />
                      </div>
                    </div>

                    <div className="project-image-container-grid-two">
                      <div className="row">
                        <div className="col-md-6 col-xs-12">
                          <div className="project-image-container img-ten">
                            <img src={this.KateImgTen} />
                          </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                          <div className="project-image-container img-eleven">
                            <img src={this.KateImgEleven} />
                          </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                          <div className="project-image-container img-twelve">
                            <img src={this.KateImgTwelve} />
                          </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                          <div className="project-image-container img-thirteen">
                            <img src={this.KateImgThirteen} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="project-image-container img-fourteen">
                      <img src={this.KateImgFourteen} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fold-4" id="kate-black-section" ref={this.darkArea}>
              <div className="container">
                <div className="row justify-content-center no-gutters">
                  <div className="col-md-8 col-xs-12">
                    <div className="row">
                      <div className="project-content">
                        <h2>Grid guide</h2>
                        <div
                          className="col-md-6 no-gutters"
                          style={{ display: 'none' }}
                        >
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="project-image-container img-fifteen"
                      ref={el => (this.container = el)}
                    >
                      <img src={this.KateImgFifteen} />
                    </div>
                    <div
                      className="diagonal-bg"
                      id="before-footer"
                      style={{ height: '60%' }}
                    ></div>
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
              to="/work/thambbi"
              data-text="Thambbi"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Thambbi
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

export default KateSpade;
