import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageAnimWrapper from '../../components/pagetransition';
import Head from '../Head';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import ReactFullpage from '@fullpage/react-fullpage';

import { workImagePath } from '../../utils/assetUtils';

import { TweenMax, TimelineMax, Power4 } from 'gsap/dist/gsap';
import { ScrollScene, addIndicators } from 'scrollscene';

import './work.scss';

class Work extends Component {
  constructor(props) {
    super(props);
    this.anchors = ['firstPage', 'secondPage'];

    this.fullpageWrapper = this.fullpageWrapper.bind(this);

    this.HrithikRoshanTile = workImagePath('hrx.jpg');
    this.NiharGoldTile = workImagePath('nihar-gold.jpg');
    this.KateSpadeTile = workImagePath('kate-spade.jpg');
    this.ThambbiTile = workImagePath('thambbi.jpg');
    this.HeroTalkiesTile = workImagePath('hero-talkies.jpg');
    this.CocoSoulTile = workImagePath('coco-soul.jpg');
    this.SussegadoCoffeeTile = workImagePath('sussegado.jpg');
    this.RapidRupeeTile = workImagePath('nihar-gold.jpg');
    this.GravityTile = workImagePath('gravity.jpg');
    this.footerAnimation = new TimelineMax();
    this.state = {
      wrapperHeight: '500px',
      boxPosition: 0,
      currentSlide: 0,
      currentDirection: 'down',
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'dark',
      inversionColor: false,
      footerActive: false,
      data: [
        {
          _id: '0',
          color: '#fff',
          title: "Hrithik Roshan's",
          subtitle: 'Graphic Novel',
          row: 0,
          route: 'hrithik-roshan',
          tile: this.HrithikRoshanTile
        },
        {
          _id: '1',
          color: '#fff',
          title: 'Nihar Gold',
          subtitle: 'Packaging Design',
          row: 0,
          route: 'nihar-gold',
          tile: this.NiharGoldTile
        },
        {
          _id: '2',
          color: '#fff',
          title: 'Kate Spade',
          subtitle: 'Digital Audit',
          row: 1,
          route: 'kate-spade',
          tile: this.KateSpadeTile
        },
        {
          _id: '3',
          color: '#fff',
          title: 'Thambbi',
          subtitle: 'Branding & Communication Design',
          row: 1,
          route: 'thambbi',
          tile: this.ThambbiTile
        },
        {
          _id: '4',
          color: '#fff',
          title: 'HERO Talkies',
          subtitle: 'Brand Design',
          row: 2,
          route: 'hero-talkies',
          tile: this.HeroTalkiesTile
        },
        {
          _id: '5',
          color: '#fff',
          title: 'Coco Soul',
          subtitle: 'Digital Content',
          row: 2,
          route: 'cocosoul',
          tile: this.CocoSoulTile
        },
        {
          _id: '6',
          color: '#fff',
          title: 'Sussegado',
          subtitle: 'Product & Package Design',
          row: 3,
          route: 'sussegado-coffee',
          tile: this.SussegadoCoffeeTile
        },
        {
          _id: '7',
          color: '#fff',
          title: 'Rapid Rupee',
          subtitle: 'Brand Strategy & Communication',
          row: 3,
          route: 'rapid-rupee',
          tile: this.RapidRupeeTile
        },
        {
          _id: '8',
          color: '#fff',
          title: 'Socranos Gravity',
          subtitle: 'Strategy & Packaging Design',
          row: 4,
          route: 'socranos-gravity',
          tile: this.GravityTile
        }
      ]
    };
  }

  static getDerivedStateFromProps(props, state) {
    //console.log(props)
    //console.log(state)
    if (state.currentSlide === 1 && state.currentDirection === 'down') {
      return {
        footerActive: true,
        toggleHeader: true
      };
    } else {
      return {
        toggleHeader: false
      };
    }
    return null;
  }
  componentDidMount() {
    this.footerAnimation.to('#footer-view', 1, {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      ease: Power4.inOut
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('prevProps',prevProps)
    console.log('prevState', prevState);
    if (prevState.currentSlide === 0) {
      this.footerAnimation.to('#footer-view', 1, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
        ease: Power4.inOut
      });
    }
  }

  fullpageWrapper() {
    return (
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        scrollingSpeed={1000}
        navigationTooltips={this.anchors}
        keyboardScrolling={true}
        onLeave={(origin, destination, direction) => {
          this.setState({
            currentSlide: destination.index,
            currentDirection: direction
          });
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <div className="section ">hello</div>
              <Footer
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
                footerBgColor={this.state.footerBgColor}
                toggleHeader={this.state.toggleHeader}
                footerActive={this.state.footerActive}
              >
                <small className="footer-subtitle subtitle">
                  Interested in more?
                </small>
                <Link
                  to="/"
                  data-text="view work"
                  className={`title footer-title`}
                >
                  View Work
                  <div className="footer-arrow">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                  </div>
                </Link>
              </Footer>
            </div>
          );
        }}
      />
    );
  }

  render() {
    return (
      <PageAnimWrapper>
        <Head
          title="new react ssr fca work page"
          description="work page description"
          content="work us page content"
        />
        <Navigation
          toggleHeader={this.state.toggleHeader}
          showSayHello={this.state.showSayHello}
        />
        <div className="page-wrapper work-page" id="wrapper">
          {this.fullpageWrapper()}
        </div>
      </PageAnimWrapper>
    );
  }
}

export default Work;
