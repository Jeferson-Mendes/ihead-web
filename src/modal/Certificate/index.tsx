import React from "react";

import {
    CertificateModalStyled,
    TextContainerStyled,
    HoursContainerStyled,
    HourButtonStyled,
    DownloadButtonStyled,
    ModalFieldStyled,
    AvailableTextStyled,
    QuantityHoursStyled,
} from './style';

interface IProps {
    modalIsOpen: boolean;
    closeModal(): void;
    quantityHours?: number;
}

interface IHoursOptions {
    hours: string;
    isAvailable: boolean;
}

const Certificate:React.FC<IProps> = ({ modalIsOpen, closeModal, quantityHours }) => {
    const hoursOption: IHoursOptions[] = [
        {
            hours: '20 Horas',
            isAvailable: true,
        },
        {
            hours: '40 Horas',
            isAvailable: true,
        },
        {
            hours: '60 Horas',
            isAvailable: false,
        }
    ]

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
                    Escolha a quantidade de horas que você conseguiu e clique em baixar
Deve aparecer a palavra “Disponível” na cor verde indicando que suas horas foram completadas
Enquanto você não publicar e comentar na plataforma todos os itens abaixo não será liberada!
                    </span>
                    <div></div>
                </TextContainerStyled>

                <QuantityHoursStyled>
                    <h4>Você possui <b> { quantityHours } horas  </b> </h4>
                </QuantityHoursStyled>

                <HoursContainerStyled>
                    {hoursOption.map((hour, index) => (
                        <HourButtonStyled
                        key={index}
                        onClick={() => handleSelectArticle(index)}
                        index={selectedIndex}
                        isAvailable={hour.isAvailable}
                        > <h3>
                            <AvailableTextStyled isAvailable={hour.isAvailable} > { hour.isAvailable ? 'Disponível' : 'Bloqueado'} </AvailableTextStyled>
                            {hour.hours}</h3> </HourButtonStyled>
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
