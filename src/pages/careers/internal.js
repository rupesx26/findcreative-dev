import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OpeningAPI from './openingApi';

import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import './careers.scss';

class CareersInternal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paramId: props.match.params,
      isActive: false,
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'light',
      footerActive: false,
      fullpageAnimation: false
    };
    this.internalPages = this.internalPages.bind(this);
  }

  internalPages(param) {
    const player = OpeningAPI.get(parseInt(param.id, 10));
    const jobRole = player.jobRole ? player.jobRole : null;
    return !player ? (
      <div style={{ padding: '0px 20px' }}>
        Sorry, but the player was not found
      </div>
    ) : (
      <div>
        {player.jobTitle && <h1> {player.jobTitle} </h1>}

        {player.jobIntro && (
          <div className="job-intro">
            <div className="col-md-9">
              <p>{player.jobIntro}</p>
            </div>
          </div>
        )}

        {player.jobAbout && (
          <div className="job-about">
            <div className="col-md-10">
              <h5>About</h5>
              <p>{player.jobAbout}</p>
            </div>
          </div>
        )}

        {jobRole && (
          <div className="job-role">
            <h5>Here's What You'll Do: </h5>
            <ul>
              {jobRole.map((x, y) => {
                return <li key={y}>{x}</li>;
              })}
            </ul>
          </div>
        )}

        {player.experience && (
          <div className="job-requirements">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="title">Experience</div>
                <div className="details">{player.experience}</div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="title">Skills</div>
                <div className="details">{player.skills}</div>
              </div>
            </div>
          </div>
        )}

        <div className="back-btn">
          <Link to="/careers">Back</Link>
        </div>
      </div>
    );
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

          <div className="page-wrapper careers-page job-description-wrapper">
            <section className="full-page-wrapper">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-xs-12">
                    <div className="col-md-12 col-xs-12">
                      {this.internalPages(this.state.paramId)}
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
          ></Footer>
        </div>
      </PageAnimWrapper>
    );
  }
}

export default CareersInternal;
