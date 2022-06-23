import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import './certificate.css';

import { ConfirmCertificateModalStyled, ConfirmModalFieldStyled } from './style';

interface IProps {
    modalIsOpen: boolean;
    closeModal(): void;
    userName?: string;
    hours: number;
}

const ConfirmCertificate:React.FC<IProps> = ({ modalIsOpen, closeModal, userName, hours }) => {
    const printDocument = () => {
        const input = document.getElementById("certificate");
        if (input) {
          html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            var imgHeight =  (canvas.height * 60) / 240;
            var imgWidth = (canvas.width * 70) / 240;
            const pdf = new jsPDF('l', 'mm', 'a4');
            pdf.addImage(imgData, 'png', 15, 2, imgWidth, imgHeight);
            pdf.save(`certificado.pdf`);
          });
        }
      };

    return (
        <ConfirmCertificateModalStyled modalIsOpen={modalIsOpen}>
            <ConfirmModalFieldStyled>
                <div id="certificate">
                    <h1>CERTIFICADO</h1>
                    <h3>iHead</h3>
                    <p>Certificamos que, para os devidos fins, o(a) aluno(a)</p>
                    <h3>{userName}</h3>
                    <p className='paragraph'>Participou ativamente na plataforma <b>iHead</b> com o compartilhamento de ideias e artigos. Contribuindo assim para a sua evolução e a evolução dos seus colegas. Além disso, o(a) mesmo(a), realizou as suas tarefas com êxito, alcançando <b>{hours} Horas</b>. </p>
                    <footer>
                        <p className="line"></p>
                        <p>Assinatura</p>
                    </footer>
                </div>
                <button className="btn-cancel" onClick={closeModal}> Cancelar </button>
                <button className="btn-download" onClick={printDocument}> Baixar </button>
            </ConfirmModalFieldStyled>

        </ConfirmCertificateModalStyled>
    )
}
export default ConfirmCertificate;
