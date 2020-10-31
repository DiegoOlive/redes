import React from 'react';
import Header from '../../components/header/container';
import {BannerProps} from '../../components/header/banner';
import Container from '../../components/container';
import Footer from '../../components/footer/container';

//home passa para pagetemplente em forma de filho
//pagetemplate passa a informação para container
//container carrega a informação (respiro ao conteudo)

const PageTemplate: React.FC<BannerProps> = (props) => {
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

export default PageTemplate;