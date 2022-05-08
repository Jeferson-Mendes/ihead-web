import React, { FormEvent } from "react";
import Article from '../../components/article';
import Navbar from '../../components/Navbar';
import api from "../../service/api";
import { IArticle } from "../../ts/interfaces";
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
    const [articles, setArticles] = React.useState<IArticle[]>([]);
    const [articlesResults, setArticlesResults] = React.useState<IArticle[] | []>([]);
    const [searchTerms, setSearchTerms] = React.useState<string>('');

    React.useEffect(()=>{
        async function getArticles() {
            try {
                const response = await api.get(`/articles`);

                setArticles(response.data.articles);
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            } 
        }

        getArticles();
    },[])

    async function handleSearchArticle(event: FormEvent) {
        event.preventDefault();
        try {
            const response = await api.get(`/articles`, { params: { keyword: searchTerms } });

            setArticlesResults(response.data.articles);
        } catch (error: any) {
            alert(error.response.data.message);
            return;
        } 
    }

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
                        <form onSubmit={handleSearchArticle}>
                            <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Busque por conteúdo"
                            onChange={(event) => setSearchTerms(event.target.value)}
                            />
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
                        {
                            articlesResults.length ? articlesResults.map(article => (
                                <Article
                                key={article.id}
                                isFavorite={false}
                                authorName={article.author.name}
                                category={article.category}
                                description={article.description}
                                title={article.title}
                                views={article.views}
                                articleId={article.id}
                                coverImagePath={article.coverImage?.secure_url}
                                />
    
                            )) : articles.map(article => (
                                <Article
                                key={article.id}
                                isFavorite={false}
                                authorName={article.author.name}
                                category={article.category}
                                description={article.description}
                                title={article.title}
                                views={article.views}
                                articleId={article.id}
                                coverImagePath={article.coverImage?.secure_url}
                                />
    
                            ))
                        }
                    </div>
                </ArticlesContainerStyled>
            </SearchContainerStyled>
        </>
    )
}
export default Search;
