import React from 'react';
import styled from 'styled-components';
import {MATERIAL} from '../../data/matErro';
import Card2 from '../matCard2';

const HomeList = styled.section`
    margin-top: 20px;
    font-size: 1.6rem;
    line-height: 1.6rem;

    @media (min-width: 768px){
        
    }
`

const HomeName = styled.h2`
    font-size: 1.8rem;
    margin: 25px 0;
    font-weight: normal;
`

const Image = styled.img`

`
//<Image src={require(`../../assets/${material.image}`)} alt={material.name} />
export default function MatHome() {
    return (
        <HomeList>
            {
                MATERIAL.filter(p => p.featured === true).map((material) => {
                    return(
                        <Card2 key={material.name}>
                            <Image src={require(`../../assets/${material.image}`)} alt={material.name} />
                            <HomeName>
                                {material.name}
                            </HomeName>
                        </Card2>
                    );
                })                
            }
                        
        </HomeList>
    );
}