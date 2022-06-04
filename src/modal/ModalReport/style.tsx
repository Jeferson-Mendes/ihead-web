import styled from "styled-components";

interface IProp {
    modalIsOpen: boolean
}

export const ConfirmDeleteContainerStyled = styled.div<IProp>`
    position: fixed; /* Stay in place */
    z-index: 5; /* Sit on top */
    display: ${props => props.modalIsOpen? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    min-height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
`

export const ConfirmFieldStyled = styled.div`
    background-color: ${({theme}) => theme.colorWhite02};
    width: 40%;
    /* border-radius: 1rem; */
    padding: 1rem;
    text-align: center;

    animation-name: example;
    animation-duration: 400ms;
    animation-direction: reverse;  

    @keyframes example {
        0%   {opacity: 1}
        25%   {opacity: 0.75}
        50%   {opacity: 0.5}
        75%   {opacity: 0.25}
        100%   {opacity: 0}
    }

    input {
        width: 80%;
        height: 4rem;
        /* border-radius: 1rem; */
        border: solid 1px gray;
        padding: 0.4rem;
        text-align: center;
        margin: 1rem;
    }
`
export const ButtonConfirm = styled.button`
    border: none;
    background-color: ${({theme}) => theme.colorDarkGreen};
    padding: 1rem;
    width: 8rem;
    border-radius: 0.4rem;
    color: white;
    cursor: pointer;
    transform: scale(0.9);
    transition: all 400ms;

    &:hover {
        transform: scale(1);
    }
`

export const ButtonCancel = styled.button`
    border: none;
    background-color: ${({theme}) => theme.colorGray500};
    padding: 1rem;
    width: 8rem;
    border-radius: 0.4rem;
    color: white;
    cursor: pointer;
    transform: scale(0.9);
    transition: all 400ms;

    &:hover {
        transform: scale(1);
    }
`

export const TitleHeaderStyled = styled.div`
    margin-bottom: 0.4rem;
    
    div {
        width: 100%;
        text-align: right;
        span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            padding: 0.5rem;
            border-radius: 50%;
            background-color: ${({theme}) => theme.bgColorGray};
            cursor: pointer;
        }
    }

`

export const Title = styled.h3`
    text-align: start;
    color: #000;
`

export const SubTitle = styled.p`
    text-align: start;
    margin-bottom: 1rem;
    color: #565353;

    border-bottom: 4px solid #B0F2B4;
    width: 80%;
    font-weight: bold;
`