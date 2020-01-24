import React, { Component } from 'react';
import Styles from './wrapper.module.scss';
class HomeCarousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id={Styles.homeCarouselWrapper}>
        <div>Carousel</div>
      </section>
    );
  }
}

export default HomeCarousel;
