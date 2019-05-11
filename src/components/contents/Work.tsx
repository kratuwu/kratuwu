import React from "react";
import styled from "styled-components";
import WorkItems from "../workItems/WorkItems";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 15px;
  @media(min-width: 640px){
    padding: unset;
    margin: 0 60px;
  }
`

const AboutTitle = styled.h1`
`
const About = ({ forwardedRef }: any) => {
  return (
    <AboutWrapper ref={forwardedRef}>
      <AboutTitle>Work</AboutTitle>
      <WorkItems/>
    </AboutWrapper>
  )
};

export default About;
