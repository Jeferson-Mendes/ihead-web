import styled from "styled-components";

export const SearchContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 14rem;
    background-color: ${({theme}) => theme.bgColorGray};
`

export const ArticlesContainerStyled = styled.div`
    background-color: ${({theme}) => theme.colorWhite};
    width: 70%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-top: 7px solid ${({theme}) => theme.fontColorDarkBlue};
`

export const HeaderContainerStyled = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; */
    width: 80%;
    `
export const ArrowLeft = styled.div`
    border-top: 2px solid ${({theme}) => theme.colorGray};
    border-left: 2px solid ${({theme}) => theme.colorGray};
    transform: rotate(-45deg);
    width: 1rem;
    height: 1rem;
    cursor: pointer;
`
export const ArrowRight = styled.div`
    border-top: 2px solid ${({theme}) => theme.colorGray};
    border-right: 2px solid ${({theme}) => theme.colorGray};
    transform: rotate(45deg);
    width: 1rem;
    height: 1rem;
    cursor: pointer;
`

export const CategoryFieldStyled = styled.div`
    display: flex;
    border-bottom: 2px solid ${({theme}) => theme.colorGray200};
    width: 100%;
    align-items: center;
    justify-content: center;
    ul {
        padding: 1.4rem;
        li {
            float: left;
            list-style: none;
            padding: 0.2rem;
            margin: 0 0.4rem;
            border-radius: 2rem;
            border: 2px solid ${({theme}) => theme.colorGray200};
            color: ${({theme}) => theme.colorGray700};
            font-size: 0.8rem;
            cursor: pointer;
        }
    }
`

export const ResultsCountFieldStyled = styled.div`
    margin-top: 2rem;
    border-top: 2px solid ${({theme}) => theme.colorGray200};
    span {
        display: inline-block;
        padding: 1rem;
        color: ${({theme}) => theme.colorGray};
        font-size: 0.8rem;
    }
`