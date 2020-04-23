import React from 'react';
import Slider from 'react-slick';
import './slider.scss';

class SimpleSlider extends React.Component {
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
      pauseOnHover: this.props.pauseOnHover
    };
    return (
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide1 + ')' }}
          ></div>
        </div>
        <div className="slide slide2">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide2 + ')' }}
          ></div>
        </div>
        <div className="slide slide3">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide3 + ')' }}
          ></div>
        </div>
        <div className="slide slide4">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide4 + ')' }}
          ></div>
        </div>
        <div className="slide slide5">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide5 + ')' }}
          ></div>
        </div>
        {/* <div className='slide slide6'>
              <div className='slideBg' style={{backgroundImage : 'url(' +this.props.slide6+ ')'}}></div>
          </div> */}
        <div className="slide slide7">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide7 + ')' }}
          ></div>
        </div>
        <div className="slide slide8">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide8 + ')' }}
          ></div>
        </div>
        <div className="slide slide9">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide9 + ')' }}
          ></div>
        </div>
        <div className="slide slide10">
          <div
            className="slideBg"
            style={{ backgroundImage: 'url(' + this.props.slide10 + ')' }}
          ></div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
