import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import SimpleSlider from '../../components/simpleslider';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import { TimelineLite, TweenMax, Power2, Linear, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { cocoImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import VideoSection from '../../components/videosection';
import './cocosoul.scss';

class Cocosoul extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.HeroBanner = cocoImagePath('hero-background.jpg');
    this.CocoIntro = cocoImagePath('moodboard.png');
    this.CocoNut = cocoImagePath('coconut.png');
    this.SideLeafLeft = cocoImagePath('side-leaf-left.png');
    this.SideLeafRight = cocoImagePath('side-leaf-right.png');
    this.CoconutProduct = cocoImagePath('coco-product.png');
    this.StoryBoard = cocoImagePath('story-board.png');

    this.SbbSlide1 = cocoImagePath('sbb-1.jpg');
    this.SbbSlide2 = cocoImagePath('sbb-2.jpg');
    this.SbbSlide3 = cocoImagePath('sbb-3.jpg');
    this.SbbSlide4 = cocoImagePath('sbb-4.jpg');
    this.SbbSlide5 = cocoImagePath('sbb-5.jpg');
    this.SbbSlide6 = cocoImagePath('sbb-6.jpg');
    this.SbbSlide7 = cocoImagePath('sbb-7.jpg');

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

    const fold2Animation = new TimelineLite();
    fold2Animation
      .fromTo(
        '.fold-2 .sec-title',
        1,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.moodboard-img',
        1.5,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.60'
      );

    new this.ScrollMagic.Scene({ triggerElement: '.fold-2', reverse: false })
      .setTween(fold2Animation)
      //.addIndicators()
      .addTo(this.controller);

    const fold3Animation = new TimelineLite();
    fold3Animation
      .fromTo(
        '.fold-3, .sec-title',
        1,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.script-img',
        1.5,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.60'
      );

    new this.ScrollMagic.Scene({ triggerElement: '.fold-3', reverse: false })
      .setTween(fold3Animation)
      //  /.addIndicators()
      .addTo(this.controller);

    const outers = document.querySelectorAll('.script-content-para p');
    for (let i = 0; i < outers.length; i++) {
      const child = outers[i];
      const scriptContent = new TimelineLite();
      scriptContent.fromTo(
        child,
        1,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.95'
      );
      new this.ScrollMagic.Scene({
        triggerElement: outers[i],
        triggerHook: 0.8,
        reverse: false
      })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(scriptContent)
        .addTo(this.controller);
    }

    const fold4Animation = new TimelineLite();
    fold4Animation
      .fromTo(
        '.fold-4 .sec-title',
        1,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.coco-slider',
        1.5,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.60'
      );
    new this.ScrollMagic.Scene({ triggerElement: '.fold-4', reverse: false })
      .setTween(fold4Animation)
      //.addIndicators()
      .addTo(this.controller);

    const videoAnimation = new TimelineLite();
    videoAnimation.fromTo(
      '.video-wrapper',
      1.5,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: Power4.easeOut },
      '-=.60'
    );
    new this.ScrollMagic.Scene({
      triggerElement: '.video-wrapper',
      reverse: false
    })
      .setTween(videoAnimation)
      //.addIndicators()
      .addTo(this.controller);
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
  }

  render() {
    const projectSummaryContent = {
      workTitle: `Coco Soul`,
      client: `Marico, Coco Soul`,
      project: `Digital Content`,
      brief: `Create a digital communication asset for the brand`,
      para1: `Coco Soul is a premium brand of cold-pressed virgin coconut oil. While coconut oil is topically used in India for skin and hair, only certain pockets consume coconut oil. But with the rising awareness of its nutritive goodness, it was time to talk about it.`,
      para2: `Everybody relates to the dedication that goes into cooking. But few people talk about the painstaking love that goes into sourcing and creating the ingredients. \n So, that’s exactly the story we told.`,
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
            className="page-wrapper work-details-page coco"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.HeroBanner})` }}
            >
              <WorkPageNavigation
                prevLink="/work/hero-talkies"
                nextLink="/work/sussegado-coffee"
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
              <div className="fold-2 full-width">
                <div className="container">
                  <div className="row justify-content-center no-gutters coco-intro">
                    <div className="side-leaf-left">
                      <img src={this.SideLeafLeft} />
                    </div>
                    <div className="col-md-9 col-xs-12">
                      <div className="project-image-container">
                        <div className="row">
                          <div className="col-md-5 col-xs-12">
                            <h5 className="sec-title">Moodboard</h5>
                          </div>
                        </div>

                        <img
                          src={this.CocoIntro}
                          className="img moodboard-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3 full-width">
                <div className="container">
                  <div className="row justify-content-center no-gutters coco-script">
                    <div className="col-md-9 col-xs-12 script-content">
                      <div className="row">
                        <div className="col-md-5 col-xs-12">
                          <h5 className="sec-title">Script</h5>
                          <div className="script-content-para">
                            <p>
                              {' '}
                              The sun shines a warmer hello, <br />
                              And the birdsong’s is inviting.{' '}
                            </p>
                            <p>
                              {' '}
                              Between these blue skies <br />
                              and the damp red earth, <br /> where nature holds
                              its best secrets.
                            </p>
                            <p>
                              {' '}
                              So, we hold them dearly, <br />
                              and bring them to you...
                            </p>
                            <p>
                              {' '}
                              Introducing, 100% organic CocoSoul <br />{' '}
                              Cold-pressed virgin coconut oil <br />
                              Superfood, packed with <br />
                              real natural goodness.
                            </p>
                            <p>
                              {' '}
                              So, when you taste it, <br />
                              you know it came from a good place{' '}
                            </p>
                            <p> Coco Soul. Nature’s own superfood.</p>
                          </div>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-4 col-xs-12">
                          <div
                            className="project-image-container"
                            style={{ marginTop: '100px' }}
                          >
                            <img
                              src={this.CoconutProduct}
                              className="img script-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-4 full-width">
                <div className="container">
                  <div className="row justify-content-center no-gutters coco-intro">
                    <div className="side-leaf-right">
                      <img src={this.SideLeafRight} />
                    </div>
                    <div className="col-md-9 col-xs-12">
                      <div className="row">
                        <div className="col-md-5 col-xs-12">
                          <h5 className="sec-title">Storyboard</h5>
                        </div>
                      </div>
                      {/* <img src={StoryBoard} className='img'/> */}
                    </div>
                    <div className="fold-3 coco-slider">
                      <SimpleSlider
                        dots={false}
                        infinite={true}
                        speed={2000}
                        slidesToShow={1}
                        slidesToScroll={1}
                        fade={true}
                        autoplay={true}
                        autoplaySpeed={50}
                        pauseOnHover={false}
                        slide1={this.SbbSlide1}
                        slide2={this.SbbSlide2}
                        slide3={this.SbbSlide3}
                        slide4={this.SbbSlide4}
                        slide5={this.SbbSlide5}
                        slide6={this.SbbSlide6}
                        slide7={this.SbbSlide7}
                        slide8={this.SbbSlide1}
                        slide9={this.SbbSlide2}
                        slide10={this.SbbSlide3}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-5 video-wrapper">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing /> */}
                      {/* https://youtu.be/KPJVB8anfuc */}
                      <VideoSection videoId="KPJVB8anfuc" />
                      {/* <FullScreenVideo/> */}
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
              to="/work/sussegado-coffee"
              data-text="Sussegado Coffee"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Sussegado Coffee
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
export default Cocosoul;
