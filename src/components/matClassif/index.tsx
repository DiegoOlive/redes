import React from 'react';
import styled from 'styled-components';
import {MATERIAL} from '../../data/matClassif';
import Card from '../matCard';

/*
grid-auto-columns:

*/
const HomeList = styled.section`
    margin-top: 20px;
    font-size: 1.6rem;
    line-height: 1.6rem;
   
    @media (min-width: 768px){
      
        
    }
`

const HomeName = styled.h2`
    font-size: 1.6rem;
    margin: 10px 0;
    font-weight: normal;
`

const Description = styled.p`
    height: 150px;
    overflow: hidden;
`

const Image = styled.img`
width: 75%;
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