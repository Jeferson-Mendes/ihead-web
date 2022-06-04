import React, { FormEvent, useContext } from "react";
import Navbar from '../../components/Navbar';
import 'react-quill/dist/quill.snow.css';
import { Share as ShareIcon } from 'react-feather';

import {
    ArticleDetailSectionStyled,
    ArticleDetailContainerStyled,
    GridItemArticleStyled,
    GridItemAuthorStyled,
    GridItemCommentsStyled,
    ArticleDetailContentStyled,
    ContentArticleStyled,
    TitleArticleStyled,
    CommentListStyled,
    CommentsQuantityStyled,
    RecommendationContainerStyled,
    ArticleRecommendationFieldStyled,
    ArticleStyled,
    ContentStyled,
    FormNewCommentStyled,
    ArticleFooterInfo
} from './style';

import FavoriteIcon from '../../assets/heart-regular.svg';
import HeartIcon from '../../assets/heart-solid.svg';
import reportImg from '../../assets/report.svg';
import Comment from "../../components/comment";
// import Article from "../../components/article";
import { ArrowLeft, ArrowRight } from "../Search/style";
import { IArticle, IComment } from "../../ts/interfaces";
import api from "../../service/api";
import { format, parseISO } from "date-fns";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { getAvatarPath } from "../../utils/getAvatarPath";
import Share from "../../modal/Share";
import ModalReport from "../../modal/ModalReport";
import Article from "../../components/article";

