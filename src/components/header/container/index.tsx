import React from 'react';
import styled from 'styled-components';
import TopBar from '../topBar';

//ta sem efeito o background
const MainHeader = styled.header`
    background-color: var(--primaria);     
`

export default function Header() {
    return (
        <MainHeader>
           <TopBar />
        </MainHeader>
    );
}