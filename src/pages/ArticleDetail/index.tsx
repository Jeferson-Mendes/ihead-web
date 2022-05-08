import React, { FormEvent, useContext } from "react";
import Navbar from '../../components/Navbar';
import 'react-quill/dist/quill.snow.css';

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
} from './style';

import FavoriteIcon from '../../assets/heart-regular.svg';
import Comment from "../../components/comment";
// import Article from "../../components/article";
import { ArrowLeft, ArrowRight } from "../Search/style";
import { IArticle, IComment } from "../../ts/interfaces";
import api from "../../service/api";
import { format, parseISO } from "date-fns";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { getAvatarPath } from "../../utils/getAvatarPath";

const ArticleDetail:React.FC = () => {

    const [article, setArticle] = React.useState<IArticle | null>(null);
    const [commentsData, setCommentsData] = React.useState<IComment[]>([]);
    const [newComment, setNewComment] = React.useState<string>("");
    const [commentsQuantity, setCommentsQuantity] = React.useState<number>(0);

    const { user } = useContext(AuthContext);
    const location = useLocation();

    const { articleId } = location.state as any;

    React.useEffect(() => {
        const getArticle = async (articleId: string) => {
            try {
                const response = await api.get(`articles/${articleId}`);

                setArticle(response.data.article);
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

    return (
        <>
        <Navbar hasHeader={true} hasArrowBack={true}/>
        <ArticleDetailSectionStyled>
            <ArticleDetailContainerStyled>
                <GridItemArticleStyled>
                <ArticleDetailContentStyled>
                    <span>
                        <img src={FavoriteIcon} alt="favoriteIcon" />
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
