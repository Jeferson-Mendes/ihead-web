import React, { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Article from '../../components/article';
import Navbar from '../../components/Navbar';
import Pagination from "../../components/pagination";
import api from "../../service/api";
import { CategoryArticleEnum } from "../../ts/enum";
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
    const [articles, setArticles] = React.useState<{ article: IArticle, isFavorite: boolean }[]>([]);
    const [articlesResults, setArticlesResults] = React.useState<{ article: IArticle, isFavorite: boolean }[] | [] | null>([]);
    const [searchTerms, setSearchTerms] = React.useState<string>('');
    const [categories, setCategories] = React.useState<string[]>([]);
    const [resultsNumber, setResultsNumber] = React.useState<number>(0);
    const [totalPages, setTotalPages] = React.useState<number>(0);


    const [currentGroupCategoryNum, setCurrentGroupCategoryNum] = React.useState<number>(3);
    const [currentGroupCategory, setCurrentGroupCategory] = React.useState<string[]>(['Html', 'Css', 'Front-end']);

    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(()=>{
        async function getArticles() {
            try {
                const response = await api.get(`/articles`);
                const results = response.data.resultsNumber
                setArticles(response.data.articles);
                setResultsNumber(results);
                setTotalPages(Math.ceil(results/10));
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            } 
        }

        async function searchArticles(searchTerm: string) {
            try {
                const response = await api.get(`/articles`, { params: { keyword: searchTerm } });
    
                setArticlesResults(response.data.articles);
                setResultsNumber(response.data.resultsNumber);
                setTotalPages(Math.ceil(response.data.resultsNumber/10));
            } catch (error: any) {
                alert(error.response.data.message);
                return;
            }
        }

        const state = location.state as any;
        if (state as any) {
            searchArticles(state.searchTerm)
            
            navigate(location.pathname, {}); 
        } else {
            getArticles();
        }

    },[])

    async function handleSearchArticle(event: FormEvent) {
        event.preventDefault();
        try {
            const response = await api.get(`/articles`, { params: { keyword: searchTerms } });

            setArticlesResults(response.data.articles);
            setResultsNumber(response.data.resultsNumber);
            setTotalPages(Math.ceil(response.data.resultsNumber/10));
        } catch (error: any) {
            alert(error.response.data.message);
            return;
        } 
    }

    const handleNextCategory = () => {
        const categoriesEnum = Object.values(CategoryArticleEnum);
        
        const currentCategories = categoriesEnum.splice(currentGroupCategoryNum, 3) 

        setCurrentGroupCategory(currentCategories);
        setCurrentGroupCategoryNum(currentGroupCategoryNum + 3);

        if (currentGroupCategoryNum > categoriesEnum.length) {
            setCurrentGroupCategory(['Html', 'Css', 'Front-end']);
            setCurrentGroupCategoryNum(3);

            return;
        }

    }

    const handlePrevCategory = () => {
        const categoriesEnum = Object.values(CategoryArticleEnum);

        const currentCategories = categoriesEnum.splice(currentGroupCategoryNum - 3, 3) 
        
        setCurrentGroupCategory(currentCategories);
        setCurrentGroupCategoryNum(currentGroupCategoryNum - 3);

        if (currentGroupCategoryNum <= 0) {
            setCurrentGroupCategory(['Git', 'Aws Cloud']);
            setCurrentGroupCategoryNum(27);

            return;
        }
    }

    const handleSearchForCategory = async (category: string) => {
        let currentCategories = categories;
        const categoryExists = categories.includes(category);

        if (categoryExists) {
            const position = categories.indexOf(category);
            currentCategories.splice(position, 1);

            const newCategories = currentCategories; 

            setCategories([...newCategories, '']);
            setCategories(categories.filter(value => value !== ''))
        } else {
            setCategories([...categories, category]);
            currentCategories = [...categories, category];
        }
        
        try {
            console.log(categories)
            const response = await api.get(`/articles`, { params: { categories: currentCategories.join() } });

            if (!response.data.articles.length) {
                setArticlesResults(null);
                setResultsNumber(response.data.resultsNumber);
            } else {
                setArticlesResults(response.data.articles);
                setResultsNumber(response.data.resultsNumber);
                setTotalPages(Math.ceil(response.data.resultsNumber/10));

            }
        } catch (error: any) {
            alert(error.response.data.message);
            return;
        }
    }

    async function handleGoPage(page: number) {
        try {
            const response = await api.get(`/articles?limit=${10}&page=${page}`);
            setArticles(response.data.articles);
            setResultsNumber(response.data.resultsNumber);
            setTotalPages(Math.ceil(response.data.resultsNumber/10));
        } catch (error:any) {
            alert(error.response.data.message);
            return;
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

                            <ul>
                                {currentGroupCategory.map((category, i) => {
                                    const isSelected = categories.includes(category)
                                    return (
                                        <li
                                        key={i}
                                        onClick={() => handleSearchForCategory(category)}
                                        style={ isSelected ? { backgroundColor: '#019267', color: '#fff' } : {} }
                                        >
                                            {category}
                                        </li>
                                )})}
                            </ul>
                            {/* <ul style={{ display: carouselSequence[0] === 1 ? 'block' : 'none' }} >
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
                            </ul> */}
                            <ArrowRight onClick={handleNextCategory}></ArrowRight>
                        </CategoryFieldStyled>
                        <ResultsCountFieldStyled>
                            <span>{resultsNumber} Resultado(s)</span>
                        </ResultsCountFieldStyled>
                    </HeaderContainerStyled>
                    <div style={{ width: '80%' }}>
                        {
                            articlesResults === null ? <span>Sem resultado</span> :
                            articlesResults.length ? articlesResults.map(article => (
                                <Article
                                key={article.article.id}
                                isFavorite={article.isFavorite}
                                authorName={article.article.author.name}
                                category={article.article.category}
                                description={article.article.description}
                                title={article.article.title}
                                views={article.article.views}
                                articleId={article.article.id}
                                coverImagePath={article.article.coverImage?.secure_url}
                                />
    
                            )) : articles.map(article => (
                                <Article
                                key={article.article.id}
                                isFavorite={article.isFavorite}
                                authorName={article.article.author.name}
                                category={article.article.category}
                                description={article.article.description}
                                title={article.article.title}
                                views={article.article.views}
                                articleId={article.article.id}
                                coverImagePath={article.article.coverImage?.secure_url}
                                />
    
                            ))
                        }
                    </div>
                    <Pagination handleGoPage={handleGoPage} totalPages={totalPages}/>
                </ArticlesContainerStyled>
            </SearchContainerStyled>
        </>
    )
}
export default Search;
