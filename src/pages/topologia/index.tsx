import React from 'react';
import PageTemplate from '../pageTemplate';
import classificImg from '../../assets/images/topologia/topologia.png';
import Material from '../../components/matTopologia';

export default function Erro404 () {
    return (
        <PageTemplate
            imagemSrc={classificImg}
            imagemAlt="Imagem erro404"
            title="Classificação das Redes de Computadores"
            description="A forma de organização e arquitetura das redes, seja logicamente ou fisicamente, influência no processo de gerência da topologia escolhida.">
            <Material/>
        </PageTemplate>
    );
}