import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: '100vh'
    //height: '0'
  },
  in: {
    opacity: 1,
    y: '0'
    //height: '100vh'
  },
  out: {
    opacity: 0,
    y: '-100vh',
    // height: '0',
    backgroundColor: 'rgba(0,0,0,1)'
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 1.5
};

const pageStyle = {
  // position: "absolute",
  width: '100%'
  // backgroundColor: '#ccc'
};

const PageAnimWrapper = props => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {props.children}
    </motion.div>
  );
};

export default PageAnimWrapper;
