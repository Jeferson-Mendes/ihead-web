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
    background-color: ${({theme}) => theme.colorWhite};
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

    figure {
        width: 8rem;
        height: 8rem;

        img {
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
`

export const TitleEditStyled = styled.h3`
    margin-bottom: 3rem;
    border-bottom: 2px solid ${({theme}) => theme.lightGreen};
    width: 17rem;
`