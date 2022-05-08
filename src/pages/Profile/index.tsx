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
import { AuthContext } from "../../contexts/auth";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Certificate from "../../modal/Certificate";
import { getAvatarPath } from "../../utils/getAvatarPath";
import api from "../../service/api";
import { IArticle, IUser } from "../../ts/interfaces";

const Profile:React.FC = () => {
    const { user } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    const [currentUser, setCurrentUser] = React.useState<IUser>();
    const [userArticles, setUserArticles] = React.useState<IArticle[]>([]);


    const handleCloseModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    }

    React.useEffect(() => {
        async function getCurrentUser(id:string) {
            try {
                const response = await api.get(`/users/${id}`);
                setCurrentUser(response.data.user);
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            }
        }

        getCurrentUser(user ? user.id : '');
    },[])

    React.useEffect(() => {
        async function getUserArticles(userId:string) {
            try {
                const response = await api.get(`/articles/by-user/${userId}`);
                setUserArticles(response.data.articles);
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            }
        }

        getUserArticles(user ? user.id : '');
    },[])

    return (
        <>
        <Certificate modalIsOpen={modalIsOpen} closeModal={handleCloseModal}/>
        <Navbar hasHeader={true} headerTitle="Perfil"/>
        <ProfileContainerStyled>
            <GridProfileContainerStyled>
                <GridItemProfileFieldStyled>
                    <div>
                        <img src={ currentUser ? getAvatarPath(currentUser): '' } alt="avatarIcon" />
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
                        <ActionButtonStyled> <Link to='/artigo/criar'>Fazer Publicação</Link> </ActionButtonStyled>
                        <ActionButtonStyled onClick={handleCloseModal}> Emitir Certificado </ActionButtonStyled>
                        <ActionButtonStyled> <Link to='/'>Favoritos</Link> </ActionButtonStyled>
                        <ModerationButtonStyled> <Link to='/denuncias/gerenciar'>Moderação</Link> </ModerationButtonStyled>
                    </div>

                </GridItemActionsStyled>

                <GridItemControlPanelStyled>
                    <ControlPanelTitleStyled>Painel de Controle</ControlPanelTitleStyled>
                    
                    <ControlPanelStyled>
                        <ControlPanelInfoFieldStyled>
                            <h4>PUBLICAÇÕES</h4>
                            <div>
                                <p>{ currentUser?.publicationsNumber }</p>
                                <img src={publicationsIcon} alt="publicarionsIcon" />
                            </div>
                        </ControlPanelInfoFieldStyled>

                        <ControlPanelInfoFieldStyled>
                            <h4>COMENTÁRIOS</h4>
                            <div>
                                <p>{ currentUser?.commentsNumber }</p>
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
                        {userArticles.map(article => (

                            <Article
                            key={article.id}
                            isFavorite={false}
                            articleId={article.id}
                            authorName={article.author.name}
                            category={article.category}
                            description={article.description}
                            title={article.title}
                            views={article.views}
                            coverImagePath={article.coverImage?.secure_url}

                            />
                        ))}

                    </ArticleFieldStyled>
                    
                </GridItemPublicationsStyled>
            </GridProfileContainerStyled>
        </ProfileContainerStyled>
        </>
    )
}
export default Profile;