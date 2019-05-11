import React, { SFC } from 'react'
import styled from 'styled-components';

const WorkItemWrapper = styled.div`
  @media(min-width: 640px) {
    /* flex: 1 0 50%; */
    width: 50%;
  }
`
const WorkItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 15px;
    margin: 10px;
    @media(min-width: 640px) {
        margin: 10px 25px;
    }
`

const WorkItemContainer: SFC<{}> = ({ children }) => {
  return (
    <WorkItemWrapper>
      <WorkItemContent>
        {children}
      </WorkItemContent>
    </WorkItemWrapper>
  )
}

export default WorkItemContainer
