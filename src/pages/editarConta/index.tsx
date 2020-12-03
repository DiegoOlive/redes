import React, {FormEvent, useState} from 'react';
import styled from 'styled-components';
import PageTemplate from '../pageTemplate';
import editarContaImg from '../../assets/images/editarConta/editarConta.png';
import Input, {InputContainer} from '../../components/input';
import Select, {SelectContainer} from '../../components/select';
import DeleteButton from '../../components/Buttons/deleteButton';
import EditButton from '../../components/Buttons/editButton';

import Conection from '../../services/connection';

//salvar as informações como estados para serem salvas

//toda pag possui um pag template
//pagtemplate defini cabeçalho e rodape
const titulacao = ['Graduando', 'Graduado', 'Mestrado', 'Doutorado']
const nivelr = ['Básico', 'Intermediário','Avançado']
const motivo = ['Redes Sociais', 'Amigos', 'Buscas na Internet', 'Outros']

const Form = styled.form`
    margin: 50px auto;
    width: 90%;
    
    @media (min-width: 768px){
        min-width: 768px;
        padding: 50px;
        width: 70%;
    }
`

const Form2 = styled.form`
@media (min-width: 768px){
    width: 70%;
}
`

const Unir = styled.div`
    @media (min-width: 768px){ 
        display: flex;
}
`

const FieldSet = styled.fieldset`
    border: none;  
`

const Legend = styled.legend`
    font-size: 2.4rem;
    color: var(--primaria);
`
//nao estou utilizando
/*const Photo = styled.div`
    width: 150px;
    height: 150px;
    background-color: var(--cinzaclaro);
    border-radius: 0.9rem;
    margin-top: 20px;

    @media (min-width: 768px){
        flex-shrink: 0;
        margin-right: 10px;
    }
`*/

const NameContainer = styled.div`
    @media (min-width: 768px){
        display: flex;
    }  
`

const Name = styled.div`
    @media (min-width: 768px){
        display: flex;
        width: 100%;
        align-items: center;

        ${InputContainer}{
            width: 100%;
        }
        ${InputContainer} + ${InputContainer}{
            margin-left: 10px;
            width: 100%;
        }            
    }
`

const SenhaContainer = styled.div`
    @media (min-width: 768px){
        display: flex;
    }  
`

const Senha = styled.div`
    @media (min-width: 768px){
        display: flex;
        width: 100%;
        align-items: center;

        ${InputContainer}{
            width: 100%;
        }
        ${InputContainer} + ${InputContainer}{
            margin-left: 10px;
            width: 100%;
        }            
    }
`

const Contato = styled.div`
    @media (min-width: 768px){
        display: flex;
        width: 100%;

        ${InputContainer}{
            width: 100%;
        }
        ${InputContainer} +${InputContainer}{
            width: 30%;
            margin-left: 10px;
        }
    }
`

const ContainerSelect = styled.div`
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;  
        width: 100%; 
        
        ${SelectContainer}{
            width: 100%; 
        }
    
        ${SelectContainer}+${SelectContainer}{
            margin-left: 10px;
        }
    }  
`

const TopFieldSet = styled.div`
    display: flex;
    justify-content: space-between;
`

const PlusButton = styled.button`
    border: none;
    background-color: var(--branco);
    color: var(--azulescuro);
    font-size: 1.6rem;
    font-weight: bold;
`

