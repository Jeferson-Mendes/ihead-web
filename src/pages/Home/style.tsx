import styled from "styled-components"

interface IGridFigure {
    imageUrl: string;
}

export const BeginningContainerStyled = styled.div`
    background-image: url('https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');
    height: 100vh;
    background-size: cover;
    background-position: center;
`

export const ContentFieldStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100vh;

    margin: auto;
`

export const ProfileAndSearchStyled = styled.div`
    width: 64%;
    height: 60%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const ProfileFieldStyled = styled.div`
    width: 90%;
    height: 60%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`
export const UserInfoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
        img {
            width: 7rem;
        }
    }

    div {
        padding: 2rem;
        h2,h3 {
            color: ${({theme}) => theme.colorWhite};
        }

        input {
            margin-top: 1rem;
            padding: 0.4rem 1rem;
            color: ${({theme}) => theme.colorWhite};
            background: transparent;
            cursor: pointer;

            border-radius: 0.4rem;
            border-width: 2px;
            border-style: solid;
            border-image: linear-gradient(to bottom, white, gray ) 1;
        }
    }
`

export const SearchFieldStyled = styled.div`
    width: 90%;
    form {
        text-align: center;
        input {
            width: 80%;
            padding: 0.6rem;
            border: none;
            outline: none;
            border-radius: 0.8rem 0 0 0.8rem;
        }
        button {
            padding: 0.6rem;
            border: none;
            color: ${({theme}) => theme.colorWhite};
            background-color: ${({theme}) => theme.fontColorDarkBlue};

            border-radius: 0 0.8rem 0.8rem 0;
            cursor: pointer;
        }
    }
`

export const ShortcutsContainerStyled = styled.div`
    width: 64%;
    height: 60%;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const FieldStyled = styled.div`
    background-color: ${({theme}) => theme.colorWhite};
    width: 90%;
    height: 100%;

    border-radius: 0.7rem;
    border: 1px solid ${({theme}) => theme.colorGray};
    p {
        padding: 1rem 0 0.4rem 1rem;
        color: ${({theme}) => theme.colorAllBlack};
        font-weight: bold;
    }
    `
export const GridContentStyled = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 10rem);
    gap: 0.7rem;

    /* margin-top: 2rem; */

`

export const GridStyled = styled.div<IGridFigure>`
    background: url(${(props) => props.imageUrl});

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 0.7rem;
    
    transform: scale(0.9);
    transition: all 400ms;
    
    height: 9rem;
    
    cursor: pointer;
    &:hover {
        transform: scale(1);
    }

    figcaption {
        background-color: ${({theme})=> theme.colorGray};
        width: 100%;
        height: 3rem;
        border-radius: 0 0 0.7rem 0.7rem;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
            color: ${({theme}) => theme.colorWhite};
            font-size: 0.9rem;
            width: 70%;
            text-align: center;
        }
    }
`