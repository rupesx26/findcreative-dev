import React, { Component } from 'react';

import { imagePath } from '../../utils/assetUtils';
import styles from './difference.module.scss';
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';

class About extends Component {
  render() {
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title="new react ssr about page"
            description="about page description"
            content="about us page content"
          />
          <div className={`${styles.differencePage} page-wrapper`}>
            <h1 className={styles.title}>About page</h1>
            <img
              className={styles.reactLogo}
              src={imagePath('react.svg')}
              alt=""
            />
          </div>
        </div>
      </PageAnimWrapper>
    );
  }
}

export default About;
