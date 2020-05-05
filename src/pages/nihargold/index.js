import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import { TimelineLite, TweenMax, Power4, CSSPlugin } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { niharImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import './nihar.scss';
const plugins = [CSSPlugin];

class NiharGold extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.HeroBanner = niharImagePath('hero-background.jpg');
    this.GoldLogo = niharImagePath('gold-logo-min.png');
    this.Ribbon = niharImagePath('ribbon.jpg');
    this.NiharGoldBack = niharImagePath('nihar-bottle-back.jpg');
    this.NiharGoldFront = niharImagePath('nihar-bottle-front.jpg');
    this.NiharGoldJar = niharImagePath('nihar-gold-jar.jpg');

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
    const niharProductAmination = new TimelineLite();
    niharProductAmination
      .fromTo(
        '.nihar-gold-logo',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.nihar-front',
        1.5,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.20'
      )
      .fromTo(
        '.nihar-back',
        1.5,
        { opacity: 0, x: -100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        '-=.90'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-2',
      reverse: false,
      triggerHook: 0.3
    })
      .setTween(niharProductAmination)
      //.addIndicators()
      .addTo(this.controller);

    const niharJar = new TimelineLite();
    niharJar
      .fromTo(
        '.nihar-gold-jar',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.90'
      )
      .fromTo(
        '.nihar-gold-jar-text',
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.90'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-3',
      reverse: false,
      triggerHook: 0.4
    })
      .setTween(niharJar)
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
      workTitle: `Nihar Gold`,
      client: `Marico, Nihar Gold`,
      project: `Packaging Design`,
      brief: `Design a label for Nihar Gold for Bihar market`,
      para1: `Nihar coconut oil is the market leader in East India, especially in Bihar. They wanted to launch a premium sub-brand called Nihar Gold. For this, we partnered them with packaging design.`,
      para2: `Our approach was to create something new without losing the familiarity built by the brand over \n so many years. The coconut halves and the hair silhouette announce that it’s a Nihar coconut hair oil product from a mile.  We added a pop of parallel gold streaks to convey that this is a premium sub-brand.`,
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
            className="page-wrapper work-details-page nihar-gold"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.HeroBanner})` }}
            >
              <WorkPageNavigation
                prevLink="/work/hrithik-roshan"
                nextLink="/work/kate-spade"
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
                  <div className="row justify-content-center no-gutters nihar-intro">
                    <div
                      className="nihar-ribbon-bg"
                      style={{ backgroundImage: `url(${this.Ribbon})` }}
                    >
                      <div className="nihar-gold-logo align-center">
                        <img src={this.GoldLogo} alt="nihar gold" />
                      </div>
                      <div className="row justify-content-center no-gutters nihar-product">
                        <div className="col-md-10 col-xs-12">
                          <div className="row">
                            <div className="col-md-5 col-xs-12 nihar-front">
                              <img src={this.NiharGoldFront} alt="nihar gold" />
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5 col-xs-12 nihar-back">
                              <img src={this.NiharGoldBack} alt="nihar gold" />
                            </div>
                          </div>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters nihar-product-details">
                    <div className="col-md-10 col-xs-12">
                      <div className="row">
                        <div className="col-md-5 col-xs-12 nihar-gold-jar">
                          <img src={this.NiharGoldJar} alt="nihar gold" />
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 col-xs-12 text nihar-gold-jar-text">
                          <p>
                            Along with the bottle design, we also designed the
                            jar packaging. These jars are a boon especially{' '}
                            <br />
                            during the winters because their wide mouths make it
                            easy to scoop out the oil which tends to <br />
                            solidify when the temperature drops.
                          </p>
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
              to="/work/kate-spade"
              data-text="Kate Spade"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Kate Spade
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
