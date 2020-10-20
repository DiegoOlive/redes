import React from 'react';
import styled from 'styled-components';
import {CgMenu} from 'react-icons/cg';
import MenuIcon from '../menuIcon';

const MenuContainer = styled.div`
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    & ${MenuIcon}{
        position:fixed;
        right:20px;
        top: 10px;
    }
  `

export default function Menu(){
    return(
        <MenuContainer>
            <MenuIcon>
               <CgMenu/> 
            </MenuIcon>
        </MenuContainer>
    );
}