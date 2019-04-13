import React, { SFC } from "react";
import styled from "styled-components";
import { ContentRef } from "../../types";

type NavigationProps = {
  contentRefs: ContentRef[];
  open: boolean;
};
const NavigationWrapper = styled.div<{open: boolean}>`
    flex-basis: 100%;
    transform: ${props=> props.open? 'scaleY(1)': 'scaleY(0)'};    
    transform-origin: top;
    transition: transform 0.26s ease;
    background: black;
    
  @media (min-width: 768px) {
    background: white;
    margin-left: auto;
    transform: none;
    transition: none;
    flex-basis: 0;
    display: block;
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
  list-style: none;
  padding: 0 10px;
  cursor: pointer;
`;

const scrollToRef = (ref: any) => {
  window.scrollTo(0, ref.current.offsetTop - 60);
};

const Navigation: SFC<NavigationProps> = ({ contentRefs, open }) => (
  <NavigationWrapper open={open}>
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
);

export default Navigation;