const ArticleDetail:React.FC = () => {

    const [article, setArticle] = React.useState<IArticle | null>(null);
    const [articleRecommendations, setArticleRecommendations] = React.useState<{article: IArticle; isFavorite: boolean}[] | null>(null);
    const [startPositionRecommentation, setStartPositionRecommendation] = React.useState<number>(0);
    const [commentsData, setCommentsData] = React.useState<IComment[]>([]);
    const [newComment, setNewComment] = React.useState<string>("");
    const [commentsQuantity, setCommentsQuantity] = React.useState<number>(0);
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    const [modalReportIsOpen, setModalReportIsOpen] = React.useState<boolean>(false);

    const { user } = useContext(AuthContext);
    const location = useLocation();
    // const navigate = useNavigate();

    const { articleId, category } = location.state as any;

    React.useEffect(() => {
        
        const getArticle = async (articleId: string) => {
            try {
                const response = await api.get(`articles/${articleId}`);

                setArticle(response.data.article);
                setIsFavorite(response.data.isFavorite)
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            }
        }

        getArticle(String(articleId))

    }, [articleId, category])

    React.useEffect(() => {
        const getComments = async (articleId: string) => {
            try {
                const response = await api.get(`comments/get-by-article/${articleId}`);

                setCommentsData(response.data.comments);
                setCommentsQuantity(response.data.quantity);
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            }
        }

        getComments(String(articleId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[articleId, category])

    React.useEffect(() => {
        const getArticleRecommendations = async (category?: string) => {
            try {
                const response = await api.get(`articles?limit=${4}&page=${1}&categories=${category}`);
                const articles = response.data.articles.filter((article: any) => article.article.id !== articleId);
                console.log(articles)
                setArticleRecommendations(articles);
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            }
        }

        getArticleRecommendations(category);
    },[articleId, category])

    const setContent = (content: string) => {
        const str = content.replace(/\\n/g, '\n');

        return str;
    }

    const handleAddNewComment = async (event: FormEvent) => {
        event.preventDefault()

        setNewComment("")

        const newCommentData = {
            article: articleId,
            comment: newComment
        }

        try {
            const response = await api.post('/comments', newCommentData)

            setCommentsData([response.data.comment, ...commentsData]);
            setCommentsQuantity(commentsQuantity + 1);
        } catch (error: any) {
            alert(error.response.data.message);
                return;
        }
    }

    async function handleMakeReport(articleId?: string): Promise<void> {
        setModalReportIsOpen(true);
    }

    async function handleFavoriteArticle() {
        if (isFavorite) {
            try {
                await api.delete(`/articles/remove-favorite/${articleId}`)
                setIsFavorite(false);
                return;
            } catch (error: any) {
                alert(error.response.data.message);
            }
        } else {
            try {
                await api.post(`/articles/add-favorite/${articleId}`)
                setIsFavorite(true)
                return;
            } catch (error: any) {
                alert(error.response.data.message);
            }
        }
    }

    const handleCloseModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const handleCloseModalReport = () => {
        setModalReportIsOpen(!modalReportIsOpen);
    }

    const handleRightClickRecommendation = () => {
        if (startPositionRecommentation === 0) {
            setStartPositionRecommendation(2)
        } else if (startPositionRecommentation === 2) {
            setStartPositionRecommendation(0)
        }
    }

    return (
        <>
        <Navbar hasHeader={true} hasArrowBack={true}/>
        <Share closeModal={handleCloseModal} modalIsOpen={modalIsOpen} link={'https://github.com/jeferson-mendes'} />
        <ModalReport
        closeModal={handleCloseModalReport}
        modalIsOpen={modalReportIsOpen}
        articleId={articleId}
        />
        <ArticleDetailSectionStyled>
            <ArticleDetailContainerStyled>
                <GridItemArticleStyled>
                <ArticleDetailContentStyled>
                    <span onClick={handleFavoriteArticle}>
                        <img src={isFavorite ? HeartIcon : FavoriteIcon} alt="favoriteIcon" />
                    </span>
                    <TitleArticleStyled>
                        <h2>{article?.title}</h2>
                        <span>{article?.category}</span>
                    </TitleArticleStyled>
                    <ContentArticleStyled>
                    <div className="ql-snow">
                        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: setContent(article ? article.articleContent: '')}}>
                        
                        </div>
                    </div>
                    </ContentArticleStyled>
                </ArticleDetailContentStyled>
                <ArticleFooterInfo>
                    <div onClick={() => handleMakeReport(article?.id)}>
                        <img src={reportImg} alt="reportImg" />
                        <span>{`(${article?.views} Visualizações)`}</span>
                    </div>
                    <div>
                        <ShareIcon onClick={handleCloseModal} style={{cursor: 'pointer'}}/>
                    </div>
                </ArticleFooterInfo>
                </GridItemArticleStyled>
                <GridItemAuthorStyled>
                <div>
                    <figure>
                        <img src={ article ? getAvatarPath(article.author): ''} alt="avatarIcon" />
                    </figure>
                    <span>{article?.author.name}</span>
                </div>
                <div>
                    <ul>
                        <li> <b>Email:</b>{article?.author.email }</li>
                        <li> <b>Desde:</b>{ article ? format(parseISO((article.author.createdAt).toString()), 'dd/MM/YYY') : '' }</li>
                        <li> <b>Registros:</b>{ article?.author.publicationsNumber }</li>
                        <li> <b>Horas:</b>{ article?.author.contributionTotalHours }</li>
                    </ul>
                </div>

                </GridItemAuthorStyled>

                <GridItemCommentsStyled>
                    <CommentListStyled>
                        <CommentsQuantityStyled>{commentsQuantity} Comentários</CommentsQuantityStyled>
                        <FormNewCommentStyled onSubmit={handleAddNewComment}>
                            <figure>
                                    <img
                                    src={ user ? getAvatarPath(user): '' }
                                    alt="avatar"
                                     />
                            </figure>
                            <label htmlFor="newComment"></label>
                            <input
                            type="text"
                            name="newComment"
                            id="newComment"
                            placeholder="Adicionar um comentário público"
                            value={newComment}
                            onChange={(event) => setNewComment(event.target.value)}
                            />
                        </FormNewCommentStyled>
                        { commentsData.map(comment => (
                        <Comment
                        commentId={comment.id}
                        isOwner={ comment.user.id.toString() === user?.id.toString() }
                        authorName={comment.user.name}
                        comment={comment.commentContent}
                        hour={(comment.createdAt).toString()}
                        authorPath={getAvatarPath(comment.user)}
                        key={comment.id}
                        /> ) ) }
                        
                        

                    </CommentListStyled>
                </GridItemCommentsStyled>
            </ArticleDetailContainerStyled>

            <RecommendationContainerStyled>
                <h4>Recomendações</h4>
                <ContentStyled>
                    <ArrowLeft onClick={handleRightClickRecommendation} />
                    <ArticleRecommendationFieldStyled>
                        { articleRecommendations ? articleRecommendations?.slice(startPositionRecommentation, startPositionRecommentation + 2).map(article => (
                            <ArticleStyled key={article.article.id}>
                                <Article
                                isFavorite={false}
                                isRecommendation={true}
                                articleId={article.article.id}
                                authorName={article.article.author.name}
                                category={article.article.category}
                                description={article.article.description}
                                title={article.article.title}
                                views={article.article.views}
                                coverImagePath={article.article.coverImage?.secure_url}
                                />
                            </ArticleStyled>
                        )) : '' }
                    </ArticleRecommendationFieldStyled>
                    <ArrowRight onClick={handleRightClickRecommendation}/>
                </ContentStyled>
            </RecommendationContainerStyled>
        </ArticleDetailSectionStyled>
        </>
    )
}
export default ArticleDetail;
