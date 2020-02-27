import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerBgColor: this.props.footerBgColor,
      activeSlide: this.props.activeSlide,
      direction: this.props.direction
    };
  }

  // componentDidUpdate(prevProps){
  //   console.log(prevProps)
  //   if(prevProps.activeSlide === 5  && prevProps.direction === 'down') {
  //     this.sendData()
  //   }
  // }

  //  static getDerivedStateFromProps(props, state) {
  //    if(props.activeSlide === 5  && props.direction === 'down') {
  //      state.toggleHeader = true

  //    } else if(props.activeSlide === 4  && props.direction === 'up') {
  //       state.toggleHeader = false
  //    }
  //   // console.log("props", props)
  //    console.log("state", state)

  //  }

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
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
