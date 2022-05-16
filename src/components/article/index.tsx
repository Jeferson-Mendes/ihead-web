import React from "react";

import { 
    ArticleContainerStyled,
    ImageContainerStyled,
    InfoContainerStyled,
    TitleFieldStyled,
    DescriptionFieldStyled,
    AditionalInfoFieldStyled,
 } from './style';

 import heartRegularIcon from '../../assets/heart-regular.svg';
 import heartSolidIcon from '../../assets/heart-solid.svg';
import { useNavigate } from "react-router-dom";
import api from "../../service/api";

 interface IProps {
     isFavorite: boolean;
     isRecommendation?: boolean;
     title: string;
     description: string;
     authorName: string;
     category: string;
     views: number;
     articleId: string;
     coverImagePath?: string;
 }

const Article:React.FC<IProps> = ({
    isFavorite,
    isRecommendation = false,
    authorName,
    category,
    description,
    title,
    views,
    articleId,
    coverImagePath
}) => {
    const [isFavoriteArticle, setIsFavoriteArticle] = React.useState<boolean>(isFavorite);
    const navigate = useNavigate();

    const handleNavigateToArticleDetail = () => {
        navigate('/artigo', { state: { articleId } })
    }

    const handleFavorite = async () => {
        if (isFavorite) {
            await api.delete(`/articles/remove-favorite/${articleId}`)
            setIsFavoriteArticle(false);
            return;
        }
        await api.post(`/articles/add-favorite/${articleId}`)
        setIsFavoriteArticle(true)
        return;
    }
    return (
        <ArticleContainerStyled>
            <ImageContainerStyled>
                <img onClick={handleNavigateToArticleDetail} src={coverImagePath ? coverImagePath : "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmclMjBsYW5ndWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="bgArticle" />
            </ImageContainerStyled>
            <InfoContainerStyled>

                <TitleFieldStyled>
                    {!isRecommendation ? (
                        <img
                        src={ isFavoriteArticle? heartSolidIcon : heartRegularIcon }
                        alt="heartSolidIcon"
                        onClick={handleFavorite}
                        />
                    ) : ''}
                    <p onClick={handleNavigateToArticleDetail}>{ category }</p>
                    <h4 onClick={handleNavigateToArticleDetail}>{ title }</h4>
                </TitleFieldStyled>

                <DescriptionFieldStyled onClick={handleNavigateToArticleDetail}>
                    {!isRecommendation ? (
                    <span>{description}</span>

                    ) : ''}
                </DescriptionFieldStyled>
                <AditionalInfoFieldStyled>
                    <p> {!isRecommendation ? `(${views} Vizualizações)` : ''} </p>
                    <p>{ authorName }</p>
                </AditionalInfoFieldStyled>
            </InfoContainerStyled>
        </ArticleContainerStyled>
    )
}

export default Article;
