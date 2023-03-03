import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const Cursor = ({cursorVariant , setCursorVariant}) => {
    const cursorsize = 30
    const cursorsize2 = 70
    const cursorsize3 = 20
    const [m_p, setM_p] = useState({
        x: window.innerWidth / 2,
        y: -20,
      });
    const variants = {
        noUse: {
            opacity: 0
        },
        default: {
            x: m_p.x - (cursorsize/2),
            y: m_p.y - (cursorsize/2),
            transition: { type: 'spring', stiffness: 1000, damping: 40 },
            backgroundColor: "#000",
        },
        text: {
            x: m_p.x - (cursorsize2/2),
            y: m_p.y - (cursorsize2/2),
            transition: { type: 'spring', stiffness: 350, damping: 40 },
            // backgroundColor: "#EAD9C5",
            height:cursorsize2,
            width: cursorsize2,
            backgroundColor: "transparent",
            border: "1px solid black",
            // mixBlendMode: "difference"
        },
        ancher: {
            x: m_p.x - (cursorsize2/2),
            y: m_p.y - (cursorsize2/2),
            transition: { type: 'spring', stiffness: 1000, damping: 40 },
            backgroundColor: "#000",
            height:cursorsize2,
            width: cursorsize2,
        },
        image: {
            x: m_p.x - (cursorsize3/2),
            y: m_p.y - (cursorsize3/2),
            transition: { type: 'spring', stiffness: 1000, damping: 40 },
            backgroundColor: "transparent",
            border: "1px solid white",
            height:cursorsize3,
            width: cursorsize3,
        },
    }
    useEffect(()=>{
        const mouseMove = (e) => {
            setM_p({
                x: e.clientX,
                y: e.clientY
            })
            
        }
        window.addEventListener("mousemove", mouseMove)
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    },[])

  return (
    <StyledCursor cursorsize={cursorsize} variants={variants} animate={cursorVariant}>
        
    </StyledCursor>
  )
}

const StyledCursor = styled(motion.div)`
    pointer-events: none;
    background-color: #000;
    height: ${props => props.cursorsize}px;
    width: ${props => props.cursorsize}px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    
`

export default Cursor
