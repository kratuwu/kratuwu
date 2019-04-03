import React, { SFC } from 'react'
import styled from 'styled-components';

const ContentStyled = styled.div`
    top: 60px;  
    padding: 0px 24px;
    @media (min-width: 700px) {
        padding: 0px;
    }
`

const Content:SFC = ({children}) => {
  return (
    <ContentStyled>
      <p>content</p>
      {children}
    </ContentStyled>
  )
}

export default Content
