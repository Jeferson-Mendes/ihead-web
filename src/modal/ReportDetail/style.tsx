import styled from "styled-components";

interface IProp {
    modalIsOpen: boolean
}

export const ReportDetailContainerStyled = styled.div<IProp>`
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
    background-color: #FFABAB;
    padding: 1rem;
    width: 14rem;
    border-radius: 1rem;
    color: #F21717;
    cursor: pointer;
    font-weight: bold;
    transform: scale(0.9);
    transition: all 400ms;

    &:hover {
        transform: scale(1);
    }
`

export const ButtonCancel = styled.button`
    border: none;
    background-color: ${({theme}) => theme.lightBlue};
    padding: 1rem;
    width: 14rem;
    border-radius: 1rem;
    color: ${({theme}) => theme.fontColorDarkBlue};
    cursor: pointer;
    font-weight: bold;
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

export const ReportInfo = styled.div`
    text-align: start;

    ul li {
        list-style: none;
        font-size: 0.9rem;
        margin-top: 0.4rem;
        display: flex;
        align-items: center;

        b {
            margin-right: 0.4rem;
        }

        svg {
            width: 1rem;
        }
    }
`

export const Title = styled.h3`
    text-align: start;
    margin-bottom: 1rem;
    color: #000;

    border-bottom: 4px solid #B0F2B4;
    width: 80%;
    font-weight: bold;
`
