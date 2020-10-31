import React from 'react';
import styled from 'styled-components';
import Page from '../page';

const PageContainer = styled.main`
    width: 90%;
`
//acessar props dos filhos elementos dentro dessa tag
//carregar os filhos
const Container : React.FC = (props) => {
    return(
        <Page>
            <PageContainer>
                {props.children}
            </PageContainer>
        </Page>
    );
}

export default Container;