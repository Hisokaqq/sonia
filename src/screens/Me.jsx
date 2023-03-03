import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import pic1 from "../images/3.jpg"
import pic2 from "../images/4.jpeg"
import pic3 from "../images/5.jpeg"
import { useParams } from 'react-router-dom'

const ImgAnim = {
    initial: {
        scale: 2,
        opacity: 0,
        
    },
    animate: {
        scale: 1,
        opacity: 1,
        
        transition: {
            duration: 1,
            // delay: 1.3,
        }
    },
    exit: {
        scale: 2,
        opacity: 0,
        transition: {
            duration: 1,
        }
    }
}
const Me = () => {
  const { id } = useParams()
  let imageSrc = null

  if (id === '1') {
    imageSrc = pic1
  } else if (id === '2' ) {
    imageSrc = pic2
  }
  else{
    imageSrc = pic3

  }

  return (
    <StyledMe 
    initial="initial"
    animate="animate"
    exit="exit"
    >
      <motion.div className="container" >
        <motion.img variants={ImgAnim} src={imageSrc} alt="" />
      </motion.div>
    </StyledMe>
  )
}

const StyledMe = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .container {
    width: 40rem;
    height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

export default Me
