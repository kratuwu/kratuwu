import React, { SFC } from "react";
import { GlobalStyle } from "../styles/index";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout: SFC<{}> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
