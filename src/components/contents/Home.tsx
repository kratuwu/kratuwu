import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Social from "../Social"
const HomeWrapper = styled.div`
  min-height: calc(100vh - 60px);
  background-color: rgba(0,0,0,.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  padding: 0 15px;
  @media(min-width: 640px){
    padding: unset;
  }
`

const blinkCaret = keyframes`
  from, to { color: transparent }
  50% { color: white; }
`
const Caret = styled.span`
  animation: ${blinkCaret} .75s step-end infinite;
`
const TitleStyled = styled.h1`
  font-size: 32px;
  @media(min-width: 640px){
    font-size: 64px;
  }
`
const textTitle: string = "Welcome to Kratuwu.";

const Home = ({ forwardedRef }: any) => {
  const [textTyper, setTextTyper] = useState('');

  const typer = (n: number = 0) => {
    if (n < (textTitle.length)) {
      n++;
      setTextTyper(textTitle.substring(0, n));
      setTimeout(() => { typer(n) }, 80);
    }
  }

  useEffect(() => { typer(); }, []);

  return (
    <HomeWrapper ref={forwardedRef}>
      <TitleStyled>
        <span>{textTyper}</span>
        <Caret>|</Caret>
      </TitleStyled>
      <p>Hi! I'm Krittawat Suphankomut, I am a software developer from Thailand.</p>
      <Social />
    </HomeWrapper>
  );
};

export default Home;
