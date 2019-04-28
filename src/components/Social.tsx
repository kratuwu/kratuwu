import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

const SocialLink = styled.a`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialItem = styled.li`
  border-radius: 100%;
  background: white;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #990000;
`
const Icon = styled(FontAwesomeIcon)`
  color: #990000;
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
