import React, { Component } from 'react';
import { TimelineMax, Power0 } from 'gsap/dist/gsap';
import { imagePath } from '../../utils/assetUtils';

import Hamburger from './hamburger';
import './navigation.scss';
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      toggleMenu: ''
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.menuToggle = new TimelineMax({ paused: true, reversed: true });
    this.logoToggle = new TimelineMax();
    this.logo = null;
  }

  componentDidMount() {
    this.setState({
      toggleMenu: this.state.menuOpen ? 'menu-open' : 'menu-close'
    });
    this.logo = this.state.menuOpen
      ? 'fca-logo-white.png'
      : 'fca-logo-black.png';
    this.menuToggle
      .fromTo(
        '.fca-navigation',
        0.8,
        { height: 0 },
        { height: '100vh', background: '#000', ease: Power0.easeIn }
      )
      .reverse();
  }

  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      toggleMenu: !this.state.menuOpen ? 'menu-open' : 'menu-close'
    });

    this.state.menuOpen
      ? this.menuToggle.reverse(false)
      : this.menuToggle.play();
    this.logoToggle.fromTo(
      '.logo',
      1,
      { opacity: 0 },
      { opacity: 1, ease: Power0.easeIn },
      '+=.2'
    );
    this.logo = !this.state.menuOpen
      ? 'fca-logo-white.png'
      : 'fca-logo-black.png';
  }

  render() {
    return (
      <nav className={`fca-navigation ${this.state.toggleMenu}`}>
        <div className="nav-view">
          <div className="logo">
            <img src={imagePath(this.logo)} alt="" />
          </div>
          <Hamburger
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
          />
        </div>
      </nav>
    );
  }
}

export default Navigation;
