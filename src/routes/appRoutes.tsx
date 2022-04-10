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

        </Routes>
    )
}

export default AppRoutes;
