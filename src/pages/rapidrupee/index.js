import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import { TimelineLite, TweenMax, Power1, Linear, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { rapidrupeeImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import './rapidrupee.scss';

class Rapidrupee extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.Hero = rapidrupeeImagePath('rapid-rupee-hero.png');
    this.RapidRupeeMobileOne = rapidrupeeImagePath('rapid-rupee-mobile-1.png');
    this.RapidRupeeMobileTwo = rapidrupeeImagePath('rapid-rupee-mobile-2.png');
    this.RapidRupeeComuteOne = rapidrupeeImagePath('rapid-rupee-img-1.jpg');
    this.RapidRupeeComuteTwo = rapidrupeeImagePath('rapid-rupee-img-2.jpg');
    this.RapidRupeeComuteThree = rapidrupeeImagePath('rapid-rupee-img-3.jpg');
    this.RapidRupeeComuteFour = rapidrupeeImagePath('rapid-rupee-img-4.jpg');
    this.RapidRupeeComuteFive = rapidrupeeImagePath('rapid-rupee-img-5.jpg');
    this.RapidRupeeComuteSix = rapidrupeeImagePath('rapid-rupee-img-6.jpg');
    this.RapidRupeeComuteSeven = rapidrupeeImagePath('rapid-rupee-img-7.jpg');
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
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineLite);

    const cardParallax = new TimelineLite();
    cardParallax
      .fromTo(
        '.mobile-scrn-2',
        1.5,
        { y: 20 },
        { y: -180, ease: Power1.easeInOut },
        '-=0.2'
      )
      .fromTo(
        '.mobile-scrn-1',
        1.5,
        { y: 20 },
        { y: -80, ease: Power1.easeInOut },
        '-=0.5'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.fold-2',
      triggerHook: 0.1,
      duration: '100%',
      reverse: true
    })
      //.addIndicators()
      .setTween(cardParallax)
      .addTo(this.controller);

    const outers = document.querySelectorAll('.fold-3-img');
    for (let i = 0; i < outers.length; i++) {
      const child = outers[i].childNodes[0].childNodes;
      const fold3Animation = new TimelineLite();
      fold3Animation.fromTo(
        child,
        1.5,
        {
          y: 20,
          scale: 1.2,
          clipPath: 'polygon(0% 0%, 0% 10%, 0% 100%, 0% 100%)'
        },
        {
          y: 50,
          scale: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: Power4.easeOut
        },
        '-=.95'
      );

      new this.ScrollMagic.Scene({
        triggerElement: outers[i],
        reverse: false,
        scrollEase: 0.1, // scroll speed
        maxOffset: 500
      })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(fold3Animation)
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
  }

  render() {
    const projectSummaryContent = {
      workTitle: `Rapid Rupee`,
      client: `Rapid Rupee`,
      project: `Branding Strategy & Communication`,
      brief: `Build the brand strategy & design communication strategy`,
      para1: `Rapid Rupee is an online money-lending app which provides quick and convenient personal loans. \n We designed its logo, keeping in mind that we needed to cue in security, optimism and progress. \n Being a brand introducing itself to India, we also designed a detailed branding structure for it. One that encapsulates brand identity, character and tone of voice - a holy grail that can guide all future brand communication.`,
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
            className="page-wrapper work-details-page rapid-rupee"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
            >
              <div className="banner-img-container">
                <img src={this.Hero} />
              </div>
              <WorkPageNavigation
                prevLink="/work/sussegado-coffee"
                nextLink="/work/socranos-gravity"
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
                    <div className="col-md-11 col-xs-12 no-gutters">
                      <div className="project-image-container img-grid row">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <div className="project-image-container mobile-scrn-1 col-md-9 justify-content-left">
                            <img src={this.RapidRupeeMobileOne} />
                          </div>
                        </div>

                        <div className="col-md-6 col-xs-12 no-gutters">
                          <div className="project-image-container mobile-scrn-2 right-img col-md-9 justify-content-right">
                            <img src={this.RapidRupeeMobileTwo} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="diagonal-bg"></div>
                </div>
              </div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-content">
                        <div
                          className="col-md-6 col-xs-12 no-gutters"
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

                      <div className="project-image-container justify-content-left fold-3-img">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <img src={this.RapidRupeeComuteOne} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-right fold-3-img">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <img src={this.RapidRupeeComuteTwo} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-3-img">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <img src={this.RapidRupeeComuteThree} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-right fold-3-img">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <img src={this.RapidRupeeComuteFour} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-3-img">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <img src={this.RapidRupeeComuteFive} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-right fold-3-img">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <img src={this.RapidRupeeComuteSix} />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-3-img">
                        <div className="col-md-6 col-xs-12 no-gutters">
                          <img src={this.RapidRupeeComuteSeven} />
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
              to="/work/socranos-gravity"
              data-text="Socranos Gravity"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Socranos Gravity
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

export default Rapidrupee;
