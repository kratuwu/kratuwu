import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-inline-start: unset;
`;

const SocialLink = styled.a`
  width: 60px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    content: "";
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    top: -2px;
    left: -2px;
    padding: 2px;
    z-index: -1;
    background: #fff;
    -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
    -moz-transition: -moz-transform 0.2s, opacity 0.2s;
    transition: transform 0.2s, opacity 0.2s;
  }
`;

const SocialItem = styled.li`
  border-radius: 50%;
  border: 1px solid #ffffff;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.25s;
  ${SocialLink}:hover & {
    background: #ffffff;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  color: #ffffff;
  transition: color 0.25s;
  ${SocialLink}:hover & {
    color: #990000;
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
