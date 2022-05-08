import React from "react";
import Article from "../../components/article";
import Navbar from "../../components/Navbar";

import {
    FavoritesArticleContainerStyled,
    FavoritesArticleSectionStyled,
    ArticlesFieldStyled,

} from './style';

const FavoritesArticle:React.FC = () => {

    return (
        <>
            <Navbar hasHeader={true} headerTitle='Favoritos'/>
            
            <FavoritesArticleSectionStyled>
                <FavoritesArticleContainerStyled>
                    <h3>Preferências</h3>
                    <ArticlesFieldStyled>
                        {/* <Article isFavorite={true}/>
                        <Article isFavorite={true}/>
                        <Article isFavorite={true}/>
                        <Article isFavorite={true}/> */}
                    </ArticlesFieldStyled>
                </FavoritesArticleContainerStyled>
            </FavoritesArticleSectionStyled>
        </>
    )
}
export default FavoritesArticle;
