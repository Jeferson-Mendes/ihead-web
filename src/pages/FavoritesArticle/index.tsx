import React, { useContext } from "react";
import Article from "../../components/article";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../contexts/auth";
import api from "../../service/api";
import { IUser } from "../../ts/interfaces";

import {
    FavoritesArticleContainerStyled,
    FavoritesArticleSectionStyled,
    ArticlesFieldStyled,

} from './style';

const FavoritesArticle:React.FC = () => {
    const { user } = useContext(AuthContext);
    const [userDetail, setUserDetail] = React.useState<IUser | null>(null);

    React.useEffect(() => {
        async function getUser(userId: string) {
            const response = await api.get(`/users/${userId}`)

            setUserDetail(response.data.user);
        }

        if (user) {
            getUser(user.id)
        }
    },[])

    return (
        <>
            <Navbar hasHeader={true} headerTitle='Favoritos'/>
            
            <FavoritesArticleSectionStyled>
                <FavoritesArticleContainerStyled>
                    <h3>Preferências</h3>
                    <ArticlesFieldStyled>

                        { userDetail?.favoriteArticles.map(article => (
                            <Article
                            key={article.id}
                            articleId={article.id}
                            authorName={article.author.name}
                            category={article.category}
                            description={article.description}
                            title={article.title}
                            views={article.views}
                            coverImagePath={article.coverImage?.secure_url}
                            isFavorite={true}/>
                        )) }
                        
                    </ArticlesFieldStyled>
                </FavoritesArticleContainerStyled>
            </FavoritesArticleSectionStyled>
        </>
    )
}
export default FavoritesArticle;
