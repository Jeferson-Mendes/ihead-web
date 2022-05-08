import styled from "styled-components";

export const ArticleDetailSectionStyled = styled.div`
    background-color: ${({theme}) => theme.bgColorGray};
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ArticleDetailContainerStyled = styled.div`
    width: 90%;
    position: relative;
    top: -2rem;
    z-index: 4;
    justify-content: center;

    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'Article Article Author Author'
    'Article Article Comments Comments'
    'Article Article Comments Comments';
`
export const GridItemArticleStyled = styled.div`
    grid-area: Article;
    padding: 2rem;
    
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;
`

export const ArticleDetailContentStyled = styled.div`
    span:first-child {
        float: right;
    }
`

export const TitleArticleStyled = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
`

export const ContentArticleStyled = styled.div`
    margin-top: 2rem;

    p {
        text-align: justify;
        margin-top: 1rem;
    }
`

export const GridItemAuthorStyled = styled.div`
    grid-area: Author;

    text-align: start;
    padding: 1rem;
    width: 20rem;

    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    div:first-child {
        overflow-wrap: break-word;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        figure {
            width: 3.7rem;
            height: 3.7rem;

            img {
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        span {
            padding-left: 1rem;
            font-weight: bold;
        }
    }

    div:last-child {
        padding-top: 1rem;
        overflow-wrap: break-word;

        ul li {
            list-style: none;
            margin-top: 0.4rem;
        }
    }
`
export const GridItemCommentsStyled = styled.div`
    background-color: green;
    grid-area: Comments;
    width: 20rem;
    height: 100vh;

    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;
`

export const CommentListStyled = styled.div`
    padding: 1rem 1rem 4rem 1rem;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colorGray};
        border-radius: 0 0.7rem 0.7rem 0;
    }
`
export const CommentsQuantityStyled = styled.span`
    font-size: 0.8rem;
    color: ${({theme}) => theme.colorGray};
`

export const FormNewCommentStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin: 1rem 0 2rem 0;

    figure {
        width: 15%;
        img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            object-position: center;
            object-fit: cover;
        }
    }

    input {
        width: 85%;
        outline: none;
        border: none;
        color: ${({theme})=> theme.colorBlack03};
        border-bottom: 1px solid ${({theme})=> theme.colorBlack03};
    }
`

export const RecommendationContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 80vw;

`

export const ContentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ArticleRecommendationFieldStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70%;
`
export const ArticleStyled = styled.div`
    margin: 1rem;

    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;    
`