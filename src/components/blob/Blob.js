import React, { Component } from 'react';
import './blob.scss';
import { imagePath } from '../../utils/assetUtils';

class Blob extends Component {
  render() {
    return (
      <div className={`blob-outer blob-otr ${this.props.blobAnimClass}`}>
        {this.props.thinline && (
          <div className="thin-line-blob-wrapper">
            <img src={imagePath('thin-lines-blob@2x.png')} alt="" />
          </div>
        )}

        <div className="blob-wrapper">
          <div
            style={{
              backgroundColor: this.props.bb3BgColor,
              opacity: this.props.bb1opacity
            }}
            className="blob-layer-1"
          ></div>
          <div
            style={{
              backgroundColor: this.props.bb2BgColor,
              opacity: this.props.bb2opacity
            }}
            className="blob-layer-2"
          ></div>
          <div
            style={{ backgroundColor: this.props.bb1BgColor }}
            className="blob"
          ></div>
          <div
            style={{ borderColor: this.props.blobBorder }}
            className="blob-layer-3"
          ></div>
        </div>
      </div>
    );
  }
}

export default Blob;
