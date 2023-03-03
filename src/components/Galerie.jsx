import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import pic1 from "../images/3.jpg"
import pic2 from "../images/4.jpeg"
import pic3 from "../images/5.jpeg"

import { Link } from 'react-router-dom'
const GalerieAnim = {
    initial: {
        scale: 0,
        opacity: 0,
        
    },
    animate: {
        scale: 1,
        opacity: 1,
        
        transition: {
            duration: 1,
            delay: 1.3,
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        
        transition: {
            duration: 1,
        }
    }
}

const Galerie = ({setCursorVariant}) => {
    const [image, setImage] = useState(null)
    const [m_p, setM_p] = useState({
        x: window.innerWidth ,
        y: window.innerHeight,
      });
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
    const cursorsize = 0
    const [hover, setHover] = useState("noUse")
    const variants = () => {
        if (!imgRef) {
          return {
            noUse: {
              opacity: 0,
              scale: 0,
              x: m_p.x,
              y: m_p.y,
            },
            default: {
                scale: 1,
              x: m_p.x,
              y: m_p.y,
              transition: { type: "spring", stiffness: 2000, damping: 330 },
            },
          };
        } else {
          const { x, y, width, height } = imgRef.current.getBoundingClientRect();
          return {
            noUse: {
              opacity: 0,
              scale: 0,
              x: m_p.x,
              y: m_p.y,
            },
            default: {
              scale: 1,
              x: m_p.x * .2 + x - (imgRef===imgRef3 ? 220 : 100),
              y: m_p.y * .4 + y  - (imgRef===imgRef3 ? 120 : 50),
              transition: { type: "spring", stiffness: 300, damping: 30 },
            },
          };
        }
      };
      




    const [imgRef, setImgRef] = useState(null)
    const imgRef1 = useRef(null)
    const imgRef2 = useRef(null)
    const imgRef3 = useRef(null)
    const [navigating, setNavigating] = useState(false)

  return (
    <>
        <StyledGalerie
    variants={GalerieAnim}
    initial="initial"
    animate="animate"
    exit="exit"
    >
    <div className='item'>
        <div className='text-line'>
            <Link to={"/me/1"}
            onMouseEnter={()=>{
                setCursorVariant("ancher")
                setHover("default")
                setImage(pic1)
                setImgRef(imgRef1)
            }}
            onMouseLeave={()=>{
                setCursorVariant("default")
                setHover("noUse")
                setImage(null)
                setImgRef(null)

            }}
            onClick={()=>setNavigating(true)}
            >48˚ 11´ 8.280“N</Link>
            <div className='cont'>
                <div ref={imgRef1} className='image'>
                    <img src={pic1} alt="pic1" />
                </div>
                <div className="line">
                </div>
            </div>
        </div>
    </div>



    <div className='item2'>
        <div className='text-line'>
        <div className="line2"></div>
            <Link to={"/me/2"}  
            onMouseEnter={()=>{
                setCursorVariant("ancher")
                setHover("default")
                setImage(pic2)
                setImgRef(imgRef2)
            }}
            onMouseLeave={()=>{
                setCursorVariant("default")
                setHover("noUse")
                setImage(null)
                setImgRef(null)

            }}
            onClick={()=>setNavigating(true)}

            >48˚ 11´ 8.280“N</Link>
            <div className='cont'>
                
                <div ref={imgRef2} className='image'>
                    <img src={pic2} alt="pic1" />
                </div>
                <div className="line"></div>
            </div>
        </div>
    </div>



    <div className='item3'>
        <div className='text-line'>
        <div className='cont'>
                
                <div ref={imgRef3} className='image'>
                    <img src={pic3} alt="pic1" />
                </div>
                <div className="line"></div>
            </div>
            <Link to={"/me/3"}  
            onMouseEnter={()=>{
                setCursorVariant("ancher")
                setHover("default")
                setImage(pic3)
                setImgRef(imgRef3)
            }}
            onMouseLeave={()=>{
                setCursorVariant("default")
                setHover("noUse")
                setImage(null)
                setImgRef(null)

            }}
            onClick={()=>setNavigating(true)}

            >48˚ 11´ 8.280“N</Link>
            <div className="line2"></div>
            
        </div>
    </div>
    
    
        
    </StyledGalerie>
    {
        !navigating &&
        <StyledFM variants={variants()} animate={hover}>
        <div className='image-cont'>
            <img src={image}  />
        </div>
    </StyledFM>}
</>

  )
}

const StyledFM = styled(motion.div)`
    pointer-events: none;
    width: 400px;
    width: 400px;
    border-radius: 50%;
    position: fixed;
    top: -30%;
    left: -400px;
    z-index: 5;
    .image-cont{ 
        top: 0;
        right: -3rem;
        width: 400px;
        margin: 0 76%;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`


const StyledGalerie = styled(motion.div)`
    padding: 3rem;
    position: fixed;
    width: 80%;
    height: 80vh;
    top: 20vh;
    left: 10%;
    /* background-color: white; */
    transform-origin: center;
    a {
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 60px;
  line-height: 2.3rem;
  position: relative;
  text-fill-color: black;
  -webkit-text-fill-color: black;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
  transition: all .4s ease-in-out;
  
  &:hover {
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
  }
}




    .item{
        padding: 1rem;
        width: 100%;
        position: relative;
        .cont{
            position: relative;
            flex: 1;
        }
        .text-line{
            display: flex;
            align-items: flex-end;
            .line{
                position: relative;
                flex: 1;
                height: 1.5px;
                background-color: black;
                margin: 0 10px;
                &::before{
                    content: "";
                    position: absolute;
                    left: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
                &::after{
                    content: "";
                    position: absolute;
                    right: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
            }
        }

        

        .image{ 
                top: 0;
                right: -3rem;
                width: 130px;
                margin: 0 76%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
    }
    .item2{
        padding: 1rem;
        width: 100%;
        position: relative;
        .cont{
            position: relative;
            flex: 1;
        }
        .text-line{
            display: flex;
            align-items: flex-end;
            .line{
                position: relative;
                flex: 1;
                height: 1.5px;
                background-color: black;
                margin: 0 10px;
                &::before{
                    content: "";
                    position: absolute;
                    left: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
                &::after{
                    content: "";
                    position: absolute;
                    right: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
            }
            .line2{
                position: relative;
                width: 10rem;
                height: 1.5px;
                /* flex: 2 */
                background-color: black;
                margin: 0 10px;
                &::before{
                    content: "";
                    position: absolute;
                    left: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
                &::after{
                    content: "";
                    position: absolute;
                    right: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
            }
        }

        

        .image{ 
                top: 0;
                right: -3rem;
                width: 130px;
                margin: 0 30%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
    }
    .item3{
        padding: 1rem;
        width: 100%;
        position: relative;
        .cont{
            position: relative;
            flex: 1;
        }
        .text-line{
            display: flex;
            align-items: flex-end;
            .line{
                position: relative;
                flex: 1;
                height: 1.5px;
                background-color: black;
                margin: 0 10px;
                &::before{
                    content: "";
                    position: absolute;
                    left: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
                &::after{
                    content: "";
                    position: absolute;
                    right: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
            }
            .line2{
                position: relative;
                width: 13rem;
                height: 1.5px;
                /* flex: 2 */
                background-color: black;
                margin: 0 10px;
                &::before{
                    content: "";
                    position: absolute;
                    left: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
                &::after{
                    content: "";
                    position: absolute;
                    right: -2px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: black;
                    border-radius: 50%;
                }
            }
        }

        

        .image{ 
                top: 0;
                right: -3rem;
                width: 130px;
                margin: 0 20%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
    }
    
    

`

export default Galerie