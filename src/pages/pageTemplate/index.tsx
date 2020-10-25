import React from 'react';
import Header from '../../components/header/container';
import Footer from '../../components/footer';
import {BannerProps} from '../../components/header/banner';

const PageTemplate: React.FC<BannerProps> = (props) =>{
    return(
        <div>
            <Header {...props}/>
                {props.children}
            <Footer />
        </div>
    );
}

export default PageTemplate;