
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

import avatarImage from '../../assets/avatar.svg';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link, useNavigate } from 'react-router-dom';

interface IProps {
    hasHeader: boolean;
    headerTitle?: string;
}

const Navbar:React.FC<IProps> = ({ hasHeader, headerTitle }) => {
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
                <TitleStyled onClick={handleNavigateToHome}>iHead</TitleStyled>
                <MenuOptionsContainerStyled>
                    <li> <Link to='/pesquisar'> Pesquise </Link> </li>
                    <li> <Link to='/perfil'>Perfil</Link> </li>
                    <li> <Link to='/'>Publicar</Link> </li>
                    <li> <Link to='/'>Notificações</Link> </li>
                </MenuOptionsContainerStyled>
                <ProfileContentStyled>
                    <figure>
                        <img src={ user?.picture ? `${user?.picture}` : avatarImage} alt="avatar" />
                    </figure>
                    <span onClick={handleLogout}>Sair</span>
                </ProfileContentStyled>
            </NavBarContentStyled>
            { hasHeader ? (
            <HeaderContainerStyled>
                <HeaderContentStyled>
                    <HeaderTitleStyled>
                        {headerTitle}
                    </HeaderTitleStyled>
                </HeaderContentStyled>
            </HeaderContainerStyled>

            ) : ''}
        </NavbarContainerStyled>
        </>
    )
}

export default Navbar;
