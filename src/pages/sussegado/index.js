import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'; //is for mobile devices
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import SimpleSlider from '../../components/simpleslider';
import VideoSection from '../../components/videosection';
import { TimelineLite, TweenMax, Power2, Linear, Power4 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import ProjectPageSummary from '../../components/workdetailsanim';
import { sussegadoImagePath } from '../../utils/assetUtils';
import WorkPageNavigation from '../../components/workpagenav';
import './sussegado.scss';

class Sussegado extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.JarsHero = sussegadoImagePath('lid.png');
    this.JarDj = sussegadoImagePath('jar-dj.jpg');
    this.JarRapper = sussegadoImagePath('jar-rapper.jpg');
    this.JarHippi = sussegadoImagePath('jar-hippi.jpg');
    this.JarTattoArtist = sussegadoImagePath('jar-tatto-artist.jpg');
    this.JarBiker = sussegadoImagePath('jar-biker.jpg');
    this.JarBikerBanner = sussegadoImagePath('jar-banner-biker.jpg');
    this.JarHippiBanner = sussegadoImagePath('jar-banner-hippi.jpg');
    this.JarDjBanner = sussegadoImagePath('jar-banner-dj.jpg');
    this.JarTattoArtistBanner = sussegadoImagePath(
      'jar-banner-tatto-artist.jpg'
    );
    this.JarRapperBanner = sussegadoImagePath('jar-banner-rapper.jpg');
    this.JarSlide1 = sussegadoImagePath('1.jpg');
    this.JarSlide2 = sussegadoImagePath('2.jpg');
    this.JarSlide3 = sussegadoImagePath('3.jpg');
    this.JarSlide4 = sussegadoImagePath('4.jpg');
    this.JarSlide5 = sussegadoImagePath('5.jpg');
    this.JarSlide6 = sussegadoImagePath('6.jpg');
    this.JarSlide7 = sussegadoImagePath('7.jpg');
    this.JarSlide8 = sussegadoImagePath('8.jpg');
    this.JarSlide9 = sussegadoImagePath('9.jpg');

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

    const outers = document.querySelectorAll('.fold-4 .project-content li');
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

    const outers2 = document.querySelectorAll(
      '.fold-4 .jar-banners .project-image-container'
    );
    for (let i = 0; i < outers2.length; i++) {
      const child = outers2[i];
      const scriptContent = new TimelineLite();
      scriptContent.fromTo(
        child,
        1,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.95'
      );
      new this.ScrollMagic.Scene({
        triggerElement: outers2[i],
        triggerHook: 0.8,
        reverse: false
      })
        // .addIndicators() // add indicators (requires plugin)
        .setTween(scriptContent)
        .addTo(this.controller);
    }

    const jarAnimation = new TimelineLite();
    jarAnimation
      // .fromTo('.jar-list .rapper', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
      // .fromTo('.jar-list .hippi', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
      // .fromTo('.jar-list .biker', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
      // .fromTo('.jar-list .tatto', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
      // .fromTo('.jar-list .dj', 1.2, {y: -100, opacity:0,  transform: 'rotateY(180deg)'}, {y: 0, opacity: 1,  transform: 'rotateY(0)', ease: Power4.easeOut},'-=.95' )
      .fromTo(
        '.jar-list',
        1.2,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.95'
      );
    new this.ScrollMagic.Scene({ triggerElement: '.jar-list', reverse: false })
      //.addIndicators() // add indicators (requires plugin)
      .setTween(jarAnimation)
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
      workTitle: `Sussegado`,
      client: `Sussegado Coffee.`,
      project: `Product & Packaging Design`,
      brief: `Design a line of coffee refill jars.`,
      para1: `There’s nothing quite as disappointing as waking up to an empty coffee jar. So we partnered with Sussegado coffee to create a promo jar that reminds one to refill their coffee. `,
      para2: `We designed 5 quirky characters – a rapper, hippie, biker, tattoo artist and a DJ. All who are at their best when there’s a steaming cup of coffee.`,
      para3: `The transparent slots for eyes in each jar create \n an illusion of droopy eyes as the level of the coffee goes down. So when your jar looks sleepy, it’s time to wake up, and get a new refill pack. `
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
            className="page-wrapper work-details-page jars"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
            >
              <div className="banner-img-container">
                <img src={this.JarsHero} />
              </div>
              <WorkPageNavigation
                prevLink="/work/cocosoul"
                nextLink="/work/rapid-rupee"
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
                    <div className="col-md-10 col-xs-12">
                      <div className="project-image-container-list jar-list justify-content-center">
                        <div className="project-image-container rapper">
                          <div>
                            <img src={this.JarRapper} />
                            <span>Rapper</span>
                          </div>
                        </div>

                        <div className="project-image-container hippi">
                          <div>
                            <img src={this.JarHippi} />
                            <span>Hippie</span>
                          </div>
                        </div>

                        <div className="project-image-container biker">
                          <div>
                            <img src={this.JarBiker} />
                            <span>Biker</span>
                          </div>
                        </div>

                        <div className="project-image-container tatto">
                          <div>
                            <img src={this.JarTattoArtist} />
                            <span>Tattoo Artist</span>
                          </div>
                        </div>

                        <div className="project-image-container dj">
                          <div>
                            <img src={this.JarDj} />
                            <span>DJ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3">
                <SimpleSlider
                  dots={false}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  fade={true}
                  autoplay={true}
                  autoplaySpeed={8}
                  pauseOnHover={false}
                  slide1={this.JarSlide1}
                  slide2={this.JarSlide2}
                  slide3={this.JarSlide3}
                  slide4={this.JarSlide4}
                  slide5={this.JarSlide5}
                  slide6={this.JarSlide6}
                  slide7={this.JarSlide7}
                  slide8={this.JarSlide8}
                  slide9={this.JarSlide9}
                />
              </div>

              <div className="fold-4">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-10 col-xs-12">
                      <div className="row">
                        <div className="col-md-5 col-xs-12">
                          <div className="project-content">
                            <ul>
                              <li>
                                <h4>Biker:</h4>
                                <p>
                                  The only thing I like to drink and drive,
                                  <br />
                                  is coffee.{' '}
                                </p>
                              </li>

                              <li>
                                <h4>Tattoo artist: </h4>
                                <p>
                                  You know what else is permanent? <br />
                                  My love for coffee.{' '}
                                </p>
                              </li>

                              <li>
                                <h4>DJ:</h4>
                                <p>
                                  If you need the perfect mix,
                                  <br />I need my coffee fix.{' '}
                                </p>
                              </li>

                              <li>
                                <h4>Rapper:</h4>
                                <p>
                                  Look me in the eye. <br />
                                  It’s what I need.
                                  <br />
                                  A pick-me-up: <br />
                                  Coffee in a cup.
                                </p>
                              </li>

                              <li>
                                <h4>Hippie:</h4>
                                <p>
                                  If you don’t want to mess with my chakras,
                                  <br />
                                  make sure there’s coffee. <br />
                                  Peace.
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-7 col-xs-12">
                          <div className="jar-banners">
                            <div className="project-image-container justify-content-right">
                              <div className="col-md-10 col-xs-12">
                                <img src={this.JarBikerBanner} />
                              </div>
                            </div>
                            <div className="project-image-container justify-content-right">
                              <div className="col-md-10 col-xs-12">
                                <img src={this.JarTattoArtistBanner} />
                              </div>
                            </div>
                            <div className="project-image-container justify-content-right">
                              <div className="col-md-10 col-xs-12">
                                <img src={this.JarDjBanner} />
                              </div>
                            </div>
                            <div className="project-image-container justify-content-right">
                              <div className="col-md-10 col-xs-12">
                                <img src={this.JarRapperBanner} />
                              </div>
                            </div>
                            <div className="project-image-container justify-content-right">
                              <div className="col-md-10 col-xs-12">
                                <img src={this.JarHippiBanner} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <VideoSection videoId="kmH546K4mi0" />
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
              to="/work/rapid-rupee"
              data-text="Rapid Rupee"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Rapid Rupee
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

export default Sussegado;
