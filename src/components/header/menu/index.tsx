import React from 'react';
import styled from 'styled-components';
import {CgMenu} from 'react-icons/cg';
import MenuIcon from '../menuIcon';
import MenuList from '../menuList';

const MenuContainer = styled.div`
    margin-left: 1.6rem;
    margin-right: 2.6rem;
    display: flex;
    flex: 1;

    & ${MenuIcon}{
        position:fixed;
        right:20px;
        top: 5px;
    }
`

    const Menus = styled.nav`
    background-color: var(--branco);
    width: 200px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;

    @media (min-width: 768px){
        background-color: transparent;
        display: flex;
        position: static;
        height: 100%;
        flex: 2;
        justify-content: space-between;
    }
  `

export default function Menu(){
    return(
        <MenuContainer>
            <MenuIcon>
               <CgMenu/> 
            </MenuIcon>
            <Menus>
                <MenuList>
                    <li>Início</li>
                    <li>Classificação</li>
                    <li>História</li>
                    <li>Equipamentos</li>
                    <li>Notícias</li>
                    <li>Protocolos</li>
                    <li>Dúvidas</li>
                    <li>Sobre</li> 
                </MenuList>
                <MenuList>
                    <li>Sair</li>
                    <li>Perfil</li>
                </MenuList>
            </Menus>
        </MenuContainer>
    );
}