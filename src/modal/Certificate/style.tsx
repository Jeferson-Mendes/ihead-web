import styled from "styled-components"

interface IModalIsOpen {
    modalIsOpen: boolean;
}

interface IHourButtonIndex {
    index: number;
    isAvailable: boolean;
}

interface IAvailable {
    isAvailable: boolean;
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

export const TextContainerStyled = styled.div`
    span {
        display: inline-block;
        color: ${({theme}) => theme.colorGray};
        font-size: 0.8rem;
        width: 80%;
        padding: 0.7rem 0 0;

        border-bottom: 2px solid ${({theme}) => theme.lightGreen};
    }
`
export const HoursContainerStyled = styled.div`
    padding: 2rem 0;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        width: 7rem;
    }

    span {
        display: block;
    }
`
export const QuantityHoursStyled = styled.div`
    margin-top: 2rem;

    b {
        color: green;
    }
`

export const HourButtonStyled = styled.button<IHourButtonIndex>`
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding: 0 2rem 2rem 2rem;
    font-weight: bold;

    width: 10rem;
    text-align: center;
    transform: scale(0.9);
    transition: all 400ms;
    cursor: pointer;

    &:hover {
        transform: ${props => props.isAvailable ? 'scale(1)' : 'scale(0.9)'} ;
    }

    &:nth-child(${props => props.index + 1}) {
        background-color: ${props => props.isAvailable ? ({theme}) => theme.lightBlue : ({theme}) => theme.colorWhite};
    }

    
`

export const AvailableTextStyled = styled.p<IAvailable>`
    padding: 0.4rem 0 1.4rem 0;
    color: ${props => props.isAvailable? 'green' : 'red'};
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