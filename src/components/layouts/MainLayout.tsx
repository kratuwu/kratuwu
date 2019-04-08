import React, { SFC } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import styled from "styled-components";
import { ContentRef } from "../../types";

const ContentWrapper = styled.div`
  margin-top: 60px;
  padding: 0px 24px;
  @media (min-width: 700px) {
    padding: 0px;
  }
`;

type MainLayoutProps = {
  contentRefs: ContentRef[];
};

const MainLayout: SFC<MainLayoutProps> = ({ children, contentRefs }) => (
  <div>
    <Header>
      <Navigation contentRefs={contentRefs} />
    </Header>
    <ContentWrapper children={children} />
    <Footer />
  </div>
);

export default MainLayout;
