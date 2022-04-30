import styled from "styled-components"

export const NavbarContainerStyled = styled.div`
    background-color: ${({theme}) => theme.colorBgNavbar};
    
    position: relative;
    /* width: 100vw; */
    z-index: 4;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const NavBarContentStyled = styled.div`
    width: 80%;

    display: grid;
    align-items: center;
    /* justify-content: center; */
    grid-template-columns: 0fr 1fr 0fr;

    padding: 0.4rem;
`

export const TitleStyled = styled.h3`
    color: ${({theme}) => theme.colorWhite };
    cursor: pointer;
`

export const MenuOptionsContainerStyled = styled.ul`
    li {
        list-style: none;
        a {
            float: left;
            text-decoration: none;
            padding: 1rem;
            color: ${({theme}) => theme.colorWhite };
            cursor: pointer;
            font-size: 0.8rem;
    
            &:hover {
                text-decoration: underline;
            }
        }

    } 
`
export const ProfileContentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
        width: 2rem;
        height: 2rem;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }
    }

    span {
        padding-left: 0.8rem;
        color: ${({theme}) => theme.colorWhite };
        cursor: pointer;
        font-size: 0.8rem;
    }
`

export const HeaderContainerStyled = styled.div`
    background-color: ${({theme}) => theme.colorBgNavbar};
    width: 100%;
    height: 6rem;
`
export const HeaderContentStyled = styled.div`
    background-color: ${({theme}) => theme.colorBgHeader};
    width: 99.4%;
    margin: auto;

    border-radius: 0.4rem;

    a {
        display: inline-block;
        padding: 0.8rem 1.6rem;
        font-size: 1rem;
        color: #FFF;
        font-weight: bold;
        text-decoration: none;    
    }
`
export const HeaderTitleStyled = styled.h2`
    padding: 0.8rem 1.6rem;
    color: ${({theme}) => theme.colorWhite };
`