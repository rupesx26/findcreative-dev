import React from 'react';
import { Link } from 'react-router-dom';
import PageAnimWrapper from '../pagetransition';
import Navigation from '../navigation';
import Footer from '../footer';
//import ReactFullpage from '@fullpage/react-fullpage';

const Template = props => {
  return (
    <PageAnimWrapper>
      <Navigation
        toggleHeader={props.toggleHeader}
        showSayHello={props.showSayHello}
      />

      {props.children}

      <Footer
        activeSlide={props.currentSlide}
        direction={props.currentDirection}
        footerBgColor={props.footerBgColor}
        toggleHeader={props.toggleHeader}
        footerActive={props.footerActive}
      >
        <small className="footer-subtitle subtitle">Interested in more?</small>
        <Link
          to={props.footerLink}
          data-text={props.FooterText}
          className={`title footer-title`}
        >
          View Work
          <div className="footer-arrow">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </Link>
      </Footer>
    </PageAnimWrapper>
  );
};

export default Template;
