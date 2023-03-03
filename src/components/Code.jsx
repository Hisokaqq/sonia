import React, { useState } from 'react';
import styled from 'styled-components';
const LettersAnimation = ({text}) => {
  const [intervalID, setIntervalID] = useState(null);

  const letters = ".-1234567890";

  const handleMouseOver = event => {  
    let iteration = 0;

    clearInterval(intervalID);

    setIntervalID(setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 12)];
        })
        .join("");

      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(intervalID);
      }

      iteration += 1 / 3;
    }, 40));
  }

  const handleMouseOut = event => {
    clearInterval(intervalID);
    event.target.innerText = event.target.dataset.value;
  }

  return (
    <StyledAnim

      data-value={text}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
     {text}
    </StyledAnim>
  );
}

export default LettersAnimation;

const StyledAnim = styled.h1`
   
    
    all: unset;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 700;
    width: 4.5rem;
    text-align: end;
    color: black;
    margin-right: .1rem;
`