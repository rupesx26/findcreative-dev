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
    console.log(this.props);
    this.anchors = ['firstPage', 'secondPage', 'thirdPage'];
    this.fullpageWrapper = this.fullpageWrapper.bind(this);
    this.slideAnimation = new TimelineMax({ paused: true });
    this.state = {
      currentSlide: null,
      currentDirection: null
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
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
          return (
            <div>
              <Banner ref={this.banner} />
              <HomeCarousel
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
              />
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
        <div className="home-page page-wrapper">{this.fullpageWrapper()}</div>
      </PageAnimWrapper>
    );
  }
}

export default Home;
