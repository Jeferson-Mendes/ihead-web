import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';

import { 
    BeginningContainerStyled,
    ContentFieldStyled,
    ProfileAndSearchStyled,
    ShortcutsContainerStyled,
    FieldStyled,
    GridStyled,
    GridContentStyled,
    ProfileFieldStyled,
    UserInfoStyled,
    SearchFieldStyled,
 } from './style';

import avatarImage from '../../assets/avatar.svg';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleNavigateToSearch = () => {
        navigate('/pesquisar')
    }

    const handleNavigateToProfile = () => {
        navigate('/perfil')
    }

    const handleNavigateToFavorites = () => {
        navigate('/favoritos')
    }

    return (
        <>
        <Navbar hasHeader={false} />
        <BeginningContainerStyled>
            <ContentFieldStyled>

                <ProfileAndSearchStyled>
                    <ProfileFieldStyled>
                        <UserInfoStyled>
                            <figure>
                                <img src={user?.picture ? `${user?.picture}` : avatarImage} alt="avatar" />
                            </figure>
                            <div>
                                <h2>Olá,</h2>
                                <h3>{user?.name}</h3>
                                <input type="button" onClick={handleNavigateToProfile} value="Visite Seu Perfil" />
                            </div>
                        </UserInfoStyled>
                        <SearchFieldStyled>
                            <form>
                                <input type="text" name="search" id="search" placeholder="Busque por conteúdo"/>
                                <button>Buscar</button>
                            </form>
                        </SearchFieldStyled>
                    </ProfileFieldStyled>
                </ProfileAndSearchStyled>

                <ShortcutsContainerStyled>
                    <FieldStyled>
                        <p>Comece aqui!</p>
                        <GridContentStyled>
                            <GridStyled imageUrl="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg">
                                <figcaption> <span>Fazer uma publicação</span> </figcaption>
                            </GridStyled>
                            <GridStyled
                            onClick={handleNavigateToSearch}
                            imageUrl="https://cdn.pixabay.com/photo/2020/06/04/11/10/bulb-5258341_960_720.jpg">
                                <figcaption> <span>Pesquise Soluções</span> </figcaption>
                            </GridStyled>
                            <GridStyled
                            onClick={handleNavigateToFavorites}
                            imageUrl="https://images.unsplash.com/photo-1567845735143-5e5d9d3f8f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80">
                                <figcaption> <span> Postagens curtidas </span> </figcaption>
                            </GridStyled>
                            <GridStyled imageUrl="https://images.pexels.com/photos/6651190/pexels-photo-6651190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                                <figcaption> <span> Emitir Certificado </span> </figcaption>
                            </GridStyled>
                        </GridContentStyled>
                    </FieldStyled>
                </ShortcutsContainerStyled>

            </ContentFieldStyled>
        </BeginningContainerStyled>
        </>
    )
}

export default Home;
