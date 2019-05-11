import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-inline-start: unset;
`

const SocialLink = styled.a`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialItem = styled.li`
  border-radius: 100%;
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
`
const Icon = styled(FontAwesomeIcon)`
  color: #ffffff;
  transition: color 0.25s;
  ${SocialLink}:hover & {
    color: #990000;
  }
`

const Social = () => {
  return (
    <SocialWrapper>
      <SocialLink href="https://linkedin.com/in/krittawat-sup" target="_blank">
        <SocialItem >
          <Icon icon={['fab', 'linkedin-in']} />
        </SocialItem>
      </SocialLink>
      <SocialLink href="https://github.com/kratuwu" target="_blank">
        <SocialItem >
          <Icon icon={['fab', 'github']} />
        </SocialItem>
      </SocialLink>
      <SocialLink href="https://www.facebook.com/krittawat.suphankomut" target="_blank">
        <SocialItem >
          <Icon icon={['fab', 'facebook-f']} />
        </SocialItem>
      </SocialLink>
    </SocialWrapper>
  )
}

export default Social
