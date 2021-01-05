import React, { SFC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  background: black;
  position: fixed;
  line-height: 60px;
  width: 100%;
  box-shadow: 0 5px 10px -5px rgba(255, 255, 255, 0.5);
`;

const HeaderWraper = styled.nav`
  color: white;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const Header: SFC<{}> = ({ children }: any) => {
  return (
    <HeaderStyled>
      <HeaderWraper>{children}</HeaderWraper>
    </HeaderStyled>
  );
};

export default Header;
