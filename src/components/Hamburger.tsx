import React, {SFC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";

const HamburgerWrapper = styled.div`
    padding-right: 10px;
    /* margin-left: auto; */
    display: block;
    right: 0;
    position: fixed;
    padding: 15px;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
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
