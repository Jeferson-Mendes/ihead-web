import React from "react";

import {
    LandingPageSectionStyled,
    NavbarStyled,
    HeaderSectionStyled,
    SectionDividerStyled,
    SubscribeButtonStyled,
    InfoCardsSectionStyled,
    ImageFieldStyled,
    ParagraphFieldStyled,
    FooterStyled,
} from './style';

import Logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

const LandingPage:React.FC = () => {

    const navigate = useNavigate();

    const handleNavigateToRegister = () => {
        navigate('/register')
    }

    const handleNavigateToLogin = () => {
        navigate('/login')
    }

    return (
        <LandingPageSectionStyled>
            <NavbarStyled>
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <button onClick={handleNavigateToLogin}>Entrar</button>
                </div>
            </NavbarStyled>
            <HeaderSectionStyled>
                <div>
                    <h2>ENTRE HOJE MESMO NO IHEAD</h2>
                    <SubscribeButtonStyled onClick={handleNavigateToRegister}>Inscrever-se</SubscribeButtonStyled>
                    <p>Junte-se gratuitamente com seu e-mail institucional do IFCE com o domínio @aluno.ifce.edu.br, que o permitirá acesso à plataforma.</p>
                </div>
            </HeaderSectionStyled>
            <SectionDividerStyled>
                <p>
                Então não perca tempo! Aqui você pode fazer publicações com soluções de problemas recorrentes de tecnologia, conhecer e interagir com gente do IFCE. Tudo isso sem pagar nada!
                </p>
            </SectionDividerStyled>
            <InfoCardsSectionStyled>
                <ParagraphFieldStyled>
                    <h4>Pronto para começar?</h4>
                    <p>
                    Quem nunca teve vontade de ajudar alguém? Ou de mostrar seu incrível projeto? No iHead você vai encontrar componentes para espalhar suas ideias! Além disso, poderá apresentar seus projetos, expor soluções e muitas outras atividades do mundo da programação!
                    </p>
                    <SubscribeButtonStyled onClick={handleNavigateToRegister}>Inscrever-se</SubscribeButtonStyled>
                </ParagraphFieldStyled>
                <ImageFieldStyled figureBg="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="codeImg" />
                    </figure>
                </ImageFieldStyled>
            </InfoCardsSectionStyled>

            <InfoCardsSectionStyled>

                <ImageFieldStyled figureBg="https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1648737963059-59ec8e2d50c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="codeImg" />
                    </figure>
                </ImageFieldStyled>

                <ParagraphFieldStyled>
                    <h4>Você nunca sai perdendo quando ganha conhecimento!</h4>
                    <p>
                    Já pensou em aprender a programar de graça e em um único lugar? No iHead você poderá dominar vários conhecimentos do mundo da programação. Quanto mais você programar, mais problemas resolver, melhor você fica!
                    </p>
                    <SubscribeButtonStyled onClick={handleNavigateToRegister}>Inscrever-se</SubscribeButtonStyled>
                </ParagraphFieldStyled>
                
            </InfoCardsSectionStyled>

            <InfoCardsSectionStyled>
                <ParagraphFieldStyled>
                    <h4>Conhecer e interagir com gente
de todo o IFCE!</h4>
                    <p>
                    Conheça e interaja com quem quiser do IFCE. Encontre pessoas que já trilhou um caminho semelhante ao que você planejou para auxiliar seu caminho dividindo seus conhecimentos. iHead é o melhor lugar para encontrar pessoas e fazer amigos do seu instituto! 
                    </p>
                    <SubscribeButtonStyled onClick={handleNavigateToRegister}>Inscrever-se</SubscribeButtonStyled>
                </ParagraphFieldStyled>
                <ImageFieldStyled figureBg="https://images.unsplash.com/photo-1576502202167-791eca35a78d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="codeImg" />
                    </figure>
                </ImageFieldStyled>
            </InfoCardsSectionStyled>

            <FooterStyled>
                <div>
                    <p>Você está pronto?</p>
                    <h4>Vamos começar hoje!</h4>

                    <SubscribeButtonStyled onClick={handleNavigateToRegister}>Inscrever-se</SubscribeButtonStyled>
                    <p> Copyright © 2022. iHead</p>
                </div>
            </FooterStyled>

        </LandingPageSectionStyled>
    )
}
export default LandingPage;
