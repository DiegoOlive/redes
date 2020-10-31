import styled from 'styled-components';
//ol ordenada
const MenuList = styled.ul`
    list-style: none;
    margin-left: 2rem;
    margin-top: 4rem;
        
    li{
        color: var(--preto);
        margin-bottom: 1rem;
        font-size: 1.4rem;        
    }

    @media (min-width: 768px){
        display: flex;
        margin: 0;

        li{
            margin-left: 2.5rem;
            margin-bottom: 0;
            color: var(--branco);
        }
    }

`

export default MenuList;