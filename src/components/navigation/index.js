import React, { Component } from 'react';
import { TimelineMax, Power0, Power2, Power1 } from 'gsap/dist/gsap';
import { imagePath } from '../../utils/assetUtils';
import { Link } from 'react-router-dom';
import Blob from '../blob/Blob';

import MenuItem from './menuitem';

import Hamburger from './hamburger';
import './navigation.scss';

const menu = ['Difference', 'Work', 'Connect'];

class Navigation extends Component {
  constructor(props) {
    super(props);
    console.log('navigation==>', this.props.toggleHeader);
    this.state = {
      menuOpen: false,
      toggleMenu: ''
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.renderMenuList = this.renderMenuList.bind(this);
    this.menuListAnimation = this.menuListAnimation.bind(this);
    this.menuToggle = new TimelineMax({ paused: true, reversed: true });
    this.logoToggle = new TimelineMax();
    this.menuItemToggle = new TimelineMax({ paused: true, reversed: true });
    this.logo = null;
    this.logoClass = null;
    //this.blobAnimation = TimelineMax({paused: true, reversed: true})
  }

  componentDidMount() {
    this.setState({
      toggleMenu: this.state.menuOpen ? 'menu-open' : 'menu-close'
    });
    this.logoClass = this.state.menuOpen ? 'fca-white' : 'fca-black';
    this.logo = this.state.menuOpen
      ? 'fca-logo-white.png'
      : 'fca-logo-black.png';

    this.menuToggle
      .fromTo(
        '.fca-navigation',
        0.7,
        { height: 0 },
        { height: '100vh', background: '#000', ease: Power0.inOut }
      )
      //.reverse()
      .fromTo(
        '.menu-list-wrapper',
        0.6,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: Power0.inOut }
      )
      //.reverse()
      .fromTo(
        '.nav-blob',
        0.5,
        { opacity: 0, y: 100, scale: 0 },
        { opacity: 1, y: 0, scale: 1, ease: Power0.inOut }
      );
    //.reverse();
    this.menuListAnimation();
  }

  menuListAnimation() {
    return menu.map((val, index) => {
      const delay = 0.3 + index / 10;
      this.menuItemToggle
        .fromTo(
          `.list-item-wrapper:nth-child(${index + 1})`,
          delay,
          { opacity: 0, y: -80 },
          { opacity: 1, y: 10, ease: Power1.inOut }
        )
        .reverse();
    });
  }

  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      toggleMenu: !this.state.menuOpen ? 'menu-open' : 'menu-close'
    });

    this.logoToggle.fromTo(
      '.logo',
      1,
      { opacity: 0 },
      { opacity: 1, ease: Power0.inOut },
      '+=.6'
    );

    this.state.menuOpen
      ? this.menuItemToggle.reverse(false)
      : this.menuItemToggle.play();

    this.state.menuOpen
      ? this.menuToggle.reverse(false)
      : this.menuToggle.play();

    this.logo = !this.state.menuOpen
      ? 'fca-logo-white.png'
      : 'fca-logo-black.png';

    this.logoClass = !this.state.menuOpen ? 'fca-white' : 'fca-black';

    this.isVisible = !this.state.menuOpen ? 'isVisible' : '';
  }

  renderMenuList() {
    return menu.map((val, index) => {
      const links = val.toLowerCase();
      return (
        <MenuItem
          key={index}
          route={links}
          number={`0${index + 1}.`}
          onClick={() => {
            this.handleMenuClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });
  }

  render() {
    return (
      <nav className={`fca-navigation ${this.state.toggleMenu}`}>
        <div className="nav-view">
          <div className={`logo ${this.logoClass}`}>
            <Link to="/">
              <img src={imagePath(this.logo)} alt="" />
            </Link>
          </div>
          <ul className={`menu-list-wrapper`}>{this.renderMenuList()}</ul>
          <Blob
            blobAnimClass="nav-blob"
            bbbgcolor="#b5b5b5"
            bb1opacity="0.24"
            bb2opacity="0.44"
            blobBorder="#fff"
            mainblog="#504f4f"
          />
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
