import styled from "styled-components"

interface IModalIsOpen {
    modalIsOpen: boolean;
}

export const ConfirmCertificateModalStyled = styled.div<IModalIsOpen>`
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

export const ConfirmModalFieldStyled = styled.div`
    background-color: #fff;
    width: 70%;
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
