import React, { SFC, useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Hamburger from "../Hamburger";
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

const Brand = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
`;

const MainLayout: SFC<MainLayoutProps> = ({ children, contentRefs }) => {
  const [navOpen, toggleNav] = useState(false);

  return(
    <div>
      <Header>
          <Brand>Kratuwu</Brand>
          <Hamburger onClick={()=>toggleNav(!navOpen)}/>
          <Navigation contentRefs={contentRefs} open = {navOpen}/>
      </Header>
      <ContentWrapper children={children} />
      <Footer />
    </div>
  )
};

export default MainLayout;
