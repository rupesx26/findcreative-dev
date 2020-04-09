import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { imagePath } from '../../utils/assetUtils';
import styles from './difference.module.scss';
import Head from '../Head';
import PageAnimWrapper from '../../components/pagetransition';
import Footer from '../../components/footer';
import Navigation from '../../components/navigation';
import {
  TimelineMax,
  TimelineLite,
  TweenMax,
  Power2,
  Linear,
  Power1,
  Power4,
  Power0
} from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
//import 'debug.addIndicators';
class About extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'dark'
    };
  }

  componentDidMount() {
    require('debug.addIndicators');

    this.ScrollMagic = require('scrollmagic');
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineMax);

    TweenMax.from('.char-img', 1.5, {
      autoAlpha: 0.1,
      scale: 1.5,
      y: 0,
      ease: Power2.easeOut
    });
    TweenMax.fromTo(
      '.char-img',
      2.8,
      { y: 0 },
      { y: 120, repeat: -1, yoyo: true, ease: Linear.easeNone }
    );

    const animation2 = new TimelineLite().fromTo(
      '.fold-1',
      1,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: Power4.easeOut },
      '-=.95'
    );

    new this.ScrollMagic.Scene({ triggerElement: '.fold-1', reverse: true })
      .setTween(animation2)
      .addTo(this.controller);
    //.addIndicators()
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: true
      });
    } else {
      this.setState({
        toggleHeader: false
      });
    }
  }

  render() {
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title="new react ssr about page"
            description="about page description"
            content="about us page content"
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />
          <div
            className={`${styles.differencePage} page-wrapper`}
            ref={this.mainWrapper}
          >
            <h1 className={styles.title}>About page</h1>
            <h1 className="char-img">Scrolling inside sections</h1>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed.
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test2
            </p>
            <div
              className="fold-1"
              style={{ height: '300px', border: '4px solid red' }}
            >
              <p>
                olumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
                hinc mutat inciderint. Cu maluisset assentior per, graecis
                ponderum no mel. Eum eu vitae quando gloriatur, cum graece
                percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
                nam malorum verterem. Ea zril aliquip euismod sed. test2
              </p>
            </div>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 3
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 4
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 5
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 6
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 6
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 6
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 6
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 6
            </p>
            <p>
              Eu nec ferri molestie consequat, vel at alia dolore putant. Labore
              philosophia ut vix. In vis nostrud interesset appellantur, vis et
              tation feugiat scripserit. Te nec noster suavitate persecuti.
              Diceret erroribus cu vix, alii omnes ei sit. Sea an corrumpit
              patrioque, virtute accumsan nominavi et usu, ex mei dolore vocibus
              incorrupte. Duo ea saperet tacimates. Sed possim prodesset no, per
              novum putent doctus ea. Eu mea magna aliquip graecis, pri corpora
              officiis complectitur ei, lorem saepe consetetur his ad. Meis
              consulatu ei vis, an altera ocurreret interesset qui. Eu ponderum
              comprehensam his, case antiopam pri te. Mel ne partem consequat
              instructior. Ad dicunt malorum sea, ex qui omnes invenire
              gubergren. Ius cu autem aliquando, pri vide ornatus perpetua an,
              no has epicuri verterem. Nam at animal pertinax efficiantur. Per
              alienum torquatos eu. Sed saepe quodsi et, ullum choro
              definitionem sed et. Ullum elitr comprehensam sed at, sint illum
              propriae per eu. Eu enim laudem reformidans vel. Pro clita quando
              ad. Usu te virtute quaestio, ut eruditi tacimates volutpat per.
              Affert accusamus duo ex, ea pri habeo graece, cu magna dolorum
              sea. Quas dictas assueverit ad qui, cu duo harum fabulas apeirian,
              ullum gubergren et sit. Ne cetero recusabo adipiscing quo, cu
              harum quaestio neglegentur cum. Has tation aliquip ad, virtute
              volumus definitionem mel ne. Nobis audiam civibus ius at. Ei eum
              hinc mutat inciderint. Cu maluisset assentior per, graecis
              ponderum no mel. Eum eu vitae quando gloriatur, cum graece
              percipitur no, sed errem maiestatis te. Sed porro epicuri te, ad
              nam malorum verterem. Ea zril aliquip euismod sed. test 6
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <img
              className={styles.reactLogo}
              src={imagePath('react.svg')}
              alt=""
            />
          </div>
          <Footer
            activeSlide={this.state.currentSlide}
            direction={this.state.currentDirection}
            footerBgColor={this.state.footerBgColor}
            toggleHeader={this.state.toggleHeader}
            footerActive={this.state.footerActive}
            ref={this.footerWrapper}
            onScroll={this.handleScroll}
          >
            <small className="footer-subtitle subtitle">
              Interested in more?
            </small>
            <Link to="/" data-text="view work" className={`title footer-title`}>
              View Work
              <div className="footer-arrow">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </Link>
          </Footer>
        </div>
      </PageAnimWrapper>
    );
  }
}

export default About;
