import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BannerProps} from '../banner';

export const MessageContainer = styled.div`
    width: 80%;
    color: var(--branco);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.6;

    @media (min-width: 768px){
        width: 700px;
        display: flex;
        flex-direction: column;
        text-align: start;
        margin-left: 100px;        
`

//rem valendo 10
const Title =styled.h1`
    font-size: 2.4rem;

    @media (min-width: 768px){
        font-size: 3.0rem;
    }
`

const Description = styled.h2`
    font-weight: normal;
    font-size: 1.8rem;
    margin: 10px 0;
`
const Button = styled(Link)`
    display: flex;
    border: 1px solid var(--cinza);
    height: 6rem;
    justify-content: center;
    align-items: center;
    color: var(--branco);
    text-decoration: none;
    border-radius:0.8rem;
    font-size: 1.4rem;

    @media (min-width: 768px){
        width: 200px;
    }
`

const  Message: React.FC<BannerProps> = (props) =>{
    return(
        <MessageContainer>
            <Title>
                {props.title}
            </Title>
            {props.description &&
            <Description>
                {props.description}
            </Description>
            }
            {props.buttonLink &&
            <Button to={props.buttonLink}>
                {props.buttonText}
            </Button>
            }
        </MessageContainer>
    );
}

export default Message;