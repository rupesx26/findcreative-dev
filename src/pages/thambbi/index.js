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
import { thambbiImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import './thambbi.scss';
const plugins = [CSSPlugin];

class Thambbi extends Component {
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

    this.HeroBanner = thambbiImagePath('background.jpg');
    this.ThambbiImgOne = thambbiImagePath('thambbi-1.jpg');
    this.ThambbiImgTwo = thambbiImagePath('thambbi-2.jpg');
    this.ThambbiImgThree = thambbiImagePath('thambbi-3.jpg');
    this.ThambbiImgFour = thambbiImagePath('thambbi-4.jpg');
    this.ThambbiImgFive = thambbiImagePath('thambbi-5.jpg');
    this.ThambbiImgSix = thambbiImagePath('thambbi-6.jpg');
    this.ThambbiImgSeven = thambbiImagePath('thambbi-7.jpg');
    this.ThambbiImgEight = thambbiImagePath('thambbi-8.jpg');
    this.ThambbiImgNine = thambbiImagePath('thambbi-9.jpg');
    this.ThambbiImgTen = thambbiImagePath('thambbi-10.jpg');
    this.ThambbiThankYou = thambbiImagePath('thankyou.png');

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

    const animation1 = new TimelineLite();
    animation1
      .to('.fold-2 .text', 0.5, {
        color: '#fff',
        autoAlpha: 1,
        ease: Power0.easeOut
      })
      .to('.thambbi', 0.5, {
        backgroundColor: '#5c7845',
        autoAlpha: 1,
        ease: Power0.easeOut
      });
    new this.ScrollMagic.Scene({ triggerElement: '.changeColor' })
      .setTween(animation1)
      .addTo(this.controller);

    const animation2 = new TimelineLite();
    animation2.to('.thambbi', 0.5, {
      backgroundColor: '#fff',
      autoAlpha: 1,
      ease: Power4.easeOut
    });
    new this.ScrollMagic.Scene({ triggerElement: '.fold-3', triggerHook: 1 })
      .setTween(animation2)
      // .addIndicators()
      .addTo(this.controller);

    const outers = document.querySelectorAll('.fold-5-img'),
      outers2 = document.querySelectorAll('.fold-2-img'),
      outers3 = document.querySelectorAll('.fold-2-group');

    for (let i = 0; i < outers.length; i++) {
      const child = outers[i].childNodes[0].childNodes;
      const fold5Animation = new TimelineLite();
      fold5Animation.fromTo(
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
        .setTween(fold5Animation)
        .addTo(this.controller);
    }

    for (let i = 0; i < outers2.length; i++) {
      const child = outers2[i].childNodes[0].childNodes;
      const fold2Animation = new TimelineLite();
      fold2Animation.fromTo(
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

      new this.ScrollMagic.Scene({ triggerElement: outers2[i], reverse: false })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(fold2Animation)
        .addTo(this.controller);
    }

    for (let i = 0; i < outers3.length; i++) {
      const child = outers3[i].childNodes[0].childNodes;
      const fold2Animation = new TimelineLite();
      fold2Animation.fromTo(
        child,
        2,
        { opacity: 0, y: 100 },
        { y: 30, opacity: 1, ease: Power4.easeOut },
        '-=1'
      );

      new this.ScrollMagic.Scene({ triggerElement: outers3[i], reverse: false })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(fold2Animation)
        .addTo(this.controller);
    }

    const menuCardAnimation = new TimelineLite();
    menuCardAnimation.fromTo(
      '.menu-card',
      2,
      { opacity: 0, y: 100 },
      { y: 50, opacity: 1, ease: Power4.easeOut }
    );

    new this.ScrollMagic.Scene({ triggerElement: '.fold-3', reverse: false })
      //.addIndicators() // add indicators (requires plugin)
      .setTween(menuCardAnimation)
      .addTo(this.controller);

    const thankYouAnimation = new TimelineLite();
    thankYouAnimation.fromTo(
      '.thank-you',
      5,
      { opacity: 0 },
      { opacity: 1, ease: Power4.easeOut },
      '-=.30'
    );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-4',
      triggerHook: 0.3,
      reverse: true
    })
      //.addIndicators() // add indicators (requires plugin)
      .setTween(thankYouAnimation)
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
    } else if (darkArea.offsetTop + darkArea.offsetHeight - 1000 < winScroll) {
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
      workTitle: `Thambbi`,
      client: `Thambbi Restaurants`,
      project: `Branding & Communication Design`,
      brief: `Re-branding & designing communication for Thambbi’s chain of restaurants`,
      para1: `Thambbi is a South Indian restaurant chain, with 9 outlets in Mumbai and 1 in Pune. While the name itself translates to ‘brother’ in Tamil, the challenge was to strengthen its position as an authentic South-Indian restaurant chain. We started off with the main identity of the brand- the logo. We borrowed from the shapes of food, and the many colours and elements associated with South India. The rebranding exercise was followed by a new menu card design to enhance the overall experience of the restaurant.`,
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
            className="page-wrapper work-details-page thambbi"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.HeroBanner})` }}
            >
              <div className="banner-img-container"></div>
              <WorkPageNavigation
                prevLink="/work/kate-spade"
                nextLink="/work/hero-talkies"
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

              <div className="fold-5">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container justify-content-left fold-5-img">
                        <div className="col-md-10 col-xs-12 no-gutters">
                          <img src={this.ThambbiImgOne} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-right fold-5-img">
                        <div className="col-md-10 col-xs-12 no-gutters align-right">
                          <img src={this.ThambbiImgTwo} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-5-img">
                        <div className="col-md-10 col-xs-12 no-gutters">
                          <img src={this.ThambbiImgThree} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={this.darkArea} className="fold-2" id="fold-2">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    {/* <div className='fold-2-bg' style={{'height' : foldSolicColorSec + 'px'}} ></div> */}
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container justify-content-center fold-2-img">
                        <div className="col-md-10 col-xs-12 no-gutters align-center">
                          <img src={this.ThambbiImgFour} />
                        </div>
                      </div>

                      <div className="project-image-container changeColor text justify-content-center fold-2-group">
                        <div className="col-md-10 col-xs-12 no-gutters align-center">
                          <p>
                            A little playfulness on the pronunciation of
                            ThaMbbi, was manifested in the logo with the letter
                            ‘M’ being in caps. A clean and playful green logo
                            design, one can easily identify an authentic South
                            Indian restaurant from a distance. Part of the
                            rebranding exercise, we also made recommendations
                            with regards to using the mascot at the entrance as
                            well as a miniature being used when the bill is
                            presented. The rebranding exercise was completed
                            with a new menu card design to enhance the overall
                            experience in the restaurant.
                          </p>
                        </div>
                      </div>

                      <div className="project-image-container justify-content-center fold-2-img">
                        <div className="col-md-10 col-xs-12 no-gutters align-center img-">
                          <img src={this.ThambbiImgFive} />
                        </div>
                      </div>

                      <div className="project-image-container  justify-content-center fold-2-group mobile-thambbi">
                        <div className="col-md-10 col-xs-12 no-gutters">
                          <img src={this.ThambbiImgSix} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-center fold-2-img">
                        <div className="col-md-10 col-xs-12 no-gutters align-center">
                          <img src={this.ThambbiImgSeven} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-center fold-2-img">
                        <div className="col-md-10 col-xs-12 no-gutters align-center">
                          <img src={this.ThambbiImgEight} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-center fold-2-img">
                        <div className="col-md-10 col-xs-12 no-gutters align-center">
                          <img src={this.ThambbiImgNine} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="project-image-container justify-content-center">
                      <div className="col-md-10 col-xs-12 no-gutters align-center-mar menu-card">
                        <img src={this.ThambbiImgTen} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-4">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="project-image-container justify-content-center">
                      <div className="col-md-5 col-xs-5 no-gutters align-center-mar thank-you">
                        <img src={this.ThambbiThankYou} />
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
              to="/work/hero-talkies"
              data-text="HERO Talkies"
              className={`title footer-title ${this.state.footerColor} `}
            >
              HERO Talkies
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

export default Thambbi;
