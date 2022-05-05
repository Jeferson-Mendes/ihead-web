import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Search from '../pages/Search';
import Signin from '../pages/Signin';

const AppRoutes:React.FC = () => {

    const { signed } = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/" element={ !signed ? <Navigate replace to='login' /> : <Home/>} />
            <Route path="/login" element={ signed ? <Navigate replace to="/" /> : <Signin/> } />
            <Route path="/register" element={ signed ? <Navigate replace to="/" /> : <Register/> } />
            <Route path="/pesquisar" element={ !signed ? <Navigate replace to="/" /> : <Search/> } />
            <Route path="/perfil" element={ <Navigate replace to="/" /> } />
            <Route path="/editar" element={ <Navigate replace to="/"/> } />
            <Route path="/artigo" element={ <Navigate replace to="/"/> } />
            <Route path="/favoritos" element={ <Navigate replace to="/"/> } />
            <Route path="/artigo/criar" element={ <Navigate replace to="/"/> } />
            <Route path="/denuncias/gerenciar" element={ <Navigate replace to="/"/> } />

        </Routes>
    )
}

export default AppRoutes;
