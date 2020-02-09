import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 1.5
};

const pageStyle = {
  width: '100%'
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
