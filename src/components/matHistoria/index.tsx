import React from 'react';
import styled from 'styled-components';
import {MATERIAL, MATERIAL2} from '../../data/matHistoria';
import Card from '../matCard';

const HomeList = styled.section`
    margin-top: 20px;
    font-size: 1.6rem;
    line-height: 1.6rem;
    @media (min-width: 768px){
     
    }
`

const HomeName = styled.h2`
    font-size: 1.8rem;
    margin: 15px 0;
    font-weight: normal;
`

const Description = styled.p`
    font-size: 1.4rem;
    font-weight: normal;
    text-align: justify;
    line-height:25px;
   `

const Image = styled.img`
    height: 35%;
    margin: 15px 0;
    
    @media (min-width: 768px){
        height: 45%;
        margin: 15px 0;
    }

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
        
            {
               MATERIAL2.filter(p => p.featured === true).map((material2) => {
                return(
                    <Card key={material2.descricao}>
                        <Description>
                                {material2.descricao}
                        </Description> 
                    </Card>
                );
                }) 
            }
    </HomeList>                   
        
    );
}