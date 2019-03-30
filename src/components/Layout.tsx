import React from "react";
import { GlobalStyle } from "../styles/index";
const Layout:React.SFC<{}> = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
};

export default Layout;
