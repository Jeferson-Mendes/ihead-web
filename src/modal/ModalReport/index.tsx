
import React from "react";
import api from "../../service/api";
import { X } from 'react-feather';

import {
    Title,
    SubTitle,
    ConfirmDeleteContainerStyled,
    ConfirmFieldStyled,
    ButtonConfirm,
    ButtonCancel,
    TitleHeaderStyled,
    } from './style';
import { LoadingStyled } from "../../pages/Signin/style";

interface IProps {
    articleId?: string;
    commentId?: string;
    modalIsOpen: boolean;
    closeModal(): void;
}

const ModalReport:React.FC<IProps> = ({ articleId, commentId, closeModal, modalIsOpen }) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [reason, setReason] = React.useState<string>('');

    async function handleDeleteComment() {
        let data;

        if (articleId) {
            data = {
                publication: articleId,
                reason
            }
        } else if (commentId) {
            data = {
                comment: commentId,
                reason,
            }
        }

        try {
            setLoading(true)
            await api.post('/reports', data);
            alert('Publicação reportada.')
            setLoading(false)
            setReason('')
            closeModal()
            return;
        } catch (error: any) {
            alert(error.response.data.message);
            return;
        }
    }

    return (
        <ConfirmDeleteContainerStyled modalIsOpen={modalIsOpen}>
            <ConfirmFieldStyled>
                <TitleHeaderStyled>
                    <div>
                        <span onClick={closeModal}>
                            <X/>
                        </span>
                    </div>
                    <Title>Por que você quer denunciar essa publicação?</Title>
                </TitleHeaderStyled>
                <SubTitle>Descreva os detalhes de sua denúncia</SubTitle>
                <input type="text" placeholder="Nos informe aqui o motivo da denúncia" onChange={(event) => setReason(event.target.value)}/>
                <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
                <ButtonConfirm onClick={handleDeleteComment}> { loading ? <LoadingStyled/> : 'Denunciar'} </ButtonConfirm>
            </ConfirmFieldStyled>
        </ConfirmDeleteContainerStyled>
    )
}
export default ModalReport;
