import styled from "styled-components"

export const ArticleContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-top: 2px solid ${({theme}) => theme.colorGray200};

    width: 100%;
    padding: 1rem;
`
export const ImageContainerStyled = styled.div`
    width: 20rem;
    height: 8rem;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;

        border-radius: 0.7rem;

        object-fit: cover;
        object-position: center;
    }
`

export const InfoContainerStyled = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 2rem;
    width: 100%;
    `
export const TitleFieldStyled = styled.div`
    width: 100%;
    cursor: pointer;
    img {
        width: 1rem;
        float: right;
        cursor: pointer;
    }

    p {
        color: ${({theme}) => theme.colorGray500};
        font-size: 0.7rem;
    }

    h4 {
        color: ${({theme}) => theme.colorGray700};
        font-size: 1rem;
    }
`
export const DescriptionFieldStyled = styled.div`
    padding: 1rem 0;
    span {
        color: ${({theme}) => theme.colorGray500};

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        font-size: 0.7rem;
    }
`
export const AditionalInfoFieldStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        color: ${({theme}) => theme.colorGray700};
        font-size: 0.7rem;
    }
`