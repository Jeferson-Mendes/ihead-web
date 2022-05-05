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
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;
    position: relative;
    padding: 2rem;
    top: -2rem;
    z-index: 4;
`