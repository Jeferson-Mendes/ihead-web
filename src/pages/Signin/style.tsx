import styled from "styled-components"

export const SignInPageStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

`
export const PresentationContainerStyled = styled.div`
    /* background-color: gray; */
    background-image: url('https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');

    background-position: center;
    background-size: cover;
    width: 50%;
    height: 100%;

`
export const AppName = styled.h3`

    padding: 3rem 0 0 4rem;
    color: ${({theme}) => theme.colorWhite};

`
export const ParagraphStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: 30% auto;

    p { 
        text-align: left;
        width: 60%;
        font-size: 2rem;
        color: ${({theme}) => theme.colorWhite};
        /* color: ${({theme}) => theme.fontColorGreen}; */
        font-weight: bold;

        b {
            color: yellow;
        }
     }

`

export const SignInFormContainerStyled = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

export const SignInFormStyled = styled.div`
    margin-top: 8rem;
    h4 {
        color: ${({theme}) => theme.colorGray};
    }

    h1 {
        color: ${({theme}) => theme.colorBlack};
    }
`

export const FormContainerStyled = styled.div`
    form {
        width: 80%;

        margin-top: 1rem;
    }
`

export const LabelStyled = styled.label`
    color: ${({theme}) => theme.colorGray};
`

export const InputStyled = styled.input`
    display: block;
    width: 100%;
    border: 1.4px solid ${({theme}) => theme.colorGrayBorder};
    height: 2.4rem;
    padding: 7px;

    border-radius: 0.3rem;
    margin: 0.4rem 0 0.4rem 0;
`

export const ButtonContainerStyled = styled.div`
    width: 100%;
    text-align: center;

    button {
        border: none;

        background-color: ${({theme}) => theme.colorDarkGreen};
        color: ${({theme}) => theme.colorWhite};
        padding: 7px;

        width: 70%;
        height: 2.4rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
`

export const RememberAndRecoveryContainerStyled = styled.div`
    margin: 1rem 0 1.4rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
        display: flex;
        align-items: center;
        justify-content: left;
        input {
            display: inline-block;
            width: 1rem;
            height: 1rem;
            cursor: pointer;

        }

    }
    span {
        margin-left: 2px;
        color: ${({theme}) => theme.colorBlack};
        font-size: 0.8rem;
        cursor: pointer;

        a {
            color: ${({theme}) => theme.fontColorDarkBlue};
        }
    }
`

export const RegisterLinkStyled = styled.div`
    padding: 2rem;

    span {
        font-size: 0.8rem;
    }
`

export const LoginGoogleContainerStyled = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 2rem;

    button {
        width: 70%;
        /* background-color: ${({theme}) => theme.fontColorDarkBlue}; */
        text-align: center;
        /* color: ${({theme}) => theme.colorWhite}; */
    }
`

export const LoadingStyled = styled.div`
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid ${({theme}) => theme.colorDarkGreen};
    width: 1rem;
    height: 1rem;
    margin: auto;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`
