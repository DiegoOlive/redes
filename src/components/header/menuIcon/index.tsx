import styled from 'styled-components';

interface MenuIconProps {
    open: boolean;
}

const MenuIcon = styled.div`
    font-size: 3rem;
    color: ${(props: MenuIconProps) => props.open ? 'var(--preto)' :'var(--branco)'};
    z-index: 1;
    
    @media (min-width: 768px){
        display: none;
    }
`

export default MenuIcon;