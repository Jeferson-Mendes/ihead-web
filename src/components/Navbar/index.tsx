
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
import { Link } from 'react-router-dom';

interface IProps {
    hasHeader: boolean;
    headerTitle?: string;
}

const Navbar:React.FC<IProps> = ({ hasHeader, headerTitle }) => {
    const { signOut } = useContext(AuthContext);
    const handleLogout = () => {
        signOut();
    }
    return (
        <>
        <NavbarContainerStyled>
            <NavBarContentStyled>
                <TitleStyled>iHead</TitleStyled>
                <MenuOptionsContainerStyled>
                    <li> <Link to='/pesquisar'> Pesquise </Link> </li>
                    <li> <Link to='/'>Perfil</Link> </li>
                    <li> <Link to='/'>Publicar</Link> </li>
                    <li> <Link to='/'>Notificações</Link> </li>
                </MenuOptionsContainerStyled>
                <ProfileContentStyled>
                    <figure>
                        <img src={avatarImage} alt="avatar" />
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
