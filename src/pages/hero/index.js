import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import { TimelineLite, TweenMax, Power1, Power4, CSSPlugin } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { heroImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import './hero.scss';
const plugins = [CSSPlugin];

class NiharGold extends Component {
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

    this.Hero = heroImagePath('hero.png');
    this.HeroImgOne = heroImagePath('hero-img-1.jpg');
    this.HeroImgTwo = heroImagePath('hero-img-2.jpg');
    this.HeroImgThree = heroImagePath('hero-img-3.jpg');
    this.HeroImgFour = heroImagePath('hero-img-4.jpg');
    this.HeroImgFive = heroImagePath('hero-img-5.jpg');
    this.HeroImgSix = heroImagePath('hero-img-6.jpg');
    this.HeroImgSeven = heroImagePath('hero-img-7.jpg');
    this.HeroBus = heroImagePath('hero-bus.png');
    this.HeroIdOne = heroImagePath('hero-id-1.png');
    this.HeroIdTwo = heroImagePath('hero-id-2.png');
    this.HeroTshirt = heroImagePath('t-shirt.jpg');
    this.HeroCup = heroImagePath('hero-cup.jpg');

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
    this.ScrollMagic = require('scrollmagic');
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineLite);
    const bgAnimation1 = new TimelineLite();
    bgAnimation1.fromTo(
      '.hero-page-wrapper',
      1,
      { backgroundColor: '#fff' },
      { backgroundColor: '#DCE7F0', ease: Power4.easeOut },
      '-=1'
    );
    new this.ScrollMagic.Scene({ triggerElement: '.changeColor' })
      .setTween(bgAnimation1)
      //.addIndicators()
      .addTo(this.controller);

    const bgAnimation2 = new TimelineLite();
    bgAnimation2.to('.hero-page-wrapper', 1, {
      backgroundColor: '#fff',
      autoAlpha: 1,
      ease: Power4.easeOut
    });

    new this.ScrollMagic.Scene({ triggerElement: '.fold-4', triggerHook: 0.7 })
      .setTween(bgAnimation2)
      //.addIndicators()
      .addTo(this.controller);

    const outers = document.querySelectorAll('.fold-3-img'),
      outers2 = document.querySelectorAll('.fold-2-img'),
      outers3 = document.querySelectorAll('.fold-6-img');

    for (let i = 0; i < outers.length; i++) {
      const child = outers[i].childNodes[0].childNodes;
      const foldImg3 = new TimelineLite();
      foldImg3.fromTo(
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
        .setTween(foldImg3)
        .addTo(this.controller);
    }

    for (let i = 0; i < outers2.length; i++) {
      const child = outers2[i].childNodes[0];
      const foldImg2 = new TimelineLite();
      foldImg2.fromTo(
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
        .setTween(foldImg2)
        .addTo(this.controller);
    }

    for (let i = 0; i < outers3.length; i++) {
      const child = outers3[i].childNodes[0];
      const foldImg3 = new TimelineLite();
      foldImg3.fromTo(
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

      new this.ScrollMagic.Scene({ triggerElement: outers3[i], reverse: false })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(foldImg3)
        .addTo(this.controller);
    }

    const idCardAnimation = new TimelineLite();
    idCardAnimation.fromTo(
      '.hero-id-one',
      1.5,
      { y: 40 },
      { y: -80, ease: Power1.easeInOut },
      '-=.30'
    );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-4',
      triggerHook: 0.1,
      duration: '100%',
      reverse: true
    })
      //.addIndicators() // add indicators (requires plugin)
      .setTween(idCardAnimation)
      .addTo(this.controller);

    const busAnimation = new TimelineLite();
    busAnimation.fromTo(
      '.hero-bus',
      1.5,
      { x: 180, opacity: 0.7 },
      { x: 0, opacity: 1, ease: Power1.easeInOut },
      '-=.30'
    );

    new this.ScrollMagic.Scene({
      triggerElement: '.hero-bus',
      triggerHook: 0.8,
      reverse: true
    })
      //.addIndicators() // add indicators (requires plugin)
      .setTween(busAnimation)
      .addTo(this.controller);

    const fold5Animation = new TimelineLite();
    fold5Animation.to('.fold-5 .page-header', 1, {
      backgroundColor: '#000',
      autoAlpha: 1,
      ease: Power4.easeOut
    });

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-5 .page-header',
      triggerHook: 0.3,
      reverse: true
    })
      //.addIndicators() // add indicators (requires plugin)
      .setTween(fold5Animation)
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
    } else if (darkArea.offsetTop + darkArea.offsetHeight < winScroll) {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    } else if (darkArea.offsetTop < winScroll) {
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
      workTitle: `HERO Talkies`,
      client: `HERO Talkies`,
      project: `Brand Design`,
      brief: `Re-brand the South-Indian brand for online movie streaming`,
      para2: ` `,
      para1: `Hero Talkies is an online video-streaming platform with South Indian content. In order to position the brand as an authentic platform for the best curation of high-quality movies, we redesigned the logo. \n We used the classic ‘play’ button and a lightning bolt to represent great quality and speed. We also designed collaterals, stationery and brand guidelines for the brand.`
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
            className="page-wrapper work-details-page hero hero-page-wrapper"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
            >
              <div className="banner-img-container">
                <img src={this.Hero} alt="herotalkies" />
              </div>
              <WorkPageNavigation
                prevLink="/work/thambbi"
                nextLink="/work/cocosoul"
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

              <div className="fold-2">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container fold-2-img">
                        <img src={this.HeroImgOne} alt="herotalkies" />
                      </div>
                      <div className="project-image-container fold-2-img">
                        <img src={this.HeroImgTwo} alt="herotalkies" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container fold-3-img justify-content-right">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.HeroImgThree} alt="herotalkies" />
                        </div>
                      </div>

                      <div className="project-image-container fold-3-img justify-content-left changeColor">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.HeroImgFour} alt="herotalkies" />
                        </div>
                      </div>

                      <div className="project-image-container fold-3-img justify-content-right">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.HeroImgFive} alt="herotalkies" />
                        </div>
                      </div>

                      <div className="project-image-container fold-3-img justify-content-left">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.HeroImgSix} alt="herotalkies" />
                        </div>
                      </div>

                      <div className="project-image-container fold-3-img justify-content-right">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.HeroImgSeven} alt="herotalkies" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-4">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container img-grid">
                        <div className="col-md-5 col-xs-12 hero-id-one">
                          <img src={this.HeroIdOne} alt="herotalkies" />
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 col-xs-12 cust-mart-50">
                          <img src={this.HeroIdTwo} alt="herotalkies" />
                        </div>
                      </div>

                      <div className="project-image-container hero-bus">
                        <img src={this.HeroBus} alt="herotalkies" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-5 full-page-wrapper" ref={this.darkArea}>
                <div className="full-page-wrapper page-header">
                  <div className="banner-img-container">
                    <img src={this.Hero} alt="herotalkies" />
                  </div>
                </div>
              </div>

              <div className="fold-6">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div
                        className="project-content"
                        style={{ display: 'none' }}
                      >
                        <h2>Lorem ipsum</h2>
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                      <div className="project-image-container fold-6-img">
                        <img src={this.HeroTshirt} alt="herotalkies" />
                      </div>

                      <div className="project-image-container fold-6-img">
                        <img src={this.HeroCup} alt="herotalkies" />
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
              to="/work/cocosoul"
              data-text="Coco Soul"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Coco Soul
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
export default NiharGold;
