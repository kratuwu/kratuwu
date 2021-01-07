import React, { SFC } from "react";
import styled from "styled-components";
import { ContentRef } from "../../../types";
import { color } from "../../styles/colors";

type NavigationProps = {
  contentRefs: ContentRef[];
  open: boolean;
};

const NavigationWrapper = styled.div<{ open: boolean }>`
  flex-basis: 100%;
  max-height: ${(props: any) => (props.open ? "245px" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: white;
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
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    flex-direction: unset;
  }
`;

const NavigationItem = styled.li`
  &:last-child {
    border-bottom: 1px solid ${color.border};
  }
  border-top: 1px solid ${color.border};
  color: ${color.text};

  text-align: center;
  list-style: none;
  padding: 0 10px;
  cursor: pointer;
  @media (min-width: 768px) {
    border: none !important;
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
