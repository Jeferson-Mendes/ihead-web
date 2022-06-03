
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
    commentId: string;
    modalIsOpen: boolean;
    closeModal(): void;
}

const DeleteComment:React.FC<IProps> = ({ commentId, closeModal, modalIsOpen }) => {
    const [loading, setLoading] = React.useState<boolean>(false);

    async function handleDeleteComment() {
        try {
            setLoading(true);
            await api.delete(`comments/delete/${commentId}`);
            setLoading(false);
            alert('Comentário removido com sucesso');
            closeModal()
            window.location.reload();
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
                    <Title>Confirmar ação</Title>
                </TitleHeaderStyled>
                <SubTitle>Tem certeza que deseja excluir este comentário?</SubTitle>
                {/* <input type="text" value={link} disabled/> */}
                <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
                <ButtonConfirm onClick={handleDeleteComment}> { loading ? <LoadingStyled/> : 'Excluir'} </ButtonConfirm>
            </ConfirmFieldStyled>
        </ConfirmDeleteContainerStyled>
    )
}
export default DeleteComment;
