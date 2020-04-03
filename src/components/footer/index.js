import React, { Component } from 'react';
import Icon from '../icons';

import './footer.scss';
import { TimelineMax, Power0, Power2, Power1 } from 'gsap/dist/gsap';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerBgColor: this.props.footerBgColor
    };
  }
  componentDidMount() {
    const animation2 = new TimelineMax();
    animation2
      .to('.footer-subtitle', 0, { opacity: 0, y: 100 })
      .to('.footer-title', 0, { opacity: 0, y: 50 })
      .to('.copy-writes', 0, { opacity: 0, y: 50 })
      .to('.footer-icons', 0, { opacity: 0, y: 50 });
  }

  static getDerivedStateFromProps(props, state) {
    const animation2 = new TimelineMax();
    if (props.footerActive) {
      animation2
        .to(
          '.footer-subtitle',
          0.8,
          { opacity: 1, y: 0, ease: Power0.inOut },
          '+=1'
        )
        .to(
          '.footer-title',
          0.8,
          { opacity: 1, y: 0, ease: Power0.inOut },
          '-=0.1'
        )
        .to(
          '.copy-writes',
          0.5,
          { opacity: 1, y: 0, ease: Power0.inOut },
          '-=0.1'
        )
        .to(
          '.footer-icons',
          0.5,
          { opacity: 1, y: 0, ease: Power0.inOut },
          '-=0.1'
        );
    }
    // if (props.activeSlide === 4) {
    //   // console.log('here==>',props)
    //   animation2
    //     .to('.copy-writes', 0.2, { opacity: 0, y: 50, ease: Power0.inOut })
    //     .to('.footer-icons', 0.2, { opacity: 0, y: 50, ease: Power0.inOut })
    //     .to('.footer-title', 0.2, { opacity: 0, y: 100, ease: Power0.inOut })
    //     .to('.footer-subtitle', 0.2, { opacity: 0, y: 50, ease: Power0.inOut });
    // }
    return null;
  }

  render() {
    const footerBgColor =
      this.state.footerBgColor === 'dark' ? 'dark' : 'light';
    return (
      <section className="page-footer section">
        <div id="footer-view" className={footerBgColor}>
          <div className="inside-wrapper">
            <div className="page-footer-wrapper">
              <div className="page-footer-content">{this.props.children}</div>
            </div>

            <div className="common-footer">
              <address style={{ visibility: 'hidden' }}>
                <span>FINDCreative Avenues LLP.</span>
                A 904/905, Kanakia Wall Street, <br />
                Chakala, Andheri (E), Mumbai 400093.
              </address>
              <span className="copy-writes">
                © <span>{new Date().getFullYear()}</span>
                <span className="space"></span>
                <span>FINDCreative Avenues LLP. </span>
                <span className="space"></span>
                <span>
                  <a href="">Privacy Policy</a>
                </span>
              </span>
              <div className="footer-social-icons footer-icons">
                <div className="icon-box">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/findcreative.in/"
                  >
                    <Icon icon="facebook" />
                  </a>
                </div>
                <div className="icon-box">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/findcreativeave/"
                  >
                    <Icon icon="instagram" />
                  </a>
                </div>
                <div className="icon-box">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/13384828/admin/"
                  >
                    <Icon icon="linkedin2" />
                  </a>
                </div>
                <div className="icon-box">
                  <a target="_blank" href="https://twitter.com/findcreativeave">
                    <Icon icon="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
