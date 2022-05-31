import styled from "styled-components";

interface IProp {
    modalIsOpen: boolean
}

export const ShareContainerStyled = styled.div<IProp>`
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

export const ShareFieldStyled = styled.div`
    background-color: ${({theme}) => theme.colorWhite02};
    width: 40%;
    border-radius: 1rem;
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
        border-radius: 1rem;
        border: solid 2px gray;
        padding: 0.7rem;
        text-align: center;
        margin: 1rem;
    }
`
export const ButtonCopy = styled.button`
    border: none;
    background-color: ${({theme}) => theme.fontColorDarkBlue};
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    transform: scale(0.9);
    transition: all 400ms;

    &:hover {
        transform: scale(1);
    }
`

export const TitleHeaderStyled = styled.div`
    margin-bottom: 1rem;
    span {
        padding: 1rem;
        display: inline-block;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colorGray200};
        cursor: pointer;
    }
`

export const Title = styled.h2`
    
`
export const SocialMediaContainerStyled = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
        li {
            float: left;
            margin: 0 1rem;
            list-style: none;

            svg {
                border-radius: 50%;
            }
        }
    }
`
export const SubTitle = styled.p`
    text-align: center;
`