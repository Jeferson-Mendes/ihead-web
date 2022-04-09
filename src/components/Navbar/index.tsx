
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

interface IProps {
    hasHeader: boolean;
    headerTitle?: string;
}

const Navbar:React.FC<IProps> = ({ hasHeader, headerTitle }) => {
    return (
        <>
        <NavbarContainerStyled>
            <NavBarContentStyled>
                <TitleStyled>iHead</TitleStyled>
                <MenuOptionsContainerStyled>
                    <li>Pesquise</li>
                    <li>Perfil</li>
                    <li>Publicar</li>
                    <li>Notificações</li>
                </MenuOptionsContainerStyled>
                <ProfileContentStyled>
                    <figure>
                        <img src={avatarImage} alt="avatar" />
                    </figure>
                    <span>Sair</span>
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
