import React from 'react';
import styled from 'styled-components';
import FooterContent from '../content';

//ja existe a tag html no footer 
const FooterContainer = styled.footer`
    background-color: var(--primaria-dark); 

    @media (min-width: 768px){
        display: flex;
        justify-content: center;
    }
`

export default function Footer(){
    return(
        <FooterContainer>
            <FooterContent />
        </FooterContainer>
    );
}