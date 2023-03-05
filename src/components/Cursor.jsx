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
            height:cursorsize,
            width: cursorsize,
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
            x: m_p.x - (cursorsize/2),
            y: m_p.y - (cursorsize/2),
            transition: { type: 'spring', stiffness: 1000, damping: 40 },
            backgroundColor: "transparent",
            border: "1px solid black",
            height:cursorsize,
            width: cursorsize,
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
        drag: {
            x: m_p.x - (cursorsize3/2),
            y: m_p.y - (cursorsize3/2),
            transition: { type: 'spring', stiffness: 350, damping: 40 },
            backgroundColor: "transparent",
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

    
    <StyledCursor drag={cursorVariant!=="drag"} cursorsize={cursorsize} variants={variants} animate={cursorVariant}></StyledCursor>

  )
}

const StyledCursor = styled(motion.div)`
    pointer-events: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    background-color: ${props => props.drag ? '#000' : 'transparent'};
    &:before, &:after {
        content: '';
        display: ${props => props.drag ? 'none' : 'block'};
        position: absolute;
        background-color: #fff;
        height: 30px;
        width: 2px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    &:before {
        transform: translate(-50%, -50%) rotate(90deg);
    }
`;




export default Cursor
