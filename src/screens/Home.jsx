import  React, {useState} from "react";
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";
import LettersAnimation from "../components/Code";
const transition = { duration: .6, ease: [0, 0.13, 0.23, 1] };

const imageAnim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {...transition, duration:.6}
  },
  exit: {
    opacity: 0,
    transition: {...transition, duration:.2}

  }
}
const Home = ({ imageDetails, image , setCursorVariant}) => {
  const [t, setT] = useState(true)

  return(
  <>
    <StyledHome>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/`} onMouseEnter={()=>{setCursorVariant("image") 
              setT(false)}} onMouseLeave={()=>{setCursorVariant("default")
              setT(true)
              }}>
                  <ProgressiveImage 
                    src={require("../images/3.jpg")}
                    placeholder={require("../images/3.jpg")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Yasmeen Tariq'
                        whileHover={{ scale: 1.1 }}
                        variants={imageAnim}
                        initial="initial"
                        animate="animate"
                        exit= {t ? "exit" : null}
                        // transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={ { opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title' onMouseEnter={()=>setCursorVariant("image")} onMouseLeave={()=>setCursorVariant("default")}>Sophie Honcharyck</div>
              <div className='location' onMouseEnter={()=>setCursorVariant("image")} onMouseLeave={()=>setCursorVariant("default")}>
                <LettersAnimation text={28.538336}/>
                <LettersAnimation text={12.1231}/>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </StyledHome>
  </>
  )

}



const StyledHome = styled.main`

    .container {
        position: relative;

        .row {
            height: 100vh;
            align-items: center;

            .image-container {
                position: relative;

                .thumbnail {
                    overflow: hidden;
                    position: relative;

                    .frame {
                        img {
                            width: 100%;
                        }
                    }
                }

                .information {
                    position: absolute;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 20px;
                    text-transform: uppercase;

                    .location {
                        display: flex;
                        gap: 15px;
                    }
                }
            }
        }
    }
`

export default Home;
