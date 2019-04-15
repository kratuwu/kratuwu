import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

const HomeWrapper = styled.div`
  height: 100vh;
  background-color: rgba(0,0,0,.65);
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin: auto;
`
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret  = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`
const TypeWriter = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .1em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    ${typing} 1s steps(20, end),
    ${blinkCaret} .75s step-end infinite;
`

const Home = ({ forwardedRef }: any) => {
  return (
    <HomeWrapper ref={forwardedRef}>
      <HomeContainer >
        <TypeWriter>Welcome to Kratuwu</TypeWriter>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default forwardRef((props, ref) => <Home forwardedRef={ref} />);
