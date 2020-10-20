import React from 'react';
import Header from '../../components/header/container';
import Footer from '../../components/footer';

const PageTemplate: React.FC = (props) =>{
    return(
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    );
}

export default PageTemplate;