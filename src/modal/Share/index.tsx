
import React from "react";
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

import {
    ShareFieldStyled,
    Title,
    SocialMediaContainerStyled,
    SubTitle,
    ShareContainerStyled,
    ButtonCopy,
    TitleHeaderStyled,
    } from './style';

interface IProps {
    link: string;
    modalIsOpen: boolean;
    closeModal(): void;
}

const Share:React.FC<IProps> = ({ link, closeModal, modalIsOpen }) => {
    const [title, setTitle] = React.useState<string>('Copiar');

    function handleCopy () {
        navigator.clipboard.writeText(link);
        setTitle('Copiado!')

        setTimeout(() => {
            setTitle('Copiar')
        }, 1000)
    }

    return (
        <ShareContainerStyled modalIsOpen={modalIsOpen}>
            <ShareFieldStyled>
                <TitleHeaderStyled>
                    <span onClick={closeModal}>X</span>
                    <Title>Compartilhar Artigo</Title>
                </TitleHeaderStyled>
                <hr style={{ width: '100%' }} />
                <SocialMediaContainerStyled>
                    <ul>
                        <li>
                        <WhatsappShareButton
                        title="Título da página"
                        url={link}
                        className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon/>
                        </WhatsappShareButton>
                        </li>
                        <li>
                        <FacebookShareButton
                        url={link}
                        >
                            <FacebookIcon/>
                        </FacebookShareButton>
                        </li>
                        <li>
                        <LinkedinShareButton
                        url={link}
                        >
                            <LinkedinIcon/>
                        </LinkedinShareButton>
                        </li>
                    </ul>
                </SocialMediaContainerStyled>
                <SubTitle>Ou copie o link</SubTitle>
                <input type="text" value={link} disabled/>
                <ButtonCopy onClick={handleCopy}>{title}</ButtonCopy>
            </ShareFieldStyled>
        </ShareContainerStyled>
    )
}
export default Share;
