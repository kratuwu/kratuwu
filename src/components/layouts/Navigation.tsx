import React, { SFC } from "react";
import styled from "styled-components";
import { ContentRef } from "../../types";

type NavigationProps = {
  contentRefs: ContentRef[];
};

const NavigationWrapper = styled.div`
  margin-left: "auto";
`;

const NavigationGroup = styled.ul`
  display: flex;
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
