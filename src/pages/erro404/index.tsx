import React from 'react';
import PageTemplate from '../pageTemplate';
import erro404Img from '../../assets/images/erro404/erro404.png';
import Material from '../../components/matErro';

export default function Erro404 () {
    return (
        <PageTemplate
            imagemSrc={erro404Img}
            imagemAlt="Imagem erro404"
            title="Erro404"
            description="Página não encontrada"
            
        >
         <Material/>
        </PageTemplate>
    );
}