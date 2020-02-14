import React, { Component } from 'react';
import styles from './footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <section className={`${styles.pageFooter} section`}>
        <div>Footer</div>
      </section>
    );
  }
}

export default Footer;
