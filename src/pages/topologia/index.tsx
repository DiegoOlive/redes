import React from 'react';
import PageTemplate from '../pageTemplate';
import topologiaImg from '../../assets/images/topologia/topologia.png';
import Material from '../../components/matTopologia';
  
export default function topologia () {
    return (
        <PageTemplate
            imagemSrc={topologiaImg}
            imagemAlt="Imagem topologias"
            title="Classificação das Redes de Computadores"
            description="A forma de organização e arquitetura das redes, seja logicamente ou fisicamente, influência no processo de gerência da topologia escolhida.">
            <Material/>
        </PageTemplate>
    );
}