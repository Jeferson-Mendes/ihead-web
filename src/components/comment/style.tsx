import styled from "styled-components"

export const CommentContainerStyled = styled.div`
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    margin-top: 0.7rem;
`
export const HeaderStyled = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.lightBlue};   
    padding: 0.4rem;

    span:first-child {
        float: right;
        margin-left: 1rem;

        svg {
            width: 1rem;
            cursor: pointer;
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
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
            margin-left: 1rem;
            color: ${({theme}) => theme.fontColorDarkBlue};
        }
    }

`
export const BodyCommentStyled = styled.div`
    padding: 0.4rem;
    
    p {
        font-size: 0.8rem;
    }
`
export const CommentFooterStyled = styled.div`
    margin-top: 2rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CommentHourStyled = styled.span`
    font-size: 0.8rem;
    color: ${({theme}) => theme.colorBlack};
    opacity: 0.2;
    font-weight: bold;
`
export const ReportCommentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    cursor: pointer;

    img {
        width: 2.4rem;
    }
`