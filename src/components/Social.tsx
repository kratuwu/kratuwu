import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color } from "../styles/colors";

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  z-index: 1;
  padding-inline-start: unset;
`;

const SocialLink = styled.a`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialItem = styled.li`
  pointer-events: none;
  border-radius: 50%;
  border: 1px solid ${color.border};
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.25s;
  background-color: white;
  z-index: 9;
  ${SocialLink}:hover & {
    background: ${color.text};
  }
`;
const Icon = styled(FontAwesomeIcon)`
  pointer-events: none;
  color: ${color.primary};
  transition: color 0.25s;
  ${SocialLink}:hover & {
    color: #ffffff;
  }
`;

const Social = () => {
  return (
    <SocialWrapper>
      <SocialLink href="https://linkedin.com/in/krittawat-sup" target="_blank">
        <SocialItem>
          <Icon icon={["fab", "linkedin-in"]} />
        </SocialItem>
      </SocialLink>
      <SocialLink href="https://github.com/kratuwu" target="_blank">
        <SocialItem>
          <Icon icon={["fab", "github"]} />
        </SocialItem>
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/krittawat.suphankomut"
        target="_blank"
      >
        <SocialItem>
          <Icon icon={["fab", "facebook-f"]} />
        </SocialItem>
      </SocialLink>
    </SocialWrapper>
  );
};

export default Social;
