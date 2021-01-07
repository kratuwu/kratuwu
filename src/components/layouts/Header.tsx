import React, { SFC } from "react";
import styled from "styled-components";
import { color } from "../../styles/colors";

const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  background: white;
  position: fixed;
  line-height: 60px;
  width: 100%;
  border-bottom: 1px solid ${color.border};
  z-index: 9;
`;

const HeaderWraper = styled.nav`
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
