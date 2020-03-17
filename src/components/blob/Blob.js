import React, { Component } from 'react';
import styles from './blob.module.scss';
import { imagePath } from '../../utils/assetUtils';

class Blob extends Component {
  render() {
    return (
      <div
        className={`${styles.blobOuter} blob-otr ${this.props.blobAnimClass}`}
      >
        {this.props.thinline && (
          <div className={styles.thinLineBlobWrapper}>
            <img
              className={styles.reactLogo}
              src={imagePath('thin-lines-blob@2x.png')}
              alt=""
            />
          </div>
        )}

        <div className={styles.blobWrapper}>
          <div
            style={{
              backgroundColor: this.props.bb3BgColor,
              opacity: this.props.bb1opacity
            }}
            className={styles.blobLayer1}
          ></div>
          <div
            style={{
              backgroundColor: this.props.bb2BgColor,
              opacity: this.props.bb2opacity
            }}
            className={styles.blobLayer2}
          ></div>
          <div
            style={{ backgroundColor: this.props.bb1BgColor }}
            className={styles.blob}
          ></div>
          <div
            style={{ borderColor: this.props.blobBorder }}
            className={styles.blobLayer3}
          ></div>
        </div>
      </div>
    );
  }
}

export default Blob;
