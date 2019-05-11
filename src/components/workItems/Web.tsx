import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import WorkItemContainer from './WorkItemContainer';

const WebIcon = styled(FontAwesomeIcon)`
    font-size: 60px;
    color: #990000;
`
const Web = () => {
    return (
        <WorkItemContainer>
            <WebIcon icon={['fas', 'laptop-code']} />
            <h3>Web</h3>
        </WorkItemContainer>
    )
}

export default Web
