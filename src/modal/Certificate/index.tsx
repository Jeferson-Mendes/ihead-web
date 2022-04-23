import React from "react";

import {
    CertificateModalStyled,
    TextContainerStyled,
    HoursContainerStyled,
    HourButtonStyled,
    DownloadButtonStyled,
    ModalFieldStyled
} from './style';

interface IProps {
    modalIsOpen: boolean;
    closeModal(): void;
}

const Certificate:React.FC<IProps> = ({ modalIsOpen, closeModal }) => {

    return (
        <CertificateModalStyled modalIsOpen={modalIsOpen}>
            <ModalFieldStyled>
                <span onClick={closeModal} >X</span>
                <TextContainerStyled>
                    <h2>Conquiste agora seu certificado!</h2>
                    <span>
                    Escolha a quantidade de horas que você conseguiu de acordo
                    com o painel geral do seu perfil e clique em baixar.
                    </span>
                    <div></div>
                </TextContainerStyled>

                <HoursContainerStyled>
                    <HourButtonStyled> <h3>20 Horas</h3> </HourButtonStyled>
                    <HourButtonStyled> <h3>40 Horas</h3> </HourButtonStyled>
                    <HourButtonStyled> <h3>60 Horas</h3> </HourButtonStyled>
                    <div>
                        <h4>Certificado</h4>
                        <span>Requerido</span>
                        <DownloadButtonStyled>Baixar</DownloadButtonStyled>
                    </div>
                </HoursContainerStyled>

            </ModalFieldStyled>
        </CertificateModalStyled>
    )
}
export default Certificate;
