import styled from "styled-components";

interface IModalIsOpen {
    modalIsOpen: boolean;
}

export const TermsOfServiceModalContainerStyled = styled.div<IModalIsOpen>`
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
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

export const CloseModalStyled = styled.span`
    position: relative;
    top: 0;
    left: 50%;

    color: ${({theme}) => theme.colorGray};
    font-size: 1rem;
    cursor: pointer;
`

export const ModalContentStyled = styled.div`
    background-color: #fff;
    width: 50%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;

      /* Add Animation */
    @-webkit-keyframes animatetop {
        from {top:100%; opacity:0} 
        to {top:0; opacity:1}
    }
    
    @keyframes animatetop {
        from {top:100%; opacity:0}
        to {top:0; opacity:1}
    }

    h2 {
        margin-bottom: 2rem;
        color: ${({theme}) => theme.fontColorDarkBlue};
    }
`

export const Paragraph = styled.p`
    height: 30rem;
    overflow: auto;

    p {
        margin-top: 1rem;
    }
`