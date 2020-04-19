import React from 'react';
import Slider from 'react-slick';
import './slider.scss';

class HrxSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: this.props.dots,
      infinite: this.props.infinite,
      speed: this.props.speed,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      fade: this.props.fade,
      autoplay: this.props.autoplay,
      autoplaySpeed: this.props.autoplaySpeed,
      pauseOnHover: this.props.pauseOnHover,
      centerMode: this.props.centerMode,
      variableWidth: this.props.variableWidth,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: this.props.slidesToShow,
            slidesToScroll: this.props.slidesToScroll
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        <div className="slide">
          <div className="slideBg">
            <img src={this.props.slide1} />
          </div>
        </div>
        <div className="slide slide2">
          <div className="slideBg">
            <img src={this.props.slide2} />
          </div>
        </div>
        <div className="slide slide3">
          <div className="slideBg">
            <img src={this.props.slide3} />
          </div>
        </div>
        <div className="slide slide4">
          <div className="slideBg">
            <img src={this.props.slide4} />
          </div>
        </div>
        <div className="slide slide5">
          <div className="slideBg">
            <img src={this.props.slide5} />
          </div>
        </div>

        <div className="slide slide6">
          <div className="slideBg">
            <img src={this.props.slide6} />
          </div>
        </div>
      </Slider>
    );
  }
}

export default HrxSlider;
