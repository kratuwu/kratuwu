import React, { createRef } from 'react';
// import logo from './logo.svg';
// import './App.css';

import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/contents/Home";
import Work from "./components/contents/Work";
import Contact from "./components/contents/Contact";
import { ContentRef } from "../types";
import { GlobalStyle } from "./styles";

const App: React.FC = () => {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const homeRef = createRef();
  const workRef = createRef();
  const contactRef = createRef();

  const contentRefs: ContentRef[] = [
    { name: "Home", ref: homeRef, icon: ["fas", "home"] },
    { name: "Work", ref: workRef, icon: ["fas", "code"] },
    { name: "Contact", ref: contactRef, icon: ["fas", "id-card"] }
  ];

  return (
    <MainLayout contentRefs={contentRefs}>
      <GlobalStyle />
      <Home forwardedRef={homeRef} />
      <Work forwardedRef={workRef} />
      <Contact forwardedRef={contactRef} />
    </MainLayout>
  );
}

export default App;
