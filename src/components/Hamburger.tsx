import React, {SFC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

const HamburgerWrapper = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        padding-right: 10px;
        margin-left: auto;
        display: block;
    }
`;

type HamburgerProps = {
    onClick: () => void
};

const Hamburger: SFC<HamburgerProps> = ({onClick}) => {
    return (
        <HamburgerWrapper onClick={onClick}>
            <FontAwesomeIcon icon={['fas', 'bars']} />
        </HamburgerWrapper>
    )
}

export default Hamburger
