import React, { SFC } from "react";
import styled from "styled-components";
import { ContentRef } from "../../types";

type NavigationProps = {
  contentRefs: ContentRef[];
};

const NavigationWrapper = styled.div`
  background: white;
  margin-left: "auto";
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const NavigationGroup = styled.ul`
  display: flex;
  margin: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
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

const Navigation: SFC<NavigationProps> = ({ contentRefs }) => (
  <NavigationWrapper style={{ marginLeft: "auto" }}>
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
