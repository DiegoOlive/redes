import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import {MATERIAL} from '../../data/matHome'; // lista estática
import Card from '../matCard';
import Connection from '../../services/connection';

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
interface Material{
    name: string,
    image: string,
    situation: string,
    featured: boolean,
    description: string
}

//useState (arm. estados) - salvar dados que estão no front numa função e enviar para o back
//<Image src={require(`../../assets/${material.image}`)} alt={material.name} />
export default function MatHome() {
    const [mathome, setMatHome] = useState<Material[]>([]);

//recebe uma função e quando ser atualizados

    return (
        <HomeList>
            {
                mathome.filter(p => p.featured === true).map((material) => {
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