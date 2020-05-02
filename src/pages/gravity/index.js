import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import {
  TimelineLite,
  TweenMax,
  Power2,
  Linear,
  Power4,
  CSSPlugin
} from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { gravityImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import './gravity.scss';
const plugins = [CSSPlugin];

class Gravity extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.HeroBanner = gravityImagePath('hero-background.jpg');
    this.GravityIntro = gravityImagePath('background.jpg');
    this.GravityText = gravityImagePath('gravity-text.png');
    this.GravityBar = gravityImagePath('gravity-bars-new.png');
    this.GravityBarBox = gravityImagePath('gravity-barbox.jpg');

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
    const gravityBarBox = new TimelineLite();
    gravityBarBox
      .fromTo(
        '.gravity-bar-box',
        1.2,
        { opacity: 0, x: -100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.90'
      )
      .fromTo(
        '.gravity-bar-box-text',
        1.2,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.90'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-3',
      reverse: false,
      triggerHook: 0.4
    })
      .setTween(gravityBarBox)
      //.addIndicators()
      .addTo(this.controller);

    const gravityIntro = new TimelineLite();
    gravityIntro
      .fromTo(
        '.gravity-intro',
        1.3,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.90'
      )
      .fromTo(
        '.gravity-text',
        1.1,
        { opacity: 0, y: -300 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.90'
      );
    new this.ScrollMagic.Scene({ triggerElement: '.fold-2', triggerHook: 0.4 })
      .setTween(gravityIntro)
      //.addIndicators()
      .addTo(this.controller);

    const gravityIntroBar = new TimelineLite();
    gravityIntroBar.fromTo(
      '.gravity-bar',
      1.1,
      { opacity: 0, y: 300 },
      { y: 0, opacity: 1, ease: Power4.easeOut },
      '-=.90'
    );
    new this.ScrollMagic.Scene({ triggerElement: '.gravity-bar' })
      .setTween(gravityIntroBar)
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
      workTitle: `Socranos Gravity`,
      client: `Socranos`,
      project: `Strategy & Packaging Design`,
      brief: `Strategize & design a chocolate for the Gujarat market`,
      para1: `Having imported chocolates for many years, Kratos Overseas decided to enter the confectionary market with its own chocolate brand-Socranos. The company discovered that the Gujarat market loved Cadbury Fuse, but abstained from picking it up because of its high price point. \n As a solution to this, Gravity was born. A chocolate that tastes like Fuse, but is a lot more affordable.`,
      para2: `Keeping this in mind, our strategy was to carefully create packaging design with the familiar memory structures already created by Fuse.`,
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
            className="page-wrapper work-details-page gravity"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.HeroBanner})` }}
            >
              <WorkPageNavigation
                prevLink="/work/rapid-rupee"
                nextLink="/work/hrithik-roshan"
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
                <div
                  className="row justify-content-center no-gutters gravity-intro bg"
                  style={{ backgroundImage: `url(${this.GravityIntro})` }}
                >
                  <div className="col-md-10">
                    <div className="project-image-container">
                      <div className="gravity-text">
                        <img src={this.GravityText} className="img" />
                      </div>

                      <div className="gravity-bar">
                        <img src={this.GravityBar} className="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3">
                <div className="row justify-content-center no-gutters">
                  <div className="col-md-10 col-xs-12">
                    <div className="row">
                      <div className="col-md-5 col-xs-12">
                        <div className="project-image-container gravity-bar-box">
                          <img src={this.GravityBarBox} className="img" />
                        </div>
                      </div>
                      <div className="col-md-2"></div>
                      <div className="col-md-4 col-xs-12 gravity-bar-box-text">
                        <p>
                          This worked wonders for the brand. <br /> How do we
                          know?
                          <br /> Well, this new design was the only
                          communication that the Client has relied on for sales
                          (over 5 lakh and counting). Now, isn’t that sweet?{' '}
                        </p>
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
              to="/work/hrithik-roshan"
              data-text="Hrithik Roshan's"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Hrithik Roshan's
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
export default Gravity;
