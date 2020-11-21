import React from 'react';
import styled from 'styled-components';
import {VIDEOSHIST} from '../../data/videoHistoria';

const VideoHContainer = styled.div`

`

const Video = styled.iframe`
    border-radius: 0.8rem;
    width: 100%;    
    height: 300px;    

    @media (min-width: 768px){
        margin-top: 70px;
        margin-left: 10%;
        width: 75%;
        height: 500px;
        border-radius: 0.8rem;
    }
`

const Title =styled.h2`
    font-size: 1.6rem;
    font-weight: normal;
    
    @media (min-width: 768px){
    } 
`
const Info = styled.p`
    font-size: 1.6rem;
    line-height: 1.6;
    height: 50px;
    margin-left: 15%;
    @media (min-width: 768px){
        width: 100%;
        margin-left: 30%;
    }
`
//<iframe width="560" height="315" src="https://www.youtube.com/embed/4aTvbFbOJmA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

export default function VideoDestaque() {
    var videoItem = VIDEOSHIST.filter(v => v.featured === true)[0];
    return (
        <VideoHContainer>
            <Video src={`https://www.youtube.com/embed/${videoItem.video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Video>
                <Info>
                    <Title>
                        {videoItem.name}
                    </Title>
                </Info>
        </VideoHContainer>

    );
}