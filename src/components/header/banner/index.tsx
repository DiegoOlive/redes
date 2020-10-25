import React from 'react';
import styled from 'styled-components';
import BannerImg from '../bannerImg/';
import BannerMessager, {MessageContainer} from '../bannerMessager';

const BannerContainer = styled.div`
    display: flex;
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

  export interface BannerProps{
    imagemSrc?: string;
    imagemAlt?: string;
    title: string;
    description?: string;
    buttonLink?: string;
    buttonText?: string;
}

const Banner: React.FC<BannerProps> = (props) =>{
    return(
        <BannerContainer>
            {props.imagemSrc &&
            <BannerImg
                src={props.imagemSrc}
                alt={props.imagemAlt}
            />
            }
            <BannerMessager {...props} />
        </BannerContainer>
    );    
}

export default Banner;