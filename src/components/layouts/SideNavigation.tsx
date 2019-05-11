import React from 'react'
import styled from 'styled-components';
import { ContentRef } from "../../../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const SideNavigationWrapper = styled.div<{ open: boolean }>`
const SideNavigationWrapper = styled.div`
opacity: 0.75;
    display: none;
    /* max-height: ${(props: any) => props.open ? '212px' : '0px'}; */
    overflow: hidden;
    transition: max-height 0.5s ease;
    position: fixed;
    right: 10px;
    bottom: 0;
  @media (min-width: 768px) {
    top: 50%;
    display: block;
    max-height: unset;
  }
`

const NavigationItem = styled.li`
  border-radius: 100%;
  border: 1px solid #ccc;
  background: white;
  height: 40px;
  width: 40px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.25s;
  &:hover {
    background: black;
  }
  @media (min-width: 768px) {
    font-size: 25px;
    height: 50px;
    width: 50px;
  }
`
const Icon = styled(FontAwesomeIcon)`
    width: 50px;
  color: #990000;
  transition: color 0.25s;
  ${NavigationItem}:hover & {
    color: #ffffff;
  }
`

const scrollToRef = (ref: any) => {
    window.scrollTo({
        top: ref.current.offsetTop - 60,
        behavior: 'smooth',
    });
};

type SideNavigationProps = {
    contentRefs: ContentRef[];
    // open: boolean;
};

const SideNavigation = (props: SideNavigationProps) => {
    return (
        <SideNavigationWrapper >
            <ul>
                {props.contentRefs.map((contentRef: ContentRef) => (
                    <NavigationItem
                        key={contentRef.name}
                        onClick={() => scrollToRef(contentRef.ref)}
                        children={<Icon icon={contentRef.icon} />} />
                ))}
            </ul>
        </SideNavigationWrapper>

    )
}

export default SideNavigation
