import React from 'react';
import PageTemplate from '../pageTemplate';
import homeImg from '../../assets/images/home/inicio.png';

export default function Home() {
    return (
        <PageTemplate
            imagemSrc={homeImg}
            imagemAlt="Imagem da Home"
            title="Bem-Vindo ao Nosso Ambiente de Conhecimento!"
            description="Fique por dentro dos melhores conteúdos relacionados a redes de computadores."
        >
            <h1>Home</h1>
        </PageTemplate>
    );
}