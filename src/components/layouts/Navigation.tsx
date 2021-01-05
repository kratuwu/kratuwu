import React, { SFC } from "react";
import styled from "styled-components";
import { ContentRef } from "../../../types";

type NavigationProps = {
  contentRefs: ContentRef[];
  open: boolean;
};

const NavigationWrapper = styled.div<{ open: boolean }>`
  flex-basis: 100%;
  background: black;
  max-height: ${(props: any) => (props.open ? "212px" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  box-shadow: 0 5px 10px -5px rgba(255, 255, 255, 0.5);
  z-index: 99;
  @media (min-width: 768px) {
    box-shadow: unset;
    max-height: unset;
    flex-basis: 0;
    overflow: unset;
  }
`;

const NavigationGroup = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    flex-direction: unset;
  }
`;

const NavigationItem = styled.li`
  &:not(:last-child) {
    box-shadow: 0 1px 8px -5px rgba(255, 255, 255, 1);
  }
  text-align: center;
  list-style: none;
  padding: 0 10px;
  cursor: pointer;
  @media (min-width: 768px) {
    box-shadow: none !important;
  }
`;

const scrollToRef = (ref: any) => {
  window.scrollTo({
    top: ref.current.offsetTop - 60,
    behavior: "smooth",
  });
};

const Navigation: SFC<NavigationProps> = ({ contentRefs, open }) => {
  return (
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
};

export default Navigation;
