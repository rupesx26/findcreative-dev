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
import ReactFullpage from '@fullpage/react-fullpage';
import { TimelineMax, Power0, Power2, Power1 } from 'gsap/dist/gsap';

//Import Components
import Head from './Head';
import Banner from '../components/homebanner';
import HomeCarousel from '../components/homecarousel';
import PageAnimWrapper from '../components/pagetransition';
import Footer from '../components/footer';
//import { ScrollMagic } from 'scrollscene';
//import {isMobile} from 'react-device-detect'; is for mobile devices

class Home extends Component {
  constructor(props) {
    super(props);
    this.anchors = ['firstPage', 'secondPage', 'thirdPage'];
    this.fullpageWrapper = this.fullpageWrapper.bind(this);
    this.slideAnimation = new TimelineMax({ paused: true });
    this.state = {
      currentSlide: null
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  fullpageWrapper() {
    return (
      <ReactFullpage
        scrollingSpeed={1500}
        navigationTooltips={this.anchors}
        keyboardScrolling={true}
        onLeave={(origin, destination, direction) => {
          this.setState({
            currentSlide: destination.index
          });
          //console.log("onLeave event", { origin, destination, direction });
          //     if(destination.index === 1) {
          //         this.slideAnimation
          //         .fromTo('.in-slide', 1, {x:0},{x:200, ease: Power1.inOut}, '+=1').play()
          //     }
          //     if(destination.index === 2) {
          //       this.slideAnimation
          //       .fromTo('.in-slide-1', 1, {x:0},{x:200, ease: Power1.inOut}, '+=1').play()
          //     }
          //   if(destination.index === 3) {
          //     this.slideAnimation
          //     .fromTo('.in-slide-2', 1, {x:0},{x:200, ease: Power1.inOut}, '+=1').play()
          //   }
          // if(destination.index === 4) {
          //   this.slideAnimation
          //   .fromTo('.in-slide-3', 1, {x:0},{x:200, ease: Power1.inOut}, '+=1').play()
          //   }
        }}
        render={({ state, fullpageApi }) => {
          console.log('render prop change', state, fullpageApi); // eslint-disable-line no-console

          return (
            <div>
              <Banner ref={this.banner} />
              <HomeCarousel activeSlide={this.state.currentSlide} />
              <Footer />
            </div>
          );
        }}
      />
    );
  }

  render() {
    return (
      <PageAnimWrapper>
        <Head
          title="new react ssr home page"
          description="home page description"
          content="home page content"
        />
        <div className="home-page page-wrapper">
          {this.fullpageWrapper()}
          {/* <ReactFullpage scrollingSpeed = {1000}
        render={() => {
          <ReactFullpage.Wrapper>
            <Banner ref={this.banner}/>
            <HomeCarousel />
          </ReactFullpage.Wrapper>
            }}
          /> */}
        </div>
      </PageAnimWrapper>
    );
  }
}

// const Home = () => {
//   return (

//   );
// };

export default Home;
