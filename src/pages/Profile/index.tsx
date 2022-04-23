import React, { useContext } from "react";
import Article from "../../components/article";
import Navbar from "../../components/Navbar";

import {
    ProfileContainerStyled,
    GridProfileContainerStyled,
    GridItemProfileFieldStyled,
    GridItemActionsStyled,
    GridItemControlPanelStyled,
    GridItemPublicationsStyled,
    ArticleFieldStyled,
    ControlPanelStyled,
    ControlPanelInfoFieldStyled,
    ControlPanelTitleStyled,
    ModerationButtonStyled,
    ActionButtonStyled,
}
from './style';

import publicationsIcon from '../../assets/publication.svg';
import commentsIcon from '../../assets/comments.svg';
import hoursIcon from '../../assets/hours.svg';
import avatarIcon from '../../assets/avatar.svg';
import { AuthContext } from "../../contexts/auth";
import { format } from "date-fns";
import { IUser } from "../../interfaces";
import api from "../../service/api";
import { Link } from "react-router-dom";
import Certificate from "../../modal/Certificate";

const Profile:React.FC = () => {
    const { user } = useContext(AuthContext);
    const [userDetail, setUserDetail] = React.useState<IUser | undefined>();
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        async function getUser() {
            const response = await api.get(`/users/${user?.id}`)
            setUserDetail(response.data.user)
        }

        getUser();
    })

    const handleCloseModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    }

    return (
        <>
        <Certificate modalIsOpen={modalIsOpen} closeModal={handleCloseModal}/>
        <Navbar hasHeader={true} headerTitle="Perfil"/>
        <ProfileContainerStyled>
            <GridProfileContainerStyled>
                <GridItemProfileFieldStyled>
                    <div>
                        <img src={userDetail?.picture ? `${userDetail?.picture}` : (userDetail?.resource ? userDetail?.resource.secure_url : avatarIcon) } alt="avatarIcon" />
                        <h3>{ user?.name }</h3>
                    </div>

                    <div>
                        <p>Desde: <span> { user ? format(new Date(user.createdAt), 'dd/MM/YYY') : '' } </span></p>
                        <p>E-mail: <span> { user?.email } </span></p>
                        <p>Período/Semestre: <span> { user?.semester || '' } </span></p>
                    </div>

                </GridItemProfileFieldStyled>

                <GridItemActionsStyled>
                    <div>
                        <ActionButtonStyled> <Link to='/editar'>Editar Cadastro</Link> </ActionButtonStyled>
                        <ActionButtonStyled> <Link to='/'>Fazer Publicação</Link> </ActionButtonStyled>
                        <ActionButtonStyled onClick={handleCloseModal}> Emitir Certificado </ActionButtonStyled>
                        <ActionButtonStyled> <Link to='/'>Favoritos</Link> </ActionButtonStyled>
                        <ModerationButtonStyled> <Link to='/'>Moderação</Link> </ModerationButtonStyled>
                    </div>

                </GridItemActionsStyled>

                <GridItemControlPanelStyled>
                    <ControlPanelTitleStyled>Painel de Controle</ControlPanelTitleStyled>
                    
                    <ControlPanelStyled>
                        <ControlPanelInfoFieldStyled>
                            <h4>PUBLICAÇÕES</h4>
                            <div>
                                <p>3</p>
                                <img src={publicationsIcon} alt="publicarionsIcon" />
                            </div>
                        </ControlPanelInfoFieldStyled>

                        <ControlPanelInfoFieldStyled>
                            <h4>COMENTÁRIOS</h4>
                            <div>
                                <p>8</p>
                                <img src={commentsIcon} alt="publicarionsIcon" />
                            </div>
                        </ControlPanelInfoFieldStyled>

                        <ControlPanelInfoFieldStyled>
                            <h4>HORAS</h4>
                            <div>
                                <p>00:00</p>
                                <img src={hoursIcon} alt="publicarionsIcon" />
                            </div>
                        </ControlPanelInfoFieldStyled>

                    </ControlPanelStyled>

                </GridItemControlPanelStyled>

                <GridItemPublicationsStyled>
                    <h4>Publicações</h4>

                    <ArticleFieldStyled>
                        <Article isFavorite={false}/>
                        <Article isFavorite={false}/>
                        <Article isFavorite={false}/>
                        <Article isFavorite={false}/>

                    </ArticleFieldStyled>
                    
                </GridItemPublicationsStyled>
            </GridProfileContainerStyled>
        </ProfileContainerStyled>
        </>
    )
}
export default Profile;