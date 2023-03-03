import React, { useEffect, useState } from 'react'
import {  motion } from 'framer-motion';
import styled from 'styled-components';
import Galerie from '../components/Galerie';

const firstBox = {
  visible: { y: [-1500, 0, 1500], transition: {
    duration: 1.3,}},
    exit: { y: [1500, 0, -1500], transition: { duration: 1,delay:1.3 } }
};

const secondBox = {
  visible: { y: [1500, 0, -1500], transition: {
    duration: 1.3,
    times: [0, 1,  ],}},
    exit: { y: [-1500, 0, 1500], transition: { duration: 1, delay:1.3 } }
};

const Photos = ({setCursorVariant}) => {
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <StyledPhotos
    onAnimationComplete={() => setCanScroll(true)}>
        
        {!canScroll && (
          <motion.div
            key="first-box"
            className="first-box box"
            variants={firstBox}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          />
        )}
      <motion.div
        key="second-box"
        className="second-box box"
        variants={secondBox}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      />
      {!canScroll && (
        <motion.div
          className="scroll-hint"
          animate={{ opacity: [0, 1, 0], transition: { repeat: Infinity } }}
        >
        </motion.div>
      )}
      <Galerie setCursorVariant={setCursorVariant}/>
    </StyledPhotos>
  );
};

const StyledPhotos = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  .box{
    position: absolute;
    width: 50%;
    height: 100vh;
    background-color: black;
    z-index: 200;
  }
  .second-box{
    right: 0;
  }
`
export default Photos