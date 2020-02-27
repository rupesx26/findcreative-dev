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
      inversionColor: false
    };
  }

  fullpageWrapper() {
    return (
      <ReactFullpage
        scrollingSpeed={1000}
        navigationTooltips={this.anchors}
        keyboardScrolling={true}
        onLeave={(origin, destination, direction) => {
          this.setState({
            currentSlide: destination.index,
            currentDirection: direction
          });
        }}
        render={({ state, fullpageApi }) => {
          //console.log('render prop change', state, fullpageApi); // eslint-disable-line no-console
          // if(this.state.currentSlide === 4 && this.state.currentDirection === 'down') {
          //   this.state.toggleHeader = true
          // } else if(this.state.currentSlide === 5) {
          //   this.state.toggleHeader = false
          // } else if(this.state.currentSlide === 4 && this.state.currentDirection === 'up') {
          //   this.state.toggleHeader = false
          // } else if(this.state.currentSlide === 3 && this.state.currentDirection === 'up') {
          //   this.state.toggleHeader = false
          // } else if(this.state.currentSlide === 5 && this.state.currentDirection === 'down') {
          //   this.state.toggleHeader = true
          // }

          //console.log('check',this.state.currentSlide === 5 && this.state.currentDirection === 'down')
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
              >
                <small className="subtitle">Interested in more?</small>
                <Link to="/" data-text="view work">
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
    if (state.currentSlide === 5 && state.currentDirection === 'down') {
      return {
        toggleHeader: true
      };
    } else {
      return {
        toggleHeader: null
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
        <div className="home-page page-wrapper">{this.fullpageWrapper()}</div>
      </PageAnimWrapper>
    );
  }
}

export default Home;
