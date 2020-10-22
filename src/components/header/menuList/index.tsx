import styled from 'styled-components';
//ol ordenada
const MenuList = styled.ul`
    list-style: none;
    margin-left: 3rem;
    margin-top: 3rem;

    li{
        color: var(--black);
        margin-bottom: 1rem;
        font-size: 1.6rem;
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