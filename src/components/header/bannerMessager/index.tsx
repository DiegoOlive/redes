import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
    width: 70%;
    color: var(--branco);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.4;
        
`

//rem valendo 10
const Title =styled.h1`
    font-size: 2.4rem;
`

const Description = styled.h2`
    font-weight: normal;
    margin: 10px 0;
`

export default function Message(){
    return(
        <MessageContainer>
            <Title>
                Bem-Vindo a Nossa Ambiente de Conhecimento!
            </Title>

            <Description>
                Fique por dentro dos melhores conteúdos relacionados a redes de computadores.
            </Description>
            
        </MessageContainer>
    )
}