import React, {FormEvent, useState} from 'react';
import styled from 'styled-components';
import PageTemplate from '../pageTemplate';
import loginImg from '../../assets/images/login/login.png';
import Input from '../../components/input';
import SubmitButton from '../../components/Buttons/submitButton';
import { Link } from 'react-router-dom';

import Conection from '../../services/connection';

const Form = styled.form`
    margin: 50px auto;
    width: 90%;
    align-items: center;
    
    @media (min-width: 768px){
        padding: 50px;
        margin:0 auto;
        width: 40%;
        align-items: center;
    }
`

const FieldSet = styled.fieldset`
    border: none;
    @media (min-width: 768px){
    display: flex;   
    } 
`

const Legend = styled.legend`
align-items: center;
    font-size: 2.4rem;
    color: var(--primaria);
`

const Senha = styled.div`
align-items: center;
@media (min-width: 768px){
         align-items: center;
    }
`

const Contato = styled.div`
    @media (min-width: 768px){
        align-items: center;
    }
`

const Espaco = styled.div`
    @media (min-width: 768px){
        align-items: center;
        margin-right: 23%;
    }
`

export default function LoginConta (){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    function handleLogin (e: FormEvent) {
            e.preventDefault();
            const path ='/membros'; 
            Conection.post(path, {
                email,
                senha,
            })             
            .then((response) => {
                alert ("Login Realizado!");
            })
            .catch((error) => {
                alert(error);
            });   
    }
       
    return(
        <PageTemplate
            imagemSrc={loginImg}
            imagemAlt="Imagem de Login"
            title="Área de Login"
            description="Neste ambiente você pode efetuar o login em sua conta ou caso ainda não seja membro, efeuar o cadastro."
        >

            <Form onSubmit={handleLogin}>                
                    <Legend>
                        Login:
                    </Legend>
                        <Contato>
                            <Input 
                                type="email"
                                name="email"
                                label="Email:"
                                placeholder="exemplo@email.com"
                                onChange= {e => setEmail(e.target.value)}
                                />
                        </Contato>
                        <Senha>
                            <Input
                                type="password"
                                name="senha"
                                label="Senha:"
                                onChange= {e => setSenha(e.target.value)}/>
                        </Senha>                        
                    <FieldSet>
                        <Espaco>
                            <SubmitButton type="submit">Logar</SubmitButton>
                        </Espaco>
                        <Link to="/criarconta" style={{ textDecoration: 'none' }}><SubmitButton>Criar Conta</SubmitButton></Link>
                    </FieldSet> 
                </Form>            
        </PageTemplate>
    );
}