import React from 'react';
import styled from 'styled-components';
import {FiInstagram} from 'react-icons/fi';
import {FiFacebook, FiYoutube, FiTwitter} from 'react-icons/fi';
import {BsHouseDoor} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';

const FooterData = styled.div`
    width: 100%;
    height: 110px;
    text-align: center;
    color: var(--branco);
    padding: 18px 0;
`

const Content = styled.section`
    display flex;
    flex-direction: column;
    align-items: center;

    ${FooterData}{
        border-bottom: 1px solid var(--branco);
    }

    @media (min-width: 768px){               
        ${FooterData}{
            border: none;  
        }
    }
`

const Info = styled.div`
    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`
//24px nesse caso
const Title =styled.h1`
    font-size: 1.9rem;
    margin-bottom: 18px;
`

const Lista = styled.ul`
    list-style: none;
    font-size: 1.5em;
    width: 580px;

    li {        
        line-height: 0.5;        
    
        @media (min-width: 768px){               
        line-height: 1.5;
        }
    }
`

const SocialNetwork = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--branco);
`

const Link = styled.a`
    text-decoration: none;
    color: var(--branco);
    font-size: 1.5rem;
    margin-left: 2px;

    :hover{
        color: var(--branco);        
    }
`

const Icon = styled.span`
    font-size: 1.9rem;
    color: var(--branco);
    margin-right: 10px;
`
//hover - passar o mouse sobre
const Email=styled.a`
    color: var(--branco);
    text-decoration: none;
   
    :hover{
        color: var(--branco);
    }
`

const Direitos = styled.p`
    color: var(--branco);
    font-size: 1.5rem;
    padding: 10px 0;
    font-family: 'Roboto', sans-serif;
`

export default function FooterContent(){
    return(
        <Content>
            <Info>
                <FooterData>
                    <Title>
                        Conheça Nossas Redes Sociais
                    </Title>
                    <Lista>
                        <SocialNetwork>
                        <li>
                            <Icon>
                                <FiInstagram/>
                            </Icon>
                            <Link href="https://www.instagram.com">network.times</Link>
                        </li>
                        <li>
                            <Icon>
                                <FiFacebook/>
                            </Icon>
                            <Link href="https://www.facebook.com">network.times</Link>
                        </li>
                        <li>
                            <Icon>
                                <FiYoutube/>
                            </Icon>
                            <Link href="https://www.youtube.com/">network.times</Link>
                        </li>
                        <li>
                            <Icon>
                                <FiTwitter/>
                            </Icon>
                            <Link href="https://www.twitter.com/">network.times</Link>
                        </li>
                        </SocialNetwork>    
                    </Lista>
                </FooterData>
                <FooterData>
                    <Title>
                        Contato
                    </Title>
                    <Lista>
                        <li>
                            <Icon>
                                <HiOutlineMail/>
                            </Icon>
                            <Email href="mailto:network.times@gmail.com">
                                network.times@gmail.com
                            </Email>
                        </li>
                        <li>
                            <Icon>
                                <BsHouseDoor/>
                            </Icon>
                            Rodovia BR-226, s/n, Pau dos Ferros - RN
                        </li>
                    </Lista>
                </FooterData>
            </Info>
            <Direitos>
                <i>@todos os direitos reservados.</i>
            </Direitos>
        </Content>
    );
}
