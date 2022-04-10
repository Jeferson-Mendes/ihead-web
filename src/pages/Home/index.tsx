import Navbar from "../../components/navbar"

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

 import makePublicationImage from '../../assets/make-publication.svg' 
 import generateCvImage from '../../assets/generate-cv.svg' 
 import likedPostsImage from '../../assets/liked-posts.svg'
 import searchSolutionsImage from '../../assets/search-solutions.svg' 
 import avatarImage from '../../assets/avatar.svg';
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const Home: React.FC = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
        <Navbar hasHeader={false} />
        <BeginningContainerStyled>
            <ContentFieldStyled>

                <ProfileAndSearchStyled>
                    <ProfileFieldStyled>
                        <UserInfoStyled>
                            <figure>
                                <img src={avatarImage} alt="avatar" />
                            </figure>
                            <div>
                                <h2>Olá,</h2>
                                <h3>{user?.name}</h3>
                                <input type="button" value="Visite Seu Perfil" />
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
                            <GridStyled imageUrl={makePublicationImage}>
                                <figcaption> <span>Fazer uma publicação</span> </figcaption>
                            </GridStyled>
                            <GridStyled imageUrl={searchSolutionsImage}>
                                <figcaption> <span>Pesquise Soluções</span> </figcaption>
                            </GridStyled>
                            <GridStyled imageUrl={likedPostsImage}>
                                <figcaption> <span> Postagens curtidas </span> </figcaption>
                            </GridStyled>
                            <GridStyled imageUrl={generateCvImage}>
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
