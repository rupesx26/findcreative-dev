import React, { Component } from 'react';
import { TweenMax, TimelineMax, TimelineLite, Power4, CSSPlugin } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { isMobile } from 'react-device-detect'; //is for mobile devices
const plugins = [CSSPlugin];

class ProjectPageSummary extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.addLineBreaks = this.addLineBreaks.bind(this);
    this.pageAmimation = this.pageAmimation.bind(this);
  }

  componentDidMount() {
    if (!isMobile) {
      this.pageAmimation();
    }
  }

  pageAmimation() {
    this.ScrollMagic = require('scrollmagic');
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(
      this.ScrollMagic,
      TweenMax,
      TimelineMax,
      TimelineLite
    );
    const workTextAnimation = new TimelineLite();
    workTextAnimation
      .fromTo(
        '.work-title',
        2,
        { opacity: 0, y: 200 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=1'
      )
      .fromTo(
        '.text-1',
        1.1,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.80'
      )
      .fromTo(
        '.text--1',
        1.1,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.95'
      )

      .fromTo(
        '.text-2',
        1.1,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.80'
      )
      .fromTo(
        '.text--2',
        1.1,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.95'
      )

      .fromTo(
        '.text-3',
        1.1,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.80'
      )
      .fromTo(
        '.text--3',
        1.1,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        '-=.95'
      )

      .fromTo(
        '.project-summary p:first-child',
        1.3,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.95'
      )
      .fromTo(
        '.project-summary p:nth-child(2)',
        1.3,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.95'
      )
      .fromTo(
        '.project-summary p:last-child',
        1.3,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power4.easeOut },
        '-=.95'
      );

    new this.ScrollMagic.Scene({
      triggerElement: '.project-summary-wrapper',
      reverse: false
    })
      .setTween(workTextAnimation)
      //.addIndicators()
      .addTo(this.controller);
  }

  addLineBreaks = string =>
    string.split('\n').map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    ));

  render() {
    return (
      <section className="project-summary-wrapper">
        <div className="container">
          <div className="row justify-content-center no-gutters">
            <div className="col-md-8 col-xs-12">
              <div className="work-title">
                <h1>{this.props.title}</h1>
              </div>

              <div className="work-description">
                <div className="row no-gutters">
                  <div className="col-md-5 col-xs-11 no-gutters project-initial">
                    <ul>
                      <li>
                        <label className="text-1">Client</label>
                        <span className="text-block text--1">
                          {this.props.client}
                        </span>
                      </li>
                      <li>
                        <label className="text-2">Project</label>
                        <span className="text-block text--2">
                          {this.props.project}
                        </span>
                      </li>
                      <li>
                        <label className="text-3">Brief</label>
                        <span className="text-block text--3">
                          {this.props.brief}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-1"></div>

                  <div className="col-md-6 col-xs-12 project-summary">
                    {this.props.para1 && (
                      <p>{this.addLineBreaks(this.props.para1)}</p>
                    )}
                    {this.props.para2 && (
                      <p>{this.addLineBreaks(this.props.para2)}</p>
                    )}
                    {this.props.para3 && (
                      <p>{this.addLineBreaks(this.props.para3)}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectPageSummary;
