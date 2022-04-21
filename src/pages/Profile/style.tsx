import styled from "styled-components";

export const ProfileContainerStyled = styled.div`
    background-color: ${({theme}) => theme.bgColorGray};
    min-height: 100vh;
    /* padding-top: 7rem; */

    display: flex;
    align-items: center;
    justify-content: center;
`

export const GridProfileContainerStyled = styled.div`
    width: 70%;
    min-height: 100%;
    /* background-color: red; */
    position: relative;
    top: -2rem;
    z-index: 4;

    display: grid;
    gap: 1rem;
    padding: 0 2rem 2rem;

    grid-template-areas:
    'profileField controlPanel controlPanel controlPanel controlPanel controlPanel'
    'profileField publications publications publications publications publications'
    'action publications publications publications publications publications';
`

export const GridItemProfileFieldStyled = styled.div`
    background-color: green;
    grid-area: profileField;

    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding: 0.8rem;
    width: 14rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
        text-align: center;
        img {
            width: 7rem;
            height: 7rem;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }

        h3 {
            margin-top: 0.7rem;
        }
    }

    div:last-child {
        padding: 4rem 0 2rem;
        width: 100%;
        overflow-wrap: break-word;

        p {
            font-weight: bold;

            span {
                font-weight: normal;
            }
        }
    }

`

export const GridItemActionsStyled = styled.div`
    background-color: yellow;
    grid-area: action;

    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding: 1rem 0;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`

export const ActionButtonStyled = styled.button`
    margin: 1rem;
    background: transparent;
    min-width: 8rem;
    padding: 0.7rem 0;
    cursor: pointer;

    border-radius: 0.4rem;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to bottom, ${({theme})=> theme.lightBlue}, ${({theme})=> theme.fontColorDarkBlue} ) 1;

    a {
        text-decoration: none;
        color: ${({theme}) => theme.fontColorDarkBlue};
        font-weight: bold;
    }
`

export const ModerationButtonStyled = styled.button`
    background-color: ${({theme}) => theme.yellowColor};
    margin: 1rem;
    min-width: 8rem;
    padding: 0.7rem 0;
    cursor: pointer;

    border-radius: 0.4rem;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to bottom, ${({theme})=> theme.lightBlue}, ${({theme})=> theme.fontColorDarkBlue} ) 1;

    a {
        text-decoration: none;
        color: ${({theme}) => theme.fontColorDarkBlue};
    font-weight: bold;
    }
`

export const GridItemControlPanelStyled = styled.div`
    grid-area: controlPanel;

    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding-bottom: 1rem;
`

export const ControlPanelTitleStyled = styled.h4`
    margin: 4rem 0 1rem 3rem;
    border-bottom: 2px solid ${({theme}) => theme.lightGreen};
    width: 14rem;
`

export const ControlPanelStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    margin-top: 2rem;

`

export const ControlPanelInfoFieldStyled = styled.div`
    border: 1px solid ${({theme}) => theme.lightBlue};
    border-radius: 0.7rem;
    width: 8rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    h4 {
        font-size: 0.7rem;
        background-color: ${({theme}) => theme.fontColorDarkBlue};
        color: ${({theme}) => theme.colorWhite};
        padding: 0.2rem;
        width: 100%;
        text-align: center;

        border-radius: 0.7rem 0.7rem 0 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        padding: 0.7rem;

        p {
            font-weight: bold;
        }
    }
`

export const GridItemPublicationsStyled = styled.div`
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;
    grid-area: publications;

    flex-direction: column;

    grid-row: 2 / 5;

    h4:first-child {
        margin: 3rem 0 1rem 3rem;
        border-bottom: 2px solid ${({theme}) => theme.lightGreen};
        width: 14rem;
    }

    min-height: 100%;
    padding-bottom: 6rem;
`

export const ArticleFieldStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    
`