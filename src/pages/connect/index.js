import React, { Component } from 'react';
import Template from '../../components/template';

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wrapperHeight: '500px',
      boxPosition: 0,
      currentSlide: 0,
      currentDirection: 'down',
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'dark',
      inversionColor: false,
      footerActive: false
    };
  }
  render() {
    return (
      <Template
        toggleHeader={this.state.toggleHeader}
        showSayHello={this.state.showSayHello}
        footerLink="/home"
        footerText="Home"
        footerBgColor={this.state.footerBgColor}
      >
        <div style={{ height: '100vh', width: '100%', display: 'flex' }}>
          hello
        </div>
      </Template>
    );
  }
}

export default Connect;
