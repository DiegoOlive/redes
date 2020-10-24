import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/home/inicio.png';
import BannerImg from '../bannerImg/';
import BannerMessager, {MessageContainer} from '../bannerMessager';

const BannerContainer = styled.div`
    display: flex;
    margin: 10px;  
    flex-direction: column;
    align-items:center;
        
       
    @media (min-width: 768px){
        display:grid;
        grid-template-columns: 3fr 2fr;
        grid-template-areas:
            "message figure";
    
        & ${BannerImg}{
            grid-area: figure;
            justify-self: end;
            margin-right: 100px;   
        }

        & ${MessageContainer}{
            grid-area: message;
        }        
    }
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