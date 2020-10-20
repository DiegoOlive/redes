import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Menu from '../menu';

const TopBarcontainer =styled.div`
    display:flex;
    align-items: center;
    Background-color: var(--primaria-dark);
    height: 5rem;
`

export default function TopBar(){
    return(
        <TopBarcontainer>
            <Logo />
            <Menu/>
        </TopBarcontainer>
    )
}