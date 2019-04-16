import React, { forwardRef } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
`

const AboutTitle = styled.h1`
  font-size: 32px;
  @media(min-width: 640px){
    font-size: 64px;
  }
`
const About = ({ forwardedRef }: any) => {
  return (
    <AboutWrapper ref={forwardedRef}>
      <AboutTitle>About</AboutTitle>
    </AboutWrapper>
  )
};

export default forwardRef((props, ref) => <About {...props} forwardedRef={ref} />);