//onChance sofrer modificação -> um evento
export default function EditarConta (){
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');
    const [degree, setDegree] = useState('');
    const [nivel, setNivel] = useState('');
    const [motivation, setMotivation] = useState('');
    const [areas, setAreas] = useState<string[]>(['']);
  
    //mapeamento das areas atualizadas
    //index do elemento que quero modificar
    function setAreaInteresse(position: number, value: string){
        const areasAtualizadas = areas.map((area, index) =>{
            if(index === position){
                return value;
            }
            else{
                return area;
            }
            })
            setAreas(areasAtualizadas);
    }

    //tudo o que a publicaçao corrente mais a propriedade, passada em value
    //e.preventDefault(); não execute comp padrão
    function handleAtualize (e: FormEvent) {
            e.preventDefault();
            const path ='/membros'; 
            Conection.post(path, {
                name, 
                lastname,
                email,
                phone,
                senha,
                confSenha,
                course,
                degree,
                nivel,
                motivation,
                areas,
            })             
            .then((response) => {
                alert ("Conta atualizada!");
            })
            .catch((error) => {
                alert(error);
            });   
    }

    function addAreaInteresse(e: FormEvent){
        e.preventDefault();
        const areasAtualizadas = [...areas, ''];
        setAreas(areasAtualizadas);
    }

    function handleDelete (e: FormEvent) {
        e.preventDefault();
        const path ='/membros'; 
        Conection.post(path, {
            name, 
            lastname,
            email,
            phone,
            senha,
            confSenha,
            course,
            degree,
            nivel,
            motivation,
            areas,
        })             
        .then((response) => {
            alert ("Conta atualizada!");
        })
        .catch((error) => {
            alert(error);
        });   
        }
       
    return(
        <PageTemplate
            imagemSrc={editarContaImg}
            imagemAlt="Imagem de editarConta"
            title="Editar Conta"
            description="Neste ambiente você pode editar o seu perfil, podendo atualizar os campos ou excluir sua conta."
        >

            <Form onSubmit={handleAtualize}>
                <FieldSet>
                    <Legend>
                        Dados Cadastrados
                    </Legend>

                    <NameContainer>
                        <Name>
                            <Input
                                type="text"
                                name="name"
                                label="Nome:"
                                onChange= {e => setName(e.target.value)}/>
                            <Input 
                                type="text" 
                                name="lastname" 
                                label="Sobrenome:"
                                onChange= {e => setLastName(e.target.value)}/>
                        </Name>                        
                    </NameContainer>
                    <Contato>
                            <Input 
                                type="email"
                                name="email"
                                label="Email:"
                                placeholder="exemplo@email.com"
                                onChange= {e => setEmail(e.target.value)}
                                />
                            <Input 
                                type="number"
                                name="phone"
                                label="Telefone:"
                                placeholder="(__)9 ____ ____"
                                onChange= {e => setPhone(e.target.value)}
                                />
                    </Contato>
                    <SenhaContainer>
                        <Senha>
                            <Input
                                type="password"
                                name="senha"
                                label="Senha:"
                                onChange= {e => setSenha(e.target.value)}/>
                            <Input 
                                type="password" 
                                name="confSenha" 
                                label="Confirmação de Senha:"
                                onChange= {e => setConfSenha(e.target.value)}/>                                                     
                        </Senha>                        
                    </SenhaContainer>
                    <Input 
                        type="text" 
                        name="course" 
                        label="Curso:"
                        onChange= {e => setCourse(e.target.value)}/>
                    <ContainerSelect>
                        <Select
                            name="degree"
                            label="Titulação:"
                            options={titulacao}
                            onChange= {e => setDegree(e.target.value)}
                        />
                        <Select
                            name="nivel"
                            label="Nível:"
                            options={nivelr}
                            onChange= {e => setNivel(e.target.value)}
                        />                   
                        <Select
                            name="motivation"
                            label="Conheceu a página por:"
                            options={motivo}
                            onChange= {e => setMotivation(e.target.value)}
                        />
                        
                    </ContainerSelect>
                </FieldSet>   
                <FieldSet>
                    <TopFieldSet>
                        <Legend>
                            Áreas de Interesse
                        </Legend>
                        <PlusButton onClick={addAreaInteresse}>
                            +Área
                        </PlusButton>
                    </TopFieldSet>
                    {
                        areas.map((area, index) =>{
                            return(
                                <Input key={`Area ${index}`}
                                name="area"
                                label="Área de Interesse"
                                onChange= {e => setAreaInteresse (index, e.target.value)}/>
                            )
                        })                       
                    }
                </FieldSet>
                <Unir>
                <EditButton type="submit">Atualizar</EditButton> 
                    <Form2 onSubmit={handleDelete}>
                    <DeleteButton type="submit">Excluir</DeleteButton> 
                </Form2>
                </Unir>
            </Form>            
        </PageTemplate>
    );
}