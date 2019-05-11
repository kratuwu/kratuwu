import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import WorkItemContainer from './WorkItemContainer';

const WebIcon = styled(FontAwesomeIcon)`
    width: 60px !important;
    font-size: 60px;
    color: #990000;
`

const IconGroup = styled.div`
    display: flex;
`

const Mobile = () => {
    return (
        <WorkItemContainer>
            <IconGroup>
                <WebIcon icon={['fab', 'android']} />
                <WebIcon icon={['fab', 'apple']} />
            </IconGroup>
            <h3>Cross Platform Mobile</h3>
        </WorkItemContainer>
    )
}

export default Mobile
