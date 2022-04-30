import styled from "styled-components";

export const UpdateUserSectionStyled = styled.div`
    background-color: ${({theme}) => theme.bgColorGray};
    min-height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const UpdateUserContentStyled = styled.div`
    width: 70%;
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;
    position: relative;
    padding: 2rem;
    top: -2rem;
    z-index: 4;
`

export const AvatarContainerStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    figure {
        width: 8rem;
        height: 8rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
        }
    }

    input[type="file"] {
    display: none;
    }

    label {
        padding: 0.7rem;
        width: 8rem;
        background-color: #333;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        display: block;
        font-size: 0.7rem;
        border-radius: 0.7rem;
        margin-top: 1rem;
        cursor: pointer;
    }
`

export const TitleEditStyled = styled.h3`
    margin-bottom: 3rem;
    border-bottom: 2px solid ${({theme}) => theme.lightGreen};
    width: 17rem;
`