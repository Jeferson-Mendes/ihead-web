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
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { getAvatarPath } from "../../utils/getAvatarPath";
import Share from "../../modal/Share";

const ArticleDetail:React.FC = () => {

    const [article, setArticle] = React.useState<IArticle | null>(null);
    const [commentsData, setCommentsData] = React.useState<IComment[]>([]);
    const [newComment, setNewComment] = React.useState<string>("");
    const [commentsQuantity, setCommentsQuantity] = React.useState<number>(0);
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const { articleId } = location.state as any;

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
        
    }, [])

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
    },[])

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
        try {
            await api.post('/reports', { publication: articleId });
            alert('Publicação reportada.')
            navigate('/')
            return;
        } catch (error: any) {
            alert(error.response.data.message);
            return;
        }
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

    return (
        <>
        <Navbar hasHeader={true} hasArrowBack={true}/>
        <Share closeModal={handleCloseModal} modalIsOpen={modalIsOpen} link={'https://github.com/jeferson-mendes'} />
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
                    <ArrowLeft/>
                    <ArticleRecommendationFieldStyled>
                        <ArticleStyled>
                            {/* <Article isFavorite={false} isRecommendation={true}/> */}
                        </ArticleStyled>
                        <ArticleStyled>
                            {/* <Article isFavorite={false} isRecommendation={true}/> */}
                        </ArticleStyled>
                    </ArticleRecommendationFieldStyled>
                    <ArrowRight/>
                </ContentStyled>
            </RecommendationContainerStyled>
        </ArticleDetailSectionStyled>
        </>
    )
}
export default ArticleDetail;
