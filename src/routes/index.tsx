import { useContext } from 'react';
import Loading from '../components/loading';
import { AuthContext } from '../contexts/auth';
import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

const Routes = () => {
    const { signed, loading } = useContext(AuthContext);
    if(loading) {
        return (
            <Loading/>
        )
    }
    return signed ? <AuthRoutes/> : <AppRoutes/>;
}

export default Routes;
