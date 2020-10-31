import React from 'react';
import styled from 'styled-components';
import {MATERIAL} from '../../data/matHome';
import Card from '../matHomeCard';


const HomeList = styled.section`

`

export default function MatHome() {
    return (
        <HomeList>
            {
                MATERIAL.filter(p => p.featured === true).map((material) => {
                    return(
                        <Card key={material.name}>

                        </Card>
                    );
                })
            }
        </HomeList>
    );
}