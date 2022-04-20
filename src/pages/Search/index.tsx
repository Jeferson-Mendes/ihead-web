import React from "react";
import Article from '../../components/article';
import Navbar from '../../components/Navbar';
import { SearchFieldStyled } from "../Home/style";

import { 
    SearchContainerStyled,
    ArticlesContainerStyled,
    HeaderContainerStyled,
    CategoryFieldStyled,
    ResultsCountFieldStyled,
    ArrowLeft,
    ArrowRight,
    SearchContentStyled,
} from   './style';

const Search:React.FC = () => {
    const [carouselSequence, setCarouselSequence] = React.useState<number[]>([1,0,0])

    const handleNextCategory = () => {
        const currentIndex = carouselSequence.indexOf(1);

        switch (currentIndex) {
            case 0:
                setCarouselSequence([0,1,0])
                break;
            case 1:
                setCarouselSequence([0,0,1])
                break
            case 2:
                setCarouselSequence([1,0,0])
                break
            default:
                break;
        }
    }

    const handlePrevCategory = () => {
        const currentIndex = carouselSequence.indexOf(1);

        switch (currentIndex) {
            case 0:
                setCarouselSequence([0,0,1])
                break;
            case 1:
                setCarouselSequence([1,0,0])
                break
            case 2:
                setCarouselSequence([0,1,0])
                break
            default:
                break;
        }
    }

    return (
        <>
            <Navbar hasHeader={true} headerTitle={'Pesquisar'}/>
            <SearchContainerStyled>
                <SearchContentStyled>
                    <SearchFieldStyled>
                        <form>
                            <input type="text" name="search" id="search" placeholder="Busque por conteúdo"/>
                            <button>Buscar</button>
                        </form>
                    </SearchFieldStyled>
                </SearchContentStyled>
                <ArticlesContainerStyled>
                    <HeaderContainerStyled>
                        <CategoryFieldStyled>
                            <ArrowLeft onClick={handlePrevCategory}></ArrowLeft>
                            <ul style={{ display: carouselSequence[0] === 1 ? 'block' : 'none' }} >
                                <li>Banco de Dados</li>
                                <li>Estrutura de Dados</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                            </ul>
                            <ul style={{ display: carouselSequence[1] === 1 ? 'block' : 'none' }}>
                                <li>POO</li>
                                <li>Arquitetura</li>
                                <li>Padrão de Projeto</li>
                                <li>C</li>
                            </ul>
                            <ul style={{ display: carouselSequence[2] === 1 ? 'block' : 'none' }}>
                                <li>Reactjs</li>
                                <li>Nodejs</li>
                                <li>Java</li>
                                <li>C#</li>
                            </ul>
                            <ArrowRight onClick={handleNextCategory}></ArrowRight>
                        </CategoryFieldStyled>
                        <ResultsCountFieldStyled>
                            <span>7 Resultados</span>
                        </ResultsCountFieldStyled>
                    </HeaderContainerStyled>
                    <div style={{ width: '80%' }}>
                        <Article isFavorite={true}/>
                        <Article isFavorite={true}/>
                        <Article isFavorite={false}/>
                        <Article isFavorite={true}/>
                        <Article isFavorite={false}/>
                        <Article isFavorite={false}/>
                        <Article isFavorite={false}/>

                    </div>
                </ArticlesContainerStyled>
            </SearchContainerStyled>
        </>
    )
}
export default Search;
