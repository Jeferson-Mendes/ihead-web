import React from "react";

import { 
    ArticleContainerStyled,
    ImageContainerStyled,
    InfoContainerStyled,
    TitleFieldStyled,
    DescriptionFieldStyled,
    AditionalInfoFieldStyled,
 } from './style';

 import heartRegularIcon from '../../assets/heart-regular.svg';
 import heartSolidIcon from '../../assets/heart-solid.svg';

 interface IProps {
     isFavorite: boolean;
 }

const Article:React.FC<IProps> = ({ isFavorite }) => {
    return (
        <ArticleContainerStyled>
            <ImageContainerStyled>
                <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmclMjBsYW5ndWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="bgArticle" />
            </ImageContainerStyled>
            <InfoContainerStyled>

                <TitleFieldStyled>
                    <img src={ isFavorite? heartSolidIcon : heartRegularIcon } alt="heartSolidIcon" />
                    <p>Banco de Dados</p>
                    <h4>O que é um banco de dados</h4>
                </TitleFieldStyled>

                <DescriptionFieldStyled>
                    <span>
                    Lorem ipsum  Fusce pellentesque blandit urna, in pellentesque metus luctus maximus Lorem ipsum  Fusce pellentesque blandit urna, in pellentesque metus luctus maximus
                    Lorem ipsum  Fusce pellentesque blandit urna, in pellentesque metus luctus maximus
                    Lorem ipsum  Fusce pellentesque blandit urna, in pellentesque metus luctus maximus
                    </span>
                </DescriptionFieldStyled>
                <AditionalInfoFieldStyled>
                    <p>(318 Vizualizações)</p>
                    <p>Maria Lucia</p>
                </AditionalInfoFieldStyled>
            </InfoContainerStyled>
        </ArticleContainerStyled>
    )
}

export default Article;
