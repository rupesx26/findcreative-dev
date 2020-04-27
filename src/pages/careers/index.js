import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import OpeningAPI from './openingApi';

import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import './careers.scss';
class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'light',
      footerActive: false,
      fullpageAnimation: false
    };
  }

  render() {
    const playersData = OpeningAPI.all();
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
          <div className="page-wrapper careers-page">
            <section className="full-page-wrapper current-opening-list">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <ul className="opening-list">
                      {playersData.map((x, y) => {
                        return (
                          <li key={x.jobId}>
                            <Link to={`/careers/${x.jobId}`}>
                              {x.jobDescription}
                              <div className="cta-apply">APPLY</div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="current-opening-cta">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <h2>We’re always on the lookout for good talent. </h2>
                    <div className="opening-cta">
                      drop in an email over at{' '}
                      <a href="mailto:hello@findcreative.in">
                        {' '}
                        hello@findcreative.in{' '}
                      </a>
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
          ></Footer>
        </div>
      </PageAnimWrapper>
    );
  }
}
export default Careers;
