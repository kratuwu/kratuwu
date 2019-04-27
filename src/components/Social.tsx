import React from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SocialItem = styled.a`
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
`

const Social = () => {
  return (
    <SocialWrapper>
      <SocialItem href="https://linkedin.com/in/krittawat-sup" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </SocialItem>
      <SocialItem href="https://github.com/kratuwu" target="_blank">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </SocialItem>
      <SocialItem href="https://www.facebook.com/krittawat.suphankomut" target="_blank">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
        </SocialItem>
    </SocialWrapper>
  )
}

export default Social
