import styled from "styled-components"

interface IModalIsOpen {
    modalIsOpen: boolean;
}

export const CertificateModalStyled = styled.div<IModalIsOpen>`
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

export const ModalFieldStyled = styled.div`
    background-color: #fff;
    width: 50%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span:first-child {
        float: right;
        font-weight: bold;
        position: relative;
        left: 50%;
        cursor: pointer;
    }
`

export const TextContainerStyled = styled.div`
    span {
        display: inline-block;
        color: ${({theme}) => theme.colorGray};
        width: 70%;
        padding: 0.7rem 0 0;

        border-bottom: 2px solid ${({theme}) => theme.lightGreen};
    }
`
export const HoursContainerStyled = styled.div`
    padding: 2rem;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    div {
        width: 7rem;
    }

    span {
        display: block;
    }
`
export const HourButtonStyled = styled.button`
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding: 2rem;
    font-weight: bold;

    &:first-child {
        background-color: ${({theme}) => theme.lightBlue};
    }

    
`
export const DownloadButtonStyled = styled.button`
    width: 100%;
    padding: 0.7rem;
    margin-top: 1rem;
    background-color: ${({theme})=> theme.fontColorDarkBlue};
    border: none;
    color: ${({theme})=> theme.colorWhite};
    font-size: 0.7rem;
    border-radius: 0.4rem;
    cursor: pointer;
`