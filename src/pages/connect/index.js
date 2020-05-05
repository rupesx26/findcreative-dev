import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import './connect.scss';

//import 'debug.addIndicators';
class Connect extends Component {
  constructor(props) {
    super(props);
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      isActive: false,
      activeText: 'Know More',
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'light',
      footerActive: false,
      fullpageAnimation: false
    };
  }

  handleKnowMore() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
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
          <div className="page-wrapper connect-page" ref={this.mainWrapper}>
            <section className="full-page-wrapper contact-form">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <div className="col-md-10 col-xs-12">
                      <h1>Want to work with us? Get in touch.</h1>
                      <div className="sub-title">
                        Together, let’s find the best ways to build your brand.
                      </div>

                      <form>
                        <div className="form-field">
                          <label>Your Name</label>
                          <input type="text" className="field" />
                        </div>

                        <div className="form-field">
                          <label>Your E-mail</label>
                          <input type="text" className="field" />
                        </div>

                        <div className="form-field">
                          <label>Your Company</label>
                          <input type="text" className="field" />
                        </div>

                        <div className="form-field">
                          <label>Tell us about your project</label>
                          <input type="text" className="field" />
                        </div>

                        <div className="agreement">
                          <label>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="text">
                              I have read and agree with FCA’s{' '}
                              <Link to="/policy">privacy policy.</Link> and{' '}
                              <Link to="/terms">terms</Link>
                            </span>
                          </label>
                        </div>

                        <button className="submit-button">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="full-page-wrapper contact-types bg-color-gray">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <div className="contact-box">
                          <h5>Email us</h5>
                          <div className="details">
                            <a href="mailto:hello@findcreative.in">
                              hello@findcreative.in
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="contact-box visit-us">
                          <h5>Visit us</h5>
                          <div className="details">
                            <address>
                              A Wing 904 - 905, Kanakia Wall Street, <br />
                              Chakala, Andheri (E), <br /> Mumbai 400093.
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="contact-box call-us">
                          <h5>Call us</h5>
                          <div className="details">022 4034 8888</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="current-opening-cta">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-xs-12 col-offset-md-2">
                    <h2>Are you an aspiring creative?</h2>
                    <Link to="/careers" className="opening-cta">
                      Current Openings
                    </Link>
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

export default Connect;
