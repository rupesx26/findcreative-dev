import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax, TweenMax, Power1, Power4, Linear } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

import { workImagePath } from '../../utils/assetUtils';

class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.pageAmimation = this.pageAmimation.bind(this);
    this.HrithikRoshanTile = workImagePath('hrx-tile.jpg');
    this.NiharGoldTile = workImagePath('nihargold-tile.jpg');
    this.KateSpadeTile = workImagePath('katespade-tile.jpg');
    this.ThambbiTile = workImagePath('thambbi-tile-2.jpg');
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
    require('debug.addIndicators');
    this.ScrollMagic = require('scrollmagic');
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineMax);
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
              ease: Linear.easeNone
            },
            '+=200'
          )
          .to(`#${item.route}.work-wrapper-0`, 1, {
            x: 0,
            //y: -30,
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
            {
              x: 0,
              //y: -30,
              z: 0,
              ease: Power4.easeInOut
            },
            '-=1'
          )
          .to(
            `#${item.route}.work-wrapper-1 .work-image`,
            2,
            {
              y: 0,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              ease: Linear.easeNone
            },
            '-=5'
          )
          .to(
            `#${item.route}.work-wrapper-1 .work-details`,
            1,
            { y: 0, opacity: 1, ease: Power1.easeInOut },
            '+=1'
          );
      });

      new this.ScrollMagic.Scene({
        triggerElement: slidesWrapper[idx],
        triggerHook: 1,
        duration: '50%',
        reverse: false
      })
        .setTween(animationType)
        .addTo(this.controller);
      // .addIndicators({
      //   colorTrigger: "black",
      //   colorStart: "black",
      //   colorEnd: "black",
      //   indent: 10
      // })

      if (idx % 2) {
        animationTypeTwo
          .fromTo(
            `._block-${idx} .work-wrapper-0`,
            1,
            { y: -50 },
            { y: -20, ease: Linear.easeNone }
          )
          .fromTo(
            `._block-${idx} .work-wrapper-1`,
            1,
            { y: 120 },
            { y: 50, ease: Linear.easeNone }
          );
        new this.ScrollMagic.Scene({
          triggerElement: slidesWrapper[idx],
          triggerHook: 1,
          duration: '80%',
          reverse: true
        })
          .setTween(animationTypeTwo)
          .addTo(this.controller);
        // .addIndicators({
        //   colorTrigger: "black",
        //   colorStart: "black",
        //   colorEnd: "black",
        //   indent: 10
        // })
      } else {
        animationTypeTwo
          .fromTo(
            `._block-${idx} .work-wrapper-0`,
            1,
            { y: -20 },
            { y: 50, ease: Linear.easeNone }
          )
          .fromTo(
            `._block-${idx} .work-wrapper-1`,
            1,
            { y: -100 },
            { y: -50, ease: Linear.easeNone }
          );
        new this.ScrollMagic.Scene({
          triggerElement: slidesWrapper[idx],
          triggerHook: 1,
          duration: '80%',
          reverse: true
        })
          .setTween(animationTypeTwo)
          .addTo(this.controller);
      }
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
        <div className="portfolio-list">
          {finalData.map((arr, i) => {
            const oddEvenClass = i % 2 ? 'odd' : 'even';
            return (
              <div
                key={i}
                id={oddEvenClass + i}
                className={`row no-gutters work-wrapper-2 _block-${i} _wrap-${oddEvenClass}`}
                style={{ width: '100%' }}
              >
                {arr.map((item, idx) => {
                  return (
                    <Link
                      to={item.route + idx}
                      id={item.route}
                      className={`work-wrapper work-wrapper-${idx}`}
                      key={idx}
                    >
                      <div ref={this.workWrapper} className="work-image">
                        {item.tile && <img alt={item.tile} src={item.tile} />}
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
