import React from 'react';
import Header from '../../components/headerAuth/container';
import {BannerProps} from '../../components/headerAuth/banner';
import Container from '../../components/container';
import Footer from '../../components/footer/container';

//pags passa para pagetemplente em forma de filho
//pagetemplate passa a informação para container
//container carrega a informação (respiro ao conteudo)

const PageTemplateAuth: React.FC<BannerProps> = (props) => {
    return (
        <>
            <Header {...props}/>
                <Container>
                    {props.children}
                </Container>
            <Footer />
        </>
    );
}

export default PageTemplateAuth;