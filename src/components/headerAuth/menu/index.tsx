import React, {useState} from 'react';
import styled from 'styled-components';
import {CgMenu} from 'react-icons/cg';
import {VscClose} from 'react-icons/vsc';
import MenuIcon from '../menuIcon';
import MenuList from '../menuList';
import { Link } from 'react-router-dom';

interface MenusProps {
    open?:boolean;    
}

const MenuContainer = styled.div`
    margin-left: 1.6rem;
    margin-right: 2.6rem;
    display: flex;
    flex: 1;

    & ${MenuIcon}{
        position:fixed;
        right:25px;
        top: 5px;
    }
`

    const Menus = styled.nav`
    text-decoration:none; 
    background-color: var(--branco);
    width: 200px;
    height: 60vh;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${(props: MenusProps) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s;

    @media (min-width: 768px){
        transform: none;
        background-color: transparent;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        justify-content: space-between;
    }
  `
export default function Menu(){
    const [open, setOpen] = useState(false);
    return(
        <MenuContainer>
            {!open &&
            <MenuIcon open={open} onClick={() => setOpen(!open)}>
               <CgMenu/> 
            </MenuIcon>
            }
            {open &&
            <MenuIcon open={open} onClick={() => setOpen(!open)}>
                <VscClose/> 
            </MenuIcon>
            }
            <Menus open={open}>               
            <MenuList>                         
            <Link to="/" style={{ textDecoration: 'none' }}><li>Login</li></Link>                     
                </MenuList>         
            </Menus>
        </MenuContainer>
    );
}