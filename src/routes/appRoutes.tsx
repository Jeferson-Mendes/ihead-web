import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Signin from '../pages/Signin';

const AppRoutes:React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={ <Signin/> } />
            <Route path="/register" element={<Register/> } />
        </Routes>
    )
}

export default AppRoutes;
