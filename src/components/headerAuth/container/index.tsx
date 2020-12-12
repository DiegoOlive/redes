import React from 'react';
import styled from 'styled-components';
import TopBar from '../topBar';
import Banner,  {BannerProps} from '../banner';

//ta sem efeito o background
const MainHeader = styled.header`
    background-color: var(--primaria);     
`

const Header: React.FC<BannerProps> = (props) =>{
    return (
        <MainHeader>
           <TopBar />
           <Banner {...props} />
        </MainHeader>
    );
}

export default Header;