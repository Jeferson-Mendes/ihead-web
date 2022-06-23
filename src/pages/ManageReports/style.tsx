import styled from "styled-components"

export const ManageReportsSectionStyled = styled.div`
    background-color: ${({theme}) => theme.bgColorGray};
    min-height: 100vh;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const ManageReportsContainerStyled = styled.div`
    width: 70%;
    min-height: 100vh;
    border: 1px solid ${({theme}) => theme.lightBlue};
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;
    position: relative;
    padding: 4rem 2rem;
    top: -2rem;
    z-index: 4;

    h3 {
        color: ${({theme}) => theme.colorBlack02};
        border-bottom: 4px solid ${({theme}) => theme.lightGreen};
        width: 17rem;
    }
`
export const TableFieldStyled = styled.div`
    width: 90%;
    
    margin: auto;
    margin-top: 4rem;

    /* border: 1px solid ${({theme}) => theme.lightBlue}; */
    background-color: ${({theme}) => theme.colorWhite};
    border-radius: 0.7rem;

    padding: 2rem 0 1rem 1rem;
`

export const ReportsNumberStyled = styled.span`
    display: inline-block;
    color: ${({theme}) => theme.colorGray};
    font-size: 0.8rem;
    margin-bottom: 1rem;
`

export const TableStyled = styled.table`
    width: 100%;

    border-radius: 1rem;

    td, th {
        padding: 8px;
    }

    tr {
        th {
            font-weight: normal;
        }

        th:first-child {
            border-radius: 1rem 0 0 1rem;
        }

        th:last-child {
            border-radius: 0 1rem 1rem 0;
        }
    }
   
    tr:hover {background-color: #ddd;}

    td {
        text-align: -webkit-center;

        svg {
            color: green;
            width: 1rem;
            cursor: pointer;
        }

        figure {
                width: 1rem;
                height: 1rem;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 50%;
                }
            }

        &:first-child {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            figure {
                width: 2rem;
                height: 2rem;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 50%;
                }
            }
            span {
                margin-left: 1rem;
            }
        }
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: ${({theme}) => theme.lightGreen};
        color: ${({theme}) => theme.colorGray};
    }   
`