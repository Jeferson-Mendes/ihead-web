import React, { useContext } from "react";
// import CertificateDocument from "../../components/certificateDocument";
import { AuthContext } from "../../contexts/auth";
import { convertMinuteToHour } from "../../utils/convertMinuteToHour";
import ConfirmCertificate from "../ConfirmCertificate";

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
    const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);

    const [confirmCertificateModalIsOpen, setConfirmCertificateModalIsOpen] = React.useState<boolean>(false);
    const [hours, setHours] = React.useState<number>(-1);

    const { user } = useContext(AuthContext);

    const hoursOption: IHoursOptions[] = [
        {
            hours: '20 Horas',
            isAvailable: quantityHours ? quantityHours >= 20 * 60 : false,
        },
        {
            hours: '40 Horas',
            isAvailable: quantityHours ? quantityHours >= 40 * 60 : false,
        },
        {
            hours: '60 Horas',
            isAvailable: quantityHours ? quantityHours >= 60 * 60 : false,
        }
    ]

    function handleSelectArticle(index: number) {
        setSelectedIndex(index-1);

        switch (index) {
            case 1:
                if(hoursOption[0].isAvailable) {
                    setHours(20);
                    break
                }
                setHours(-1);
                break;
            case 2:
                if (hoursOption[1].isAvailable) {
                    setHours(40);
                    break
                }
                setHours(-1);
                break;
            case 3:
                if (hoursOption[2].isAvailable) {
                    setHours(60);
                    break;
                }
                setHours(-1);
                break;
            default:
                setHours(-1);
                break;
        }
    }

    const handleCloseModal = () => {
        confirmCertificateModalIsOpen ? setConfirmCertificateModalIsOpen(false) : setConfirmCertificateModalIsOpen(true);
    }

    const handleGetCertificate = () => {
        if (hours <= 0) {
            alert('Selecione alguma quantidade de horas.')
            return
        }

        if (quantityHours) {
            if (quantityHours < 20 * 60) {
                alert('Você ainda não possui interação suficiente com a plataforma para emitir certificado.')
                closeModal();
                return;
            }
        }
        confirmCertificateModalIsOpen ? setConfirmCertificateModalIsOpen(false) : setConfirmCertificateModalIsOpen(true);
    }

    return (
        <CertificateModalStyled modalIsOpen={modalIsOpen}>
            <ConfirmCertificate userName={user?.name} hours={hours} modalIsOpen={confirmCertificateModalIsOpen} closeModal={handleCloseModal} />
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
                    <h4>Você possui <b> { convertMinuteToHour(quantityHours || 0) } horas  </b> </h4>
                </QuantityHoursStyled>

                <HoursContainerStyled>
                    {hoursOption.map((hour, index) => (
                        <HourButtonStyled
                        key={index}
                        onClick={() => handleSelectArticle(index+1)}
                        index={selectedIndex}
                        isAvailable={hour.isAvailable}
                        > <h3>
                            <AvailableTextStyled isAvailable={hour.isAvailable} > { hour.isAvailable ? 'Disponível' : 'Bloqueado'} </AvailableTextStyled>
                            {hour.hours}</h3> </HourButtonStyled>
                    ))}
                    <div>
                        <h4>Certificado</h4>
                        <span>Requerido</span>
                        <DownloadButtonStyled onClick={handleGetCertificate}>Baixar</DownloadButtonStyled>
                    </div>
                </HoursContainerStyled>

            </ModalFieldStyled>
        </CertificateModalStyled>
    )
}
export default Certificate;
