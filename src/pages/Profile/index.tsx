import React, { useContext } from "react";
import Article from "../../components/article";
import Navbar from "../../components/Navbar";

import {
    ProfileContainerStyled,
    GridProfileContainerStyled,
    GridItemProfileFieldStyled,
    GridItemActionsStyled,
    // GridItemControlPanelStyled,
    GridItemPublicationsStyled,
    ArticleFieldStyled,
    ModerationButtonStyled,
    ActionButtonStyled,
}
from './style';

import { AuthContext } from "../../contexts/auth";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Certificate from "../../modal/Certificate";
import { getAvatarPath } from "../../utils/getAvatarPath";
import api from "../../service/api";
import { IArticle, IUser } from "../../ts/interfaces";
import { UserRoleEnum } from "../../ts/enum";
import BasicPagination from "../../components/pagination";

const Profile:React.FC = () => {
    const { user } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    const [currentUser, setCurrentUser] = React.useState<IUser>();
    const [userArticles, setUserArticles] = React.useState<{article: IArticle, isFavorite: boolean}[]>([]);
    const [totalPages, setTotalPages] = React.useState<number>(0);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    React.useEffect(() => {
        async function getUserArticles(userId:string) {
            try {
                const response = await api.get(`/articles/by-user/${userId}`);
                setUserArticles(response.data.articles);
                const results = response.data.resultsNumber;
                setTotalPages(Math.ceil(results/10))
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            }
        }

        getUserArticles(user ? user.id : '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function handleGoPage(page: number) {
        try {
            const response = await api.get(`/articles/by-user/${user ? user.id : ''}?limit=${10}&page=${page}`);
            setUserArticles(response.data.articles);
            // setResultsNumber(response.data.resultsNumber);
            // setTotalPages(Math.ceil(response.data.resultsNumber/10));
        } catch (error:any) {
            alert(error.response.data.message);
            return;
        }
    }

    return (
        <>
        <Certificate modalIsOpen={modalIsOpen} closeModal={handleCloseModal} quantityHours={currentUser?.contributionTotalHours}/>
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
                        <p>Publicações: <span> { currentUser?.publicationsNumber || '' } </span></p>
                        <p>Comentários: <span> { currentUser?.commentsNumber || '' } </span></p>
                    </div>

                </GridItemProfileFieldStyled>

                <GridItemActionsStyled>
                    <div>
                        <ActionButtonStyled> <Link to='/editar'>Editar Cadastro</Link> </ActionButtonStyled>
                        <ActionButtonStyled> <Link to='/artigo/criar'>Fazer Publicação</Link> </ActionButtonStyled>
                        <ActionButtonStyled onClick={handleCloseModal}> Emitir Certificado </ActionButtonStyled>
                        <ActionButtonStyled> <Link to='/favoritos'>Favoritos</Link> </ActionButtonStyled>
                      { user?.userRole === UserRoleEnum.MODERATOR ? <ModerationButtonStyled> <Link to='/denuncias/gerenciar'>Moderação</Link> </ModerationButtonStyled> : '' } 
                    </div>

                </GridItemActionsStyled>

                {/* <GridItemControlPanelStyled>
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

                </GridItemControlPanelStyled> */}

                <GridItemPublicationsStyled>
                    <h4>Publicações</h4>

                    <ArticleFieldStyled>
                        {userArticles.map(article => (

                            <Article
                            key={article.article.id}
                            isFavorite={article.isFavorite}
                            articleId={article.article.id}
                            authorName={article.article.author.name}
                            category={article.article.category}
                            description={article.article.description}
                            title={article.article.title}
                            views={article.article.views}
                            coverImagePath={article.article.coverImage?.secure_url}

                            />
                        ))}

                    </ArticleFieldStyled>
                    
                    <BasicPagination handleGoPage={handleGoPage} totalPages={totalPages}/>

                </GridItemPublicationsStyled>
            </GridProfileContainerStyled>
        </ProfileContainerStyled>
        </>
    )
}
export default Profile;