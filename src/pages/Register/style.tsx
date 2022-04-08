import styled from "styled-components";

interface IInputButtonStyled {
    termsChecked: boolean;
}

export const SignupContainerStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;

    height: 100vh;
` 

export const ImageLogoContainerStyled = styled.div`
    background-image: url('https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const RegisterContainerStyled = styled.div`
    padding-top: 1rem;
/* div {
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }    
        
    } */
` 

export const GoBackStyled = styled.span`
    position: absolute;
    padding-left: 2rem;

    font-size: 0.7rem;
`

export const RegisterFieldStyled = styled.div`
    padding: 2rem 6rem;
`

export const FormContainerStyled = styled.div`

`

export const FormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TitleStyled = styled.h2`
    color: ${({theme}) => theme.fontColorDarkBlue};
    margin-bottom: 2rem;
    margin-top: 2rem;
    /* padding: 4rem 0 0 6rem; */
`


export const LeftFieldInputStyled = styled.div`
    width: 48%;
`

export const RightFieldInputStyled = styled.div`
    width: 48%;
`

export const CheckboxTermOfServicesStyled = styled.div`
        width: 80%;
        padding-top: 2rem;

        span {
            color: ${({theme}) => theme.colorGray};
        }
`

export const ButtonContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-top: 2rem;
`

export const InputButtonStyled = styled.input<IInputButtonStyled>`
    background-color: ${({theme}) => theme.fontColorDarkBlue};
    color: ${({theme}) => theme.colorWhite};
    opacity: ${(props) => props.termsChecked ? 1 : 0.4};
    border: none;
    padding: 0.8rem;
    width: 10rem;
    cursor: pointer;
    border-radius: 0.2rem;
`