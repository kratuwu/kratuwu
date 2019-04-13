import React, { SFC, createRef, useState, useEffect } from "react";
import styled from "styled-components";
import { ContentRef } from "../../types";

type NavigationProps = {
  contentRefs: ContentRef[];
  open: boolean;
};
const NavigationWrapper = styled.div<{open: boolean}>`
  flex-basis: 100%;
  background: black;
  max-height: ${props=> props.open?'212px':'0px'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    box-shadow: unset;
    max-height: unset;
    background: white;
    margin-left: auto;
    flex-basis: 0;
    overflow: unset;
  }
`

const NavigationGroup = styled.ul`
    flex-direction: column;
    color: white;
    padding: 0;
  @media (min-width: 768px) {
    display: flex;
    margin: 0;
    color: black;
    flex-direction: row;
  }
`;

const NavigationItem = styled.li`
  text-align: center;
  list-style: none;
  padding: 0 10px;
  cursor: pointer;
`;

const scrollToRef = (ref: any) => {
  window.scrollTo(0, ref.current.offsetTop - 60);
};

const Navigation: SFC<NavigationProps> = ({ contentRefs, open }) => {
  return(
  <NavigationWrapper open={open} >
    <NavigationGroup>
      {contentRefs.map((contentRef: ContentRef) => (
        <NavigationItem
          key={contentRef.name}
          onClick={() => scrollToRef(contentRef.ref)}
          children={contentRef.name}
        />
      ))}
    </NavigationGroup>
  </NavigationWrapper>
)};

export default Navigation;
