import React, { SFC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  background: white;
  position: fixed;
  line-height: 60px;
  width: 100%;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
`;

const HeaderWraper = styled.nav`
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;


const Header: SFC<{}> = ({ children }: any) => {
  return (
    <HeaderStyled>
      <HeaderWraper>
        {children}
      </HeaderWraper>
    </HeaderStyled>
  );
};

export default Header;
