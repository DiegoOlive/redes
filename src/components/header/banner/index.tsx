import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/home/inicio.png';
import BannerImg from '../bannerImg/';

const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;

    @media (min-width: 768px){
        display: flex;
        margin: 10px;
        justify-content: centerspace-around;

        
    `

export default function Banner(){
    return(
        <BannerContainer>
            <BannerImg
                src={Img}
                alt="Figura do início"
            />
        </BannerContainer>
    )    
}