import React from 'react';
import PageTemplate from '../pageTemplate';
import classificImg from '../../assets/images/classific/classific.png';

export default function Erro404 () {
    return (
        <PageTemplate
            imagemSrc={classificImg}
            imagemAlt="Imagem erro404"
            title="Classificação das Redes de Computadores"
            description="A forma de organização e arquitetura das redes, seja logicamente ou fisicamente, influência no processo de gerência da topologia escolhida."
            
        >
            <h1>Erro 404</h1>
        </PageTemplate>
    );
}