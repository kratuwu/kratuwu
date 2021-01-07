import React, { SFC, useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import Navigation from "./Navigation";
import Hamburger from "../Hamburger";
import Footer from "./Footer";
import { ContentRef } from "../../../types";
import { color } from "../../styles/colors";
// import SideNavigation from "./SideNavigation";

const ContentWrapper = styled.div`
  margin-top: 60px;
`;


const Brand = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  color: ${color.primary}
`;
type MainLayoutProps = {
  contentRefs: ContentRef[];
};

const MainLayout: SFC<MainLayoutProps> = ({ children, contentRefs }) => {
  const [navOpen, toggleNav] = useState(false);
  
  return(
    <div>
      <Header>
          <Brand>Kratuwu</Brand>
          <Hamburger onClick={()=>toggleNav(!navOpen)}/>
          <Navigation contentRefs={contentRefs} open = {navOpen}/>
          {/* <SideNavigation/> */}
      </Header>
      {/* <Hamburger onClick={()=>toggleNav(!navOpen)}/> */}
      {/* <SideNavigation contentRefs={contentRefs} open = {navOpen}/> */}
      {/* <SideNavigation contentRefs={contentRefs}/> */}
      <ContentWrapper children={children} />
      {/* <Footer /> */}
    </div>
  )
};

export default MainLayout;
