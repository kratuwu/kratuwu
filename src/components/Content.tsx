import React, { SFC } from "react";
import styled from "styled-components";

const ContentStyled = styled.div`
  top: 60px;
  padding: 0px 24px;
  @media (min-width: 700px) {
    padding: 0px;
  }
  min-height: calc(100vh - 120px);
`;

const Content: SFC = ({ children }) => {
  return (
    <ContentStyled>
      <div>content</div>
      {children}
    </ContentStyled>
  );
};

export default Content;
