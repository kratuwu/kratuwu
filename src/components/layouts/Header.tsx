import React, { SFC } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  top: 0;
  left: 0;
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

const Brand = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
`;

const Header: SFC<{}> = ({ children }: any) => {
  return (
    <HeaderStyled>
      <HeaderWraper>
        <Brand>Kratuwu</Brand>
        {children}
      </HeaderWraper>
    </HeaderStyled>
  );
};

export default Header;
