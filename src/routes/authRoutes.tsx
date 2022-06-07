import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import ArticleDetail from '../pages/ArticleDetail';
import CreateArticle from '../pages/CreateArticle';
import FavoritesArticle from '../pages/FavoritesArticle';
import Home from '../pages/Home';
import ManageReports from '../pages/ManageReports';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Search from '../pages/Search';
import Signin from '../pages/Signin';
import Update from '../pages/Update';
import { UserRoleEnum } from '../ts/enum';

const AuthRoutes:React.FC = () => {

    const { signed, user } = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={ signed ? <Navigate replace to="/" /> : <Signin/> } />
            <Route path="/register" element={ signed ? <Navigate replace to="/" /> : <Register/> } />
            <Route path="/pesquisar" element={ <Search/> } />
            <Route path="/perfil" element={ <Profile/> } />
            <Route path="/editar" element={ <Update/> } />
            <Route path="/artigo" element={ <ArticleDetail/> } />
            <Route path="/favoritos" element={ <FavoritesArticle/> } />
            <Route path="/artigo/criar" element={ <CreateArticle/> } />
            <Route path="/denuncias/gerenciar" element={ signed && user?.userRole === UserRoleEnum.MODERATOR ? <ManageReports/> : <Navigate replace to="/"/> } />
            
        </Routes>
    )
}

export default AuthRoutes;
