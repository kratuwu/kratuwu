import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { color } from "../../styles/colors";
import Social from "../Social";
const HomeWrapper = styled.div`
  min-height: calc(100vh - 60px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: #ffffff;
  padding: 0 15px;
  @media (min-width: 640px) {
    padding: unset;
  }
`;

const blinkCaret = keyframes`
  from, to { background: transparent }
  50% { 
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-position: 100% 50%;
    -webkit-background-clip: text;
  }
`;
const Caret = styled.span`
  animation: ${blinkCaret} 0.75s step-end infinite;
  -webkit-text-fill-color: transparent;
`;
const TitleStyled = styled.h1`
  font-size: 32px;
  color: ${color.text};
  @media (min-width: 640px) {
    font-size: 64px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const textTitle: string = "Welcome to Kratuwu";

const Home = ({ forwardedRef }: any) => {
  const [textTyper, setTextTyper] = useState("");

  useEffect(() => {
    const typer = (n: number = 0) => {
      if (n < textTitle.length) {
        n++;
        setTextTyper(textTitle.substring(0, n));
        setTimeout(() => {
          typer(n);
        }, 80);
      }
    };
    typer();
  }, []);

  return (
    <HomeWrapper ref={forwardedRef}>
      <div>
        <TitleStyled>
          <div>
            <span>
              {textTyper}
              <Caret>|</Caret>
            </span>
          </div>
        </TitleStyled>
        <p style={{ color: color.secoundary }}>
          Hi! I'm Krittawat Suphankomut, I am a software developer from
          Thailand.
        </p>
      </div>
      <Social />
      <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
            <stop offset="5%" stopColor="#ff4b01" />
            <stop offset="35%" stopColor="#373b44" />
          </linearGradient>
          <path
            id="a"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="wave-paths">
          <use href="#a" x="0" />
          <use href="#a" x="50" y="3" />
          <use href="#a" x="100" y="5" />
          <use href="#a" x="150" y="7" />
        </g>
      </svg>
    </HomeWrapper>
  );
};

export default Home;
