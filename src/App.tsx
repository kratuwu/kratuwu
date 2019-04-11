import React, { createRef } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/contents/Home";
import About from "./components/contents/About";
import Contact from "./components/contents/Contact";
import { ContentRef } from "./types";
import { GlobalStyle } from "./styles";
const App = () => {
  const homeRef = createRef();
  const aboutRef = createRef();
  const contactRef = createRef();

  const contentRefs: ContentRef[] = [
    { name: "Home", ref: homeRef },
    { name: "About", ref: aboutRef },
    { name: "Contact", ref: contactRef }
  ];

  return (
    <MainLayout contentRefs={contentRefs}>
      <GlobalStyle />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </MainLayout>
  );
};

export default App;
