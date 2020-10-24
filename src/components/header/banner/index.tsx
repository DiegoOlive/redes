import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/home/inicio.png';
import BannerImg from '../bannerImg/';
import BannerMessager from '../bannerMessager';

const BannerContainer = styled.div`
    display: flex;
    margin: 10px;  
    flex-direction: column;
    align-items:center;         
  `

export default function Banner(){
    return(
        <BannerContainer>
            <BannerImg
                src={Img}
                alt="Figura do início"
            />
            <BannerMessager />
        </BannerContainer>
    )    
}