import React from 'react'
import styled from 'styled-components';

import Web from './Web'
import Mobile from './Mobile'

const WorkItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  @media(min-width: 640px){
    flex-direction: row;
  }
`
const WorkItems = () => {
  return (
    <WorkItemsWrapper>
      <Web />
      <Mobile />
    </WorkItemsWrapper>
  )
}

export default WorkItems
