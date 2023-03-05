import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styled from "styled-components";
import MagicStars from "../components/Magic";
import { useInView } from "react-intersection-observer";
const transition = { duration: .6, ease: [0, 0.13, 0.23, 1] };


const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const main = {
  exit: {
    opacity: 0,
    scale:0,
    y: -300,
    transition: { duration: .5},
  }
}
const Model = ({ imageDetails, setCursorVariant }) => {
  // const { scrollYProgress } = useViewportScroll();

  
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);
  const {scrollYProgress} = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 1], [1,.3])
  const opacity2 = useTransform(scrollYProgress, [0, 1], [0,1])
  
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .1});
  return (
    <StyledModel
      onAnimationComplete={() => setCanScroll(true)}
      variants={main}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              
            </motion.div>
            <motion.div  className='model' style={{x:x, opacity:opacity}}>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>p</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>k</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 450 : 130,
                  transition: { delay: 0.5, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    onMouseEnter={()=>setCursorVariant("image")} onMouseLeave={()=>setCursorVariant("default")}
                    src={require("../images/3.jpg")}
                    alt='an image'
                    style={{  }}
                    initial={{ scale: 1.1 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -150 : -40,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <motion.div  
          style={{opacity: opacity2, y:y}} className='row'
          
          >
            <motion.div 
            ref={ref}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 75, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            onMouseEnter={()=>setCursorVariant("text")} onMouseLeave={()=>setCursorVariant("default")} >
            <MagicStars  onMouseEnter={()=>setCursorVariant("text")} onMouseLeave={()=>setCursorVariant("default")}/>
            </motion.div>
            <motion.p 
            ref={ref}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 75, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            // viewport={{ once: true }}
            className="Text"  onMouseEnter={()=>setCursorVariant("text")} onMouseLeave={()=>setCursorVariant("default")}>
            Hi there! My name is Sophia, and I'm thrilled to share a little bit about myself with you. I was born in Ukraine but been living for a while in Austria, specifically Vienna. I'm currently 20 years old, and I have a big dream of creating a charity organization to help people in need. <br /> <br />

I've always been a very empathetic and compassionate person, and I truly believe that small acts of kindness can make a big difference in someone's life. I've seen firsthand the positive impact that charitable organizations can have on people, and I want to be a part of that. My ultimate goal is to create an organization that can make a real, tangible difference in the lives of those who need it most. <br /> <br />

Aside from my philanthropic aspirations, I'm also a web developer and designer. I love the challenge of creating beautiful and functional websites that help people achieve their goals online. It's a great way for me to combine my technical skills with my desire to make a difference in the world. <br /> <br />

When I'm not working on my projects, I love to explore new cultures and try new foods. Traveling is one of my favorite things to do, as it allows me to gain a deeper understanding of the world and the people who inhabit it. <br />

I'm excited to see where my journey takes me and to make a positive impact in the world. Thank you for taking the time to read my bio!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </StyledModel>
  );
};

export default Model;





const StyledModel = styled(motion.div)`
  overflow: hidden;
  
    .container {
        .top-row {
            height: 50vh;
            width: 100%;
            align-items: flex-end;

            .top {
                padding-bottom: 40px;

                .details {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .location {
                        span:nth-child(2) {
                            margin-left: 16px;
                        }
                    }

                    .mua {
                        text-transform: uppercase;
                    }
                }

                .model {
                    overflow: hidden;

                    .first {
                        margin-right: 72px;
                    }

                    span {
                        display: inline-block;
                        position: relative;
                        font-weight: 100;
                        font-size: 144px;

                        @media (max-width: 1440px) {
                            font-size: 38px;
                        }
                    }
                }
            }
        }

        .bottom-row {
            height: 50vh;
            position: relative;

            .bottom {
                height: 100%;
                width: 100%;

                .thumbnail-single {
                    width: 100%;
                    height: 800px;
                    margin: 0 auto;
                    overflow: hidden;
                    position: absolute;
                    left: 0;
                    right: 0;

                    .frame-single {
                        img {
                            position: absolute;
                            width: 100%;
                        }
                    }
                }
            }

            .scroll-for-more {
                position: absolute;
                bottom: 200px;
                left: 200px;
                z-index: 20;

                .icon {
                    svg {
                        height: auto;
                        width: 28px;
                    }
                }

                .text {
                    margin-top: 8px;
                    color: $white;
                    text-transform: uppercase;
                }
            }
        }
    }

.detailed-information {
    margin-top: 100px;
    height: 600px;

    .container {
        .row {
            justify-content: space-between;
            align-items: flex-start;

            h2 {
                font-size: 28px;
            }

            p {
                font-size: 16;
                line-height: 28px;
                font-weight: 400;
                width: 800px;
            }
        }
    }
}
`