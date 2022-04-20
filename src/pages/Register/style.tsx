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
    padding-top: 1.4rem;
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
    padding: 2rem 6rem 0;
`

export const FormContainerStyled = styled.div`

`

export const FormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SelectStyled = styled.select`
    display: block;
    width: 100%;
    border: 1.4px solid ${({theme}) => theme.colorGrayBorder};
    height: 2.4rem;
    padding: 7px;

    border-radius: 0.3rem;
    margin: 0.4rem 0 0.4rem 0;
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

            strong {
                color: ${({theme}) => theme.fontColorDarkBlue};
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
`

export const ButtonContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding-top: 4rem;
`

export const CancelButtonStyled = styled.input`
    background-color: ${({theme}) => theme.colorGray};
    color: ${({theme}) => theme.colorWhite};
    border: none;
    padding: 0.8rem;
    width: 10rem;
    cursor: pointer;
    border-radius: 0.2rem;
    margin-right: 1rem;
`

export const InputButtonStyled = styled.button<IInputButtonStyled>`
    background-color: ${({theme}) => theme.fontColorDarkBlue};
    color: ${({theme}) => theme.colorWhite};
    opacity: ${(props) => props.termsChecked ? 1 : 0.4};
    border: none;
    padding: 0.8rem;
    width: 10rem;
    cursor: pointer;
    border-radius: 0.2rem;
`