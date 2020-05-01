import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import './difference.scss';
import Head from '../Head';
import Blob from '../../components/blob/Blob';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import {
  TimelineMax,
  TimelineLite,
  TweenMax,
  Power2,
  Linear,
  Power4
} from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { differImagePath } from '../../utils/assetUtils';

//import 'debug.addIndicators';
class About extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.founders = differImagePath('founders.jpg');
    this.Hero = differImagePath('Hero.png');
    this.Hritik = differImagePath('Hritik.png');
    this.Humsafar = differImagePath('Humsafar.png');
    this.jSW = differImagePath('jsw-2.png');
    this.Kratos = differImagePath('Kratos.png');
    this.Marico = differImagePath('Marico.png');
    this.RR = differImagePath('RR.png');
    this.TBWA = differImagePath('TBWA.png');
    this.Thambbi = differImagePath('Thambbi.png');
    this.TLC = differImagePath('TLC.png');
    this.adgaonkar = differImagePath('adgaonkar.png');
    this.handleKnowMore = this.handleKnowMore.bind(this);
    // this.addLineBreaks = this.addLineBreaks.bind(this);
    this.state = {
      isActive: false,
      activeText: 'Know More',
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'light',
      footerActive: false,
      fullpageAnimation: true,
      footerColor: ''
    };
  }

  handleKnowMore() {
    this.setState({
      isActive: !this.state.isActive,
      activeText: this.state.isActive ? 'Know More' : 'Know Less'
    });
  }

  componentDidMount() {
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
    window.addEventListener('scroll', this.handleScroll);
    if (!isMobile) {
      //require('debug.addIndicators');
      this.ScrollMagic = require('scrollmagic');
      this.controller = new this.ScrollMagic.Controller();
      ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineMax);

      const para1Content = document
        .querySelector('.para-1')
        .querySelectorAll('span');
      const para1ContentArr = Array.prototype.slice.call(para1Content);
      const para1TextAnimation = new TimelineLite();
      para1TextAnimation.fromTo(
        '.section-1 .title',
        1.1,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power2.inOut },
        '-=.95'
      );
      para1ContentArr.map((ele, idx) => {
        para1TextAnimation.fromTo(
          ele,
          1.1,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: Power2.inOut },
          '-=.95'
        );
      });

      new this.ScrollMagic.Scene({
        triggerElement: '.section-1',
        reverse: false
      })
        .setTween(para1TextAnimation)
        .addTo(this.controller);
      //.addIndicators()

      const para2Content = document
        .querySelector('.para-2')
        .querySelectorAll('span');
      const para2ContentArr = Array.prototype.slice.call(para2Content);
      const para2TextAnimation = new TimelineLite();
      para2TextAnimation.fromTo(
        '.section-2 .title',
        1.1,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power2.inOut },
        '-=.95'
      );
      para2ContentArr.map((ele, idx) => {
        para2TextAnimation.fromTo(
          ele,
          1.1,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: Power2.inOut },
          '-=.95'
        );
      });

      new this.ScrollMagic.Scene({
        triggerElement: '.section-2',
        triggerHook: 0.2,
        reverse: false
      })
        .setTween(para2TextAnimation)
        .addTo(this.controller);
      //.addIndicators()

      const section3List = document.querySelectorAll('li');
      const listArr = Array.prototype.slice.call(section3List);
      const listAnimation = new TimelineLite();

      listAnimation.fromTo(
        '.section-3 .title',
        1.1,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power2.inOut }
      );

      listArr.map((ele, idx) => {
        listAnimation.fromTo(
          ele,
          1.1,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: Power2.inOut },
          '-=.95'
        );
      });

      new this.ScrollMagic.Scene({
        triggerElement: '.section-3',
        triggerHook: 0.2,
        reverse: false
      })
        .setTween(listAnimation)
        .addTo(this.controller);
      // .addIndicators()

      const section4Box = document.querySelectorAll('.box-cell');
      const boxCellArr = Array.prototype.slice.call(section4Box);
      const boxAnimation = new TimelineLite();
      boxAnimation.fromTo(
        '.section-4 .our-partners',
        1.1,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power2.inOut }
      );
      boxCellArr.map((ele, idx) => {
        boxAnimation.fromTo(
          ele,
          1.1,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: Power2.inOut },
          '-=.95'
        );
      });

      new this.ScrollMagic.Scene({
        triggerElement: '.section-4',
        triggerHook: 0.2,
        reverse: false
      })
        .setTween(boxAnimation)
        .addTo(this.controller);

      new this.ScrollMagic.Scene({
        triggerElement: '.section-5',
        duration: '30%',
        triggerHook: 0.1,
        reverse: true
      })
        .setClassToggle('.fca-black', 'fca-white')
        .addTo(this.controller);

      new this.ScrollMagic.Scene({
        triggerElement: '.section-5',
        duration: '30%',
        triggerHook: 0.1,
        reverse: true
      })
        .setClassToggle('.hamburger', 'light')
        .addTo(this.controller);
      //.addIndicators()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: false,
        footerActive: true
      });
    } else {
      this.setState({
        toggleHeader: false
      });
    }
  }

  render() {
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
          <div className="page-wrapper difference-page" ref={this.mainWrapper}>
            <section className="full-page-wrapper section-1">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-xs-12 align-right">
                    <div className="col-md-10 col-offset-md-2">
                      <h2 className="title">We keep it simple</h2>
                      <p className="para para-1">
                        <span>
                          The first step to solving a problem is to simplify the
                          brief.{' '}
                        </span>
                        <span>
                          Which is why, each project is headed by a creative
                          lead,{' '}
                        </span>
                        <span>
                          who helps decode the brief and identify the right
                          direction.{' '}
                        </span>
                        <span>Once the direction is set, a domain expert </span>
                        <span>
                          helps to understand and manage the project. All along
                          the way,{' '}
                        </span>
                        <span>
                          our process is a dialogue, so you too are part of it.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="full-page-wrapper bg-color-yellow section-2">
              <Blob
                blobAnimClass="section-2-blob"
                bb1BgColor="#121212"
                bb2BgColor="#373737"
                bb3BgColor="#1d1c1c"
                bb1opacity="1"
                bb2opacity="1"
                blobBorder="#fff"
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-xs-12">
                    <h2 className="title">Design First</h2>
                    <div className="col-md-9 no-gutters-left">
                      <p className="para para-2">
                        <span>
                          Design is the face of every object and is the first
                          point of
                        </span>
                        <span>
                          interaction. Whether it’s traditional advertising, app
                          interface,
                        </span>
                        <span>
                          branding, packaging or product. So, our approach is
                          always
                        </span>
                        <span>
                          design-first. When you voice a business problem to us,
                        </span>
                        <span>
                          our minds race to find the best design-led solutions.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="full-page-wrapper our-services-wrapper section-3">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-xs-12">
                    <h2 className="title">What we do</h2>
                    <div className="our-services">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <div className="list-wrapper">
                            <h3 className="title">Design</h3>
                            <ul>
                              <li>Branding & Strategy</li>
                              <li>Packaging Design</li>
                              <li>Product Design</li>
                              <li>UX/UI</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="list-wrapper">
                            <h3 className="title">Digital</h3>
                            <ul>
                              <li>Content Creation</li>
                              <li>Social Media Strategy</li>
                              <li>Digital Planning</li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="list-wrapper">
                            <h3 className="title">Studio</h3>
                            <ul>
                              <li>CGI & Retouching</li>
                              <li>2D & 3D Modeling</li>
                              <li>Artworks</li>
                              <li>Adaptation</li>
                              <li>
                                Language Translation{' '}
                                <span>(All Indian & foreign)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="full-page-wrapper bg-color-gray our-partners-wrapper section-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <div className="col-md-12">
                      <div className="our-partners align-center">
                        Our Partners
                      </div>
                      <div className="partner-wrapper">
                        <div className="box-row">
                          <div className="box-cell"></div>
                          <div className="box-cell">
                            <img src={this.Marico} />
                          </div>
                          <div className="box-cell">
                            <img src={this.RR} />
                          </div>
                          <div className="box-cell">
                            <img src={this.TLC} />
                          </div>
                          <div className="box-cell"></div>
                        </div>
                        <div className="box-row">
                          <div className="box-cell jsw">
                            <img src={this.jSW} />
                          </div>
                          <div className="box-cell">
                            <img src={this.Hritik} />
                          </div>
                          <div className="box-cell">
                            <img src={this.Thambbi} />
                          </div>
                          <div className="box-cell">
                            <img src={this.Kratos} />
                          </div>
                          <div className="box-cell">
                            <img src={this.Hero} />
                          </div>
                        </div>

                        <div className="box-row">
                          <div className="box-cell"></div>
                          <div className="box-cell tbwa">
                            <img src={this.TBWA} />
                          </div>
                          <div className="box-cell adgaonkar">
                            <img src={this.adgaonkar} />
                          </div>
                          <div className="box-cell">
                            <img src={this.Humsafar} />
                          </div>
                          <div className="box-cell"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="full-page-wrapper founders-wrapper">
              <div className="bg-color-while">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-xs-12 col-offset-md-2">
                      <div className="founders">
                        <img src={this.founders} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-color-black full-width-height section-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-xs-12">
                      <div
                        className={`pannel ${
                          this.state.isActive ? 'active' : ''
                        }`}
                      >
                        <p>
                          Vasanth Joshua and Colin Myers started FINDCreative
                          Avenues LLP in 2017. They believe that flexibility of
                          creative collaboration to solve a problem, is the
                          future of the business.
                        </p>
                        <div className="hidden-content">
                          <div className="row">
                            <div className="col-md-6 col-xs-12">
                              <div className="detail-wrap">
                                <div className="name">Vasanth Joshua</div>
                                <div className="bio">
                                  <p>
                                    In his 14-year advertising journey, Josh has
                                    worked with some of the biggest agencies:
                                    Lowe, JWT, DDB Mudra, Leo Burnett, McCann
                                    and Sideways. To add to his credit, he won
                                    Young Lions Cannes – India in 2012. He also
                                    featured in The Economic Times list of
                                    India’s Top 30 Creatives Under 30, in 2016.
                                    He was among the 60 top creatives from
                                    across the world chosen by London Awards, to
                                    participate in their judging and awards
                                    process. His design work too has won awards
                                    across the globe like Cannes, One Show,
                                    Spikes and D&AD. He strongly believes that
                                    an idea is the core of the creative
                                    universe.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6 col-xs-12">
                              <div className="detail-wrap">
                                <div className="name">Colin Myers</div>
                                <div className="bio">
                                  <p>
                                    Colin graduated from Leeds University
                                    Business School with a Master’s degree in
                                    Management in 2013. After which began his
                                    exciting journey in advertising. He has
                                    worked across categories and brands, like
                                    Marico, Park Avenue, Diageo, Aegon and
                                    Quikr. Being a people’s person, he is quick
                                    to understand clients' business needs, in
                                    order to navigate them through the right
                                    creative strategy. He's also a
                                    long-suffering Manchester United fan who
                                    loves to end his day with a good game of
                                    football.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          onClick={this.handleKnowMore}
                          className={`control ${
                            this.state.isActive ? 'active' : null
                          }`}
                        >
                          {this.state.activeText}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
            <small className="footer-subtitle subtitle">
              Interested in more?
            </small>
            <Link
              to="/work"
              data-text="view work"
              className={`title footer-title invert`}
            >
              view work
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
