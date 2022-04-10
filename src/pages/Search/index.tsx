import React from "react";
import Article from '../../components/article';
import Navbar from '../../components/Navbar';

import { 
    SearchContainerStyled,
    ArticlesContainerStyled,
    HeaderContainerStyled,
    CategoryFieldStyled,
    ResultsCountFieldStyled,
    ArrowLeft,
    ArrowRight,

} from   './style';

const Search:React.FC = () => {

    return (
        <>
            <Navbar hasHeader={true} headerTitle={'Pesquisar'}/>
            <SearchContainerStyled>
                <ArticlesContainerStyled>
                    <HeaderContainerStyled>
                        <CategoryFieldStyled>
                            <ArrowLeft></ArrowLeft>
                            <ul>
                                <li>Banco de Dados</li>
                                <li>Estrutura de Dados</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                            </ul>
                            <ArrowRight></ArrowRight>
                        </CategoryFieldStyled>
                        <ResultsCountFieldStyled>
                            <span>7 Resultados</span>
                        </ResultsCountFieldStyled>
                    </HeaderContainerStyled>
                    <Article isFavorite={true}/>
                    <Article isFavorite={true}/>
                    <Article isFavorite={false}/>
                    <Article isFavorite={true}/>
                    <Article isFavorite={false}/>
                    <Article isFavorite={false}/>
                    <Article isFavorite={false}/>
                </ArticlesContainerStyled>
            </SearchContainerStyled>
        </>
    )
}
export default Search;
