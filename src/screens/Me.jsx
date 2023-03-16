import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import pic1 from "../images/3.jpg"
import pic2 from "../images/4.jpeg"
import pic3 from "../images/5.jpeg"
import { useParams } from 'react-router-dom'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
const iconAnim = {
  initial:{
    rotate:0,
    opacity: 0,
  },
  animate:{
    rotate: 360*2,
    opacity: 1,
    transition:{
      duration: .3,
      delay: 1,
    }
  },
  exit:{
    rotate:-360*2,
    opacity: 0,
    transition:{
      duration: .3,
        
    }
  }
}
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
            delay: .3
        }
    }
}
const Me = ({setCursorVariant}) => {
  const parentRef = useRef()

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
    ref={parentRef}
    >
      <StyledClose to="/beautifulMe" onMouseEnter={()=>setCursorVariant("ancher")} onMouseLeave={()=>setCursorVariant("default")} variants={iconAnim} >
        <FontAwesomeIcon 
        icon={faTimes} 
        className="icon"
        initial="initial"
        animate="animate"
        exit="exit"
        />
      </StyledClose>
      <motion.div  className="containerr" 
        drag
        onMouseEnter={()=>{
          setCursorVariant("drag")
      }}
      onMouseLeave={()=>{
          setCursorVariant("default")
      }}
        whileDrag={{scale:1.5}}

        dragConstraints={parentRef}
        dragSnapToOrigin
        whileHover={{scale:1.5}}
      >
        <motion.img 
        variants={ImgAnim} 
        src={imageSrc}
        
        />
      </motion.div>
    </StyledMe>
  )
}
const MotionLink = motion(Link);

const StyledClose = styled(MotionLink)`
  position: fixed;
  top: 1rem;
  right: 1.3rem;
  .icon{
    font-size: 3rem;
    
  }
`

const StyledMe = styled(motion.div)`
    all: unset;
    overflow: hidden;
   display: grid;
    place-items:  center;
    height: 100vh;
  .containerr {
    position: relative;
    width: 40rem;
    height: 40rem;
    /* position: absolute;
    top: 10rem;
    left: 40rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 704px) {
                    width: 20rem;
                    height: 20rem;
                    }
;

    img {
      width: 40rem;
      height: 40rem;
      object-fit: contain;
      pointer-events: none;
      @media (max-width: 704px) {
                    width: 20rem;
                    height: 20rem;
                    }

    }
  }
`;

export default Me
