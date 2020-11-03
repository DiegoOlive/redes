import React from 'react';
import styled from 'styled-components';
import {MATERIAL} from '../../data/matHome';
import Card from '../matCard';

/*
grid-auto-columns:

*/
const HomeList = styled.section`
    margin-top: 20px;
    font-size: 1.6rem;
    line-height: 1.6rem;
   
    @media (min-width: 768px){
        display: flex; 
        justify-content: space-between;
        
    }
`

const HomeName = styled.h2`
    font-size: 1.8rem;
    margin: 25px 0;
    font-weight: normal;
`

const Description = styled.p`
    height: 450px;
    width: 75%;
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: normal;
    text-align: justify;
    line-height:25px;
`

const Image = styled.img`
width: 75%;
height: 40%;
`
//<Image src={require(`../../assets/${material.image}`)} alt={material.name} />
export default function MatHome() {
    return (
        <HomeList>
            {
                MATERIAL.filter(p => p.featured === true).map((material) => {
                    return(
                        <Card key={material.name}>
                            <Image src={require(`../../assets/${material.image}`)} alt={material.name} />
                            <HomeName>
                                {material.name}
                            </HomeName>
                            <Description>
                                {material.description}
                            </Description>
                        </Card>
                    );
                })                
            }
                        
        </HomeList>
    );
}