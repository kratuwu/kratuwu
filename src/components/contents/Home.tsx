import React, { forwardRef, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const HomeWrapper = styled.div`
  height: calc(100vh - 60px);
  background-color: rgba(0,0,0,.65);
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin: auto;
  display: flex;
`
const blinkCaret  = keyframes`
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

  const typer =(n: number = 0) => {
    if (n < (textTitle.length)) {
      n++;
      setTextTyper(textTitle.substring(0, n));
      setTimeout( () => { typer(n) }, 80 );
    }
  }

  useEffect(() => { typer(); }, []);
  
  return (
    <HomeWrapper ref={forwardedRef}>
      <HomeContainer >
        <TitleStyled>
          <span>{textTyper}</span>
          <Caret>|</Caret>
        </TitleStyled>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default forwardRef((props, ref) => <Home {...props} forwardedRef={ref} />);
