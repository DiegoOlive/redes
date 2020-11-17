import React from 'react';
import PageTemplate from '../pageTemplate';
import historiaImg from '../../assets/images/historia/historia.png';
import Material from '../../components/matHistoria';

export default function historia () {
    return (
        <PageTemplate
            imagemSrc={historiaImg}
            imagemAlt="historia IMG"
            title="História das Redes de Computadores"
            description="Tudo começou por volta de 1960, quando a comunicação se dava pela rede telefônica.">
            <Material/>
        </PageTemplate>
    );
}