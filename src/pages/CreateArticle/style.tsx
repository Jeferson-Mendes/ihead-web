import styled from "styled-components";

export const EditorSectionStyled = styled.div`
    background-color: ${({theme}) => theme.bgColorGray};
    min-height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const EditorContainerStyled = styled.div`
    width: 70%;
    min-height: 100vh;
    /* border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite}; */
    border-radius: 0.7rem;
    position: relative;
    /* padding: 2rem; */
    top: -2rem;
    z-index: 4;
`

export const ArticleHeaderStyled = styled.div`
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding: 1.7rem 0;
`

export const ArticleTitleStyled = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 1rem;

    div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        select {
            background: transparent;
            border: none;
            height: 2rem;
        }
    }
    
    div:first-child {
        width: 50%;

        label {
            color: ${({theme})=> theme.colorGray};
        }

        input {
            width: 100%;
            height: 2rem;
            padding: 0.7rem;
        }
     }
`

export const TextEditorContainer = styled.div`
    margin-top: 1.4rem;
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding: 1rem;
`

export const ArticleDescriptionStyled = styled.div`
    padding-top: 2rem;
    span {
        display: block;
        color: ${({theme})=> theme.colorGray};
    }

    textarea {
        margin: 1rem 0.4rem 1rem 0;
        padding: 0.4rem;
        font-family: 'Rubik', sans-serif;
    }
`

export const RefLinksContainerStyled = styled.div`
    padding-top: 2rem;

    input {
        margin: 1rem 0.4rem 1rem 0;
        height: 2rem;
        padding: 0.4rem;
    }

    /* div {
        input:last-child {
            border: none;
            min-width: 4rem;
            background-color: ${({theme})=> theme.colorDarkGreen};
            border-radius: 0.4rem;
            color: ${({theme})=> theme.colorWhite};
            cursor: pointer;
        }
    } */

    span:first-child {
        display: inline-block;
        color: ${({theme})=> theme.colorGray};
    }

    ul li {
        list-style: none;
    }

    ul li span {
        color: ${({theme}) => theme.yellowColor};
        font-size: 0.7rem;
        cursor: pointer;
    }
` 

export const SubmitContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 2rem 0;

    button {
        margin-left: 0.7rem;
        border: none;
        padding: 1rem;
        min-width: 7rem;
        border-radius: 0.4rem;
        color: ${({theme})=> theme.colorWhite};
        cursor: pointer;
    }

    button:first-child {
        background-color: ${({theme})=> theme.colorDarkGreen};
    }
    button:last-child {
        background-color: ${({theme})=> theme.colorGray};
    }
`