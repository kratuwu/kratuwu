import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  background: gray;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div>Header</div>
    </HeaderStyle>
  );
};

export default Header;
