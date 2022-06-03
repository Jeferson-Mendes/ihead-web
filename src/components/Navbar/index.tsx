
import { 
    NavbarContainerStyled,
    NavBarContentStyled,
    TitleStyled,
    MenuOptionsContainerStyled,
    ProfileContentStyled,
    HeaderContainerStyled,
    HeaderContentStyled,
    HeaderTitleStyled,
} from './style';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link, useNavigate } from 'react-router-dom';
import { getAvatarPath } from '../../utils/getAvatarPath';
import Logo from '../../assets/logo.png'

interface IProps {
    hasHeader: boolean;
    headerTitle?: string;
    hasArrowBack?: boolean;
}

const Navbar:React.FC<IProps> = ({ hasHeader, headerTitle, hasArrowBack }) => {
    const { signOut, user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut();
    }

    const handleNavigateToHome = () => {
        navigate('/');
    }

    return (
        <>
        <NavbarContainerStyled>
            <NavBarContentStyled>
                <TitleStyled onClick={handleNavigateToHome}>
                    <img src={Logo} alt="logo" />
                </TitleStyled>
                <MenuOptionsContainerStyled>
                    <li> <Link to='/pesquisar'> Pesquise </Link> </li>
                    <li> <Link to='/perfil'>Perfil</Link> </li>
                    <li> <Link to='/artigo/criar'>Publicar</Link> </li>
                    <li> <Link to='/'>Notificações</Link> </li>
                </MenuOptionsContainerStyled>
                <ProfileContentStyled>
                    <figure>
                        <img src={ user ? getAvatarPath(user): '' } alt="avatar" />
                    </figure>
                    <span onClick={handleLogout}>Sair</span>
                </ProfileContentStyled>
            </NavBarContentStyled>
            { hasHeader ? (
            <HeaderContainerStyled>
                <HeaderContentStyled>
                    {hasArrowBack
                    ?
                    <Link to='/'>Voltar</Link>
                     : 
                    <HeaderTitleStyled>
                        {headerTitle}
                    </HeaderTitleStyled>
                     }
                </HeaderContentStyled>
            </HeaderContainerStyled>

            ) : ''}
        </NavbarContainerStyled>
        </>
    )
}

export default Navbar;
