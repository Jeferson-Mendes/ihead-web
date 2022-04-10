import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Search from '../pages/Search';
import Signin from '../pages/Signin';

const AuthRoutes:React.FC = () => {

    const { signed } = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={ signed ? <Navigate replace to="/" /> : <Signin/> } />
            <Route path="/register" element={ signed ? <Navigate replace to="/" /> : <Register/> } />
            <Route path="/pesquisar" element={ <Search/> } />
            
        </Routes>
    )
}

export default AuthRoutes;
