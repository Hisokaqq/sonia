import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components'
import igIcon from "../images/ig.png"

const StyledIf = styled(motion.div)`
  all: unset;
  position: fixed;
  top: 50%;
  left: -1rem;
  width: 12rem;
  height: 2rem;
  background-color: white;
  border-top-right-radius: .3rem;
  border-bottom-right-radius: .3rem;
  padding: .1rem;
  transform: translateY(-50%) rotate(-15deg);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  gap: .6rem;
  img{
    width: 2rem;
    pointer-events: none;
  }
  p{
    pointer-events: none;
  }
`

const Ig = ({setCursorVariant}) => {
  const control = useAnimation()
  const animationIntervalRef = useRef(null)

  useEffect(() => {
    animationIntervalRef.current = setInterval(() => {
      control.start({x: 0, rotate:-15})
      setTimeout(() => {
        control.start({x: "-100%", rotate:-15})
      }, 3000)
    }, 25000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => {
      clearInterval(animationIntervalRef.current)
    }
  }, [])

  const handleOnClick = () => {
    const a = document.createElement("a")
    a.href = "https://www.instagram.com/s.honchariuk/"
    a.target = "_blank"
    a.rel = "noopener noreferrer"
    a.click()
  }

  return (
    <StyledIf 
      onMouseEnter={()=>setCursorVariant("ancher")} 
      onMouseLeave={()=>setCursorVariant("default")}
      onClick={handleOnClick}
      animate={control}
      initial={{rotate:-15, x:"-100%"}}
    >
      <p>My Instagram</p>
      <img src={igIcon} alt="igIcon" />
    </StyledIf>
  )
}

export default Ig
