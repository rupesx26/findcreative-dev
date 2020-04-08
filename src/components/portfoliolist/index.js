import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gsap, TimelineMax, TweenMax, Power1, Power4, Power0 } from 'gsap';
import { ScrollScene, addIndicators } from 'scrollscene';

import { workImagePath } from '../../utils/assetUtils';

class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.pageAmimation = this.pageAmimation.bind(this);
    this.HrithikRoshanTile = workImagePath('hrx-tile.jpg');
    this.NiharGoldTile = workImagePath('nihargold-tile.jpg');
    this.KateSpadeTile = workImagePath('katespade-tile.jpg');
    this.ThambbiTile = workImagePath('thambbi-tile.jpg');
    this.HeroTalkiesTile = workImagePath('herotalkies-tile.jpg');
    this.CocoSoulTile = workImagePath('cocosoul-tile.jpg');
    this.SussegadoCoffeeTile = workImagePath('sussegado-tile.jpg');
    this.RapidRupeeTile = workImagePath('rapidrupee-tile.jpg');
    this.GravityTile = workImagePath('gravity-tile.jpg');
    this.state = {
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

  componentDidMount() {
    this.pageAmimation();
  }

  pageAmimation() {
    const data = this.state.data;

    const slidesWrapper = document.querySelectorAll('.work-wrapper-2');
    const finalData = this.groupBy(data, function(item) {
      return [item.row];
    });

    finalData.map((itemArr, idx) => {
      const animationType = new TimelineMax();
      const animationTypeTwo = new TimelineMax();

      itemArr.map((item, index) => {
        animationType
          .to(
            `#${item.route}.work-wrapper-0 .work-image`,
            2,
            {
              y: 0,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              ease: Power1.easeOut
            },
            '+=200'
          )
          .to(`#${item.route}.work-wrapper-0`, 1, {
            x: 0,
            y: -30,
            z: 0,
            ease: Power4.easeInOut
          })
          .to(
            `#${item.route}.work-wrapper-0 .work-details`,
            1,
            { y: 0, opacity: 1, ease: Power1.easeInOut },
            '+=1'
          )

          .to(
            `#${item.route}.work-wrapper-1`,
            1,
            { x: 0, y: -30, z: 0, ease: Power4.easeInOut },
            '-=1'
          )
          .to(
            `#${item.route}.work-wrapper-1 .work-image`,
            2,
            {
              y: 0,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              ease: Power1.easeOut
            },
            '-=5'
          )
          .to(
            `#${item.route}.work-wrapper-1 .work-details`,
            1,
            { y: 0, opacity: 1, ease: Power1.easeInOut },
            '+=1'
          );

        animationTypeTwo
          .fromTo(
            `#${item.route}.work-wrapper-0`,
            0.5,
            { y: 0 },
            { y: -80, ease: Power0.easeInOut }
          )
          .fromTo(
            `#${item.route}.work-wrapper-1`,
            0.5,
            { y: 0 },
            { y: -70, ease: Power0.easeInOut }
          );

        const workScroll2 = new ScrollScene({
          triggerElement: document.getElementById(item.route),
          triggerHook: 0.2,
          //duration: 1000,
          gsap: {
            timeline: animationTypeTwo,
            reverseSpeed: 1
          }
        });

        const workScroll = new ScrollScene({
          triggerElement: document.getElementById(item.route),
          triggerHook: 1,
          duration: 300,
          reverse: false,
          scene: {
            reverse: false
          },
          gsap: {
            timeline: animationType
          }
        });
      });
    });
  }

  arrayFromObject(obj) {
    const arr = [];
    for (let i in obj) {
      arr.push(obj[i]);
    }
    return arr;
  }

  groupBy(list, fn) {
    const groups = {};
    list.map(elem => {
      let group = JSON.stringify(fn(elem));
      if (group in groups) {
        groups[group].push(elem);
      } else {
        groups[group] = [elem];
      }
    });

    return this.arrayFromObject(groups);
  }

  render() {
    const data = this.state.data;
    const finalData = this.groupBy(data, function(item) {
      return [item.row];
    });
    return (
      <div className="col-md-8 col-lg-8 no-gutters">
        <div
          className="scrollTrigger"
          style={{ height: '530px', marginTop: '300px', display: 'none' }}
        >
          <div className="test-text">This is text</div>
        </div>

        <div className="portfolio-list">
          {finalData.map((arr, i) => {
            const oddEvenClass = i % 2 ? 'odd' : 'even';
            return (
              <div
                key={i}
                id={oddEvenClass + i}
                className={`row no-gutters work-wrapper-2 _wrap-${oddEvenClass}`}
                style={{ width: '100%' }}
              >
                {arr.map((item, idx) => {
                  const oddEvenClassAnchor = i % 2 ? '_odd' : '_even';
                  return (
                    <Link
                      to={item.route + idx}
                      id={item.route}
                      className={`work-wrapper work-wrapper-${idx}`}
                      key={idx}
                    >
                      <div ref={this.workWrapper} className="work-image">
                        {item.tile && <img src={item.tile} />}
                      </div>
                      <div className="work-details">
                        <h5 className="sub-title">{item.subtitle}</h5>
                        <h4 className="title">{item.title}</h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PortfolioList;
