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
    const [hoursOption, setHoursOption] = React.useState<string[]>(['20 Horas', '40 Horas', '60 Horas']);
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

    function handleSelectArticle(index: number) {
        setSelectedIndex(index);
    }

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
                    {hoursOption.map((hour, index) => (
                        <HourButtonStyled
                        key={index}
                        onClick={() => handleSelectArticle(index)}
                        index={selectedIndex}
                        > <h3>{hour}</h3> </HourButtonStyled>
                    ))}
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
