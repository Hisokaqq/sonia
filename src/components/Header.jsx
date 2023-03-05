import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";





const Header = ({setCursorVariant}) => {
  const location = useLocation()
  const prevPath = localStorage.getItem('previousPathname') ? localStorage.getItem('previousPathname') : "";
  const [howTo, setHowTo] = useState(null) 
  useEffect(() => {
    const currentPathname = window.location.pathname;
    if(((prevPath==="/" && location.pathname==="/") ||(prevPath!=="/beautifulMe" && location.pathname==="/"))) setHowTo(1)
    else if(prevPath==="/model/" && location.pathname==="/beautifulMe") setHowTo(3)
    else if(location.pathname==="/beautifulMe") setHowTo(3)
    // else if(location.pathname==="/model/") setHowTo(2)
    // setSc(location.pathname.includes("/me/")||  (location.pathname=="/beautifulMe" && prevPath.includes("/me/")))

    localStorage.setItem('previousPathname', currentPathname);
  }, [location, howTo, prevPath]);

  const shouldAnimate = location.pathname === "/beautifulMe";
  const shouldAnimate2 = location.pathname === "/";
  const HeaderAnim = {
    initial: {
      y: -300,
      
    },
    initials: {
      x: 300,
      
    },
    animate:{
      y: 0,
      transition:{
        duration: 1,
        delay: !prevPath.includes("/me/") ? 0 : 1.6
      }
    },
    
    exit:{
      y: -300,
      transition:{
        duration: 3
      }
    },
   
  }
  const underl = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1,
    transition:{
      delay: howTo
    }
    },
    exit: {  scaleX: 0 }
  };
  return (
    <>
      {howTo &&
        <StyledHeader 
      variants={HeaderAnim}
      initial={"initial"}
      animate={(!location.pathname.includes("/me/")) ? "animate" : "exit"}
      exit={"exit"}
    >
      <div className='container'>
        <div className='row space-between'>
        <div className={`logo `} onMouseEnter={()=>setCursorVariant("ancher")} onMouseLeave={()=>setCursorVariant("default")}>
            <Link to='/'>@s.honchariuk</Link>
            <motion.div 
               className="underl" 
               variants={underl}
               initial="hidden"
               animate={shouldAnimate2 ? "visible" : "hidden"}
               exit="exit"
               transition={{ duration: 0.5 }}
            />
          </div>
          
          <div className={`logo `} onMouseEnter={()=>setCursorVariant("ancher")} onMouseLeave={()=>setCursorVariant("default")}>
            <Link to='/beautifulMe'>More Photos</Link>
            <motion.div 
              className="underl" 
              variants={underl}
              initial="hidden"
              animate={shouldAnimate  ? "visible" : "hidden"}
              exit="exit"
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </StyledHeader>}
    </>
  
  );
};

const StyledHeader = styled(motion.header)`
    a{
      padding: 1rem 1.5rem;
      z-index: 5;
    }
    font-size: 16px;
    position: fixed;
    z-index: 3;
    width: 100%;
    font-weight: "700";
    pointer-events: none;
    
    .underl{
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background: black;
    }
    .container {
      
      .row {
        height: 128px;
        overflow: hidden;
          

            

@keyframes slide-in {
  100% {
    transform: translateX(0);
  }
}
            .logo {
                position: relative;
                pointer-events: auto;
                

                img {
                    height: 25px;
                    margin-bottom: -3.8px;
                    margin-right: 5px;

                }

                .a {
                    color: $black;
                    text-decoration: none;
                    padding: 5px 10px;
        pointer-events: auto;

                }
                
            }

            .menu {
                cursor: pointer;
                border-radius: 100%;
                border: 1px solid $black;
                height: 80px;
                width: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.3s ease-in-out;

                &:hover {
                    color: $white;
                    background: $black;
                }
            }
        }
    }

`
export default Header;
