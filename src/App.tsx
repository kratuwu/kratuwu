import React, { createRef } from "react";
// import logo from './logo.svg';
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/contents/Home";
// import Work from "./components/contents/Work";
import Contact from "./components/contents/Contact";
import { ContentRef } from "../types";
import { GlobalStyle } from "./styles";
import { Experience } from "./components/contents/Experience";

const App: React.FC = () => {
  const homeRef = createRef();
  // const workRef = createRef();
  const experienceRef = createRef();
  const contactRef = createRef();
  const contentRefs: ContentRef[] = [
    { name: "Home", ref: homeRef, icon: ["fas", "home"] },
    // { name: "Work", ref: workRef, icon: ["fas", "code"] },
    { name: "Experience", ref: experienceRef, icon: ["fas", "code"] },
    { name: "Contact", ref: contactRef, icon: ["fas", "id-card"] },
  ];

  return (
    <MainLayout contentRefs={contentRefs}>
      <GlobalStyle />
      <Home forwardedRef={homeRef} />

      {/* <Work forwardedRef={workRef} /> */}
      <Experience forwardedRef={experienceRef} />
      <Contact forwardedRef={contactRef} />
    </MainLayout>
  );
};

export default App;
