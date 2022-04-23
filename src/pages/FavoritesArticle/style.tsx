import styled from "styled-components"

export const FavoritesArticleSectionStyled = styled.div`
    background-color: ${({theme}) => theme.bgColorGray};
    min-height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`



export const FavoritesArticleContainerStyled = styled.div`
    width: 70%;
    min-height: 100vh;
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;
    position: relative;
    padding: 4rem 2rem;
    top: -2rem;
    z-index: 4;

    h3 {
        color: ${({theme}) => theme.colorBlack02};
        border-bottom: 4px solid ${({theme}) => theme.lightGreen};
        width: 17rem;
    }
`

export const ArticlesFieldStyled = styled.div`
    width: 80%;

    margin: auto;
    margin-top: 4rem;
`