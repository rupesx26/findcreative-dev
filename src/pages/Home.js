// //import React, { useState } from 'react';
// import React from 'react';

// // import { api } from '../api';
// // import { useServerData } from '../state/serverDataContext';
// import Head from './Head';

// const Home = () => {
//   // const serverTodos = useServerData(data => {
//   //   return data.todos || [];
//   // });
//   // const [text, setText] = useState('');
//   // const [todos, setTodos] = useState(serverTodos);

//   return (
//     <div>
//       <Head
//         title="new react ssr home page"
//         description="home page description"
//         content="home page content"
//       />
//       <h1>Home page</h1>

//       {/* <form
//         onSubmit={e => {
//           e.preventDefault();

//           const newTodo = {
//             text
//           };

//           api.todos.create(newTodo).then(res => {
//             setTodos([...todos, res]);
//             setText('');
//           });
//         }}
//       >
//         <label htmlFor="todo">Add a todo</label>
//         <br />
//         <input
//           id="todo"
//           type="text"
//           value={text}
//           autoComplete="off"
//           onChange={e => setText(e.target.value)}
//         />
//       </form>

//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>{todo.text}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// // Home.fetchData = () => {
// //   return api.todos.all().then(todos => {
// //     return {
// //       todos
// //     };
// //   });
// // };

// export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { TimelineMax, Power0, Power2, Power1 } from 'gsap/dist/gsap';

//Import Components
import Head from './Head';
import Banner from '../components/homebanner';
import HomeCarousel from '../components/homecarousel';
import PageAnimWrapper from '../components/pagetransition';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
//import { ScrollMagic } from 'scrollscene';
//import {isMobile} from 'react-device-detect'; is for mobile devices
import Pagination from '../components/verticalpagination';

class Home extends Component {
  constructor(props) {
    super(props);
    this.anchors = ['firstPage', 'secondPage', 'thirdPage'];
    this.fullpageWrapper = this.fullpageWrapper.bind(this);
    this.slideAnimation = new TimelineMax({ paused: true });
    this.state = {
      currentSlide: 0,
      currentDirection: 'down',
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: 'dark',
      inversionColor: false,
      footerActive: false,
      count: 0,
      totalCount: 4,
      hidePagination: true
    };
  }

  fullpageWrapper() {
    return (
      <ReactFullpage
        scrollingSpeed={1350}
        navigationTooltips={this.anchors}
        keyboardScrolling={true}
        touchSensitivity={100}
        onLeave={(origin, destination, direction) => {
          this.setState({
            currentSlide: destination.index,
            currentDirection: direction
          });
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <Banner
                moveslide={fullpageApi}
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
              />
              <HomeCarousel
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
                toggleHeader={this.state.toggleHeader}
              />
              <Footer
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
                footerBgColor={this.state.footerBgColor}
                toggleHeader={this.state.toggleHeader}
                footerActive={this.state.footerActive}
              >
                <small className="footer-subtitle subtitle">
                  Interested in more?
                </small>
                <Link
                  to="/"
                  data-text="view work"
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
            </div>
          );
        }}
      />
    );
  }

  static getDerivedStateFromProps(props, state) {
    //console.log(props)
    //console.log(state)

    if (state.currentSlide === 0) {
      return {
        hidePagination: true
      };
    }
    if (state.currentSlide === 0 && state.currentDirection === 'up') {
      return {
        hidePagination: true
      };
    }
    if (state.currentSlide === 1 && state.currentDirection === 'down') {
      return {
        count: 1,
        hidePagination: false
      };
    }
    if (state.currentSlide === 2 && state.currentDirection === 'down') {
      return {
        count: 2,
        hidePagination: false
      };
    }
    if (state.currentSlide === 3 && state.currentDirection === 'down') {
      return {
        count: 3,
        hidePagination: false
      };
    }
    if (state.currentSlide === 4 && state.currentDirection === 'down') {
      return {
        count: 4,
        hidePagination: false
      };
    }
    if (state.currentSlide === 1 && state.currentDirection === 'up') {
      return {
        count: 1,
        hidePagination: false,
        footerActive: true
      };
    }
    if (state.currentSlide === 2 && state.currentDirection === 'up') {
      return {
        count: 2,
        hidePagination: false,
        footerActive: true
      };
    }
    if (state.currentSlide === 3 && state.currentDirection === 'up') {
      return {
        count: 3,
        hidePagination: false,
        footerActive: true
      };
    }
    if (state.currentSlide === 4 && state.currentDirection === 'up') {
      return {
        count: 4,
        hidePagination: false,
        toggleHeader: false,
        footerActive: true
      };
    }

    if (state.currentSlide === 5 && state.currentDirection === 'down') {
      return {
        toggleHeader: true,
        footerActive: true,
        hidePagination: true
      };
    } else {
      return {
        toggleHeader: false,
        hidePagination: false
      };
    }
    return null;
  }

  render() {
    return (
      <PageAnimWrapper>
        <Head
          title="new react ssr home page"
          description="home page description"
          content="home page content"
        />
        <Navigation
          toggleHeader={this.state.toggleHeader}
          showSayHello={this.state.showSayHello}
        />
        <Pagination
          hidePagination={this.state.hidePagination}
          totalCount={this.state.totalCount}
          count={this.state.count}
        />
        <div className="home-page page-wrapper">{this.fullpageWrapper()}</div>
      </PageAnimWrapper>
    );
  }
}

export default Home;
