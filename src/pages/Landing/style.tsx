import styled from "styled-components";

interface IProps {
    figureBg: string;
}

export const LandingPageSectionStyled = styled.div`
    font-family: 'Raleway', sans-serif;
`

export const NavbarStyled = styled.div`
    /* background-color: gray; */

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 50%;
        text-align: end;
        img {
            width: 6rem;
        }
    }

    div:last-child {
        padding-right: 2rem;

        button {
            border: none;
            border-radius: 0.4rem;
            padding: 0.4rem;
            width: 6rem;
            color: white;
            background-color: ${({theme}) => theme.fontColorDarkBlue};
            transform: scale(0.9);
            transition: all 400ms;
            cursor: pointer;

            &:hover {
                transform: scale(1)
            }
        }
    }
`

export const HeaderSectionStyled = styled.div`
    background-image: url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    /* width: 100%; */
    /* background-color: red; */
    height: 60vh;
    background-position: center;
    background-size: cover;
    /* background-repeat: no-repeat; */

    div {
        background-color: ${({theme}) => theme.colorGray200};
        width: 17rem;
        position: relative;
        top: 80%;
        left: 4%;
        padding: 1rem;

        h2 {
            font-weight: 500;
            color: ${({theme}) => theme.colorDarkGreen};
        }

        p {
            opacity: 0.8;
            color: black;
            font-size: 0.8rem;
        }
    }
`

export const SubscribeButtonStyled = styled.button`
    color: #020203;
    background-color: ${({theme}) => theme.colorBgHeader};
    margin: 0.6rem 0;
    border: none;
    padding: 0.6rem;
    border-radius: 0.2rem;
    transform: scale(0.9);
    transition: all 400ms;
    cursor: pointer;

    &:hover {
        transform: scale(1)
    }
`

export const SectionDividerStyled = styled.div`
    margin-top: 8rem;
    margin-bottom: 6rem;
    /* background-color: ${({theme}) => theme.colorBlack04}; */
    background-image: url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80');
    height: 20vh;
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: #fff;
        text-align: center;
    }

`

export const InfoCardsSectionStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 6rem;
`

export const ParagraphFieldStyled = styled.div`
    width: 30rem;
    padding: 2rem;

    h4 {
        padding-bottom: 2rem;
        font-size: 1.7rem;
        color: #333333;
    }

    p {
        padding-bottom: 1rem;
        text-align: justify;
    }
`

export const ImageFieldStyled = styled.div<IProps>`
    width: 18rem;
    height: 18rem;
    figure {
        background-image: url(${props => props.figureBg});
        width: 100%;
        height: 100%;
        img {
            width: 90%;
            height: 110%;
            position: relative;
            top: -5%;
            /* box-shadow: 14px -4px 10px #9FB4C7; */
            object-fit: cover;
            object-position: center;
        }
    }
`

export const FooterStyled = styled.div`
    background-color: ${({theme}) => theme.colorBlack04};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    div {
        text-align: center;

        h4 {
            color: #fff;
            font-weight: normal;
            margin-top: 1rem;
        }

        p {
            font-size: 0.8rem;
            color: #fff;
            opacity: 0.5;
        }

        p:last-child {
            margin-top: 1rem;
        }
    }
`