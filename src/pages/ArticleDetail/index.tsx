import React from "react";
import Navbar from '../../components/Navbar';

import {
    ArticleDetailSectionStyled,
    ArticleDetailContainerStyled,
    GridItemArticleStyled,
    GridItemAuthorStyled,
    GridItemCommentsStyled,
    ArticleDetailContentStyled,
    ContentArticleStyled,
    TitleArticleStyled,
    CommentListStyled,
    CommentsQuantityStyled,
    RecommendationContainerStyled,
    ArticleRecommendationFieldStyled,
    ArticleStyled,
    ContentStyled,
} from './style';

import FavoriteIcon from '../../assets/heart-regular.svg';
import AvatarIcon from '../../assets/avatar.svg';
import Comment from "../../components/comment";
import Article from "../../components/article";
import { ArrowLeft, ArrowRight } from "../Search/style";

const ArticleDetail:React.FC = () => {

    return (
        <>
        <Navbar hasHeader={true} hasArrowBack={true}/>
        <ArticleDetailSectionStyled>
            <ArticleDetailContainerStyled>
                <GridItemArticleStyled>
                <ArticleDetailContentStyled>
                    <span>
                        <img src={FavoriteIcon} alt="favoriteIcon" />
                    </span>
                    <TitleArticleStyled>
                        <h2>O que é um banco de dados</h2>
                        <span>Banco de Dados</span>
                    </TitleArticleStyled>
                    <ContentArticleStyled>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tellus eget felis condimentum congue id eget quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sed est metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sed felis in elit scelerisque lobortis. Sed dolor quam, mattis vitae odio sit amet, mollis suscipit ligula. Nam risus nisl, tincidunt at tristique ac, interdum ut est. Nulla at nulla nisi. Phasellus et nibh tellus. Vivamus vehicula sem id neque accumsan, vitae tempus mi cursus. Integer ultricies ante quis luctus accumsan. Aliquam erat volutpat. Curabitur vulputate lectus ac ipsum aliquet fermentum.
                        </p>
                        <p>
                        Nunc lacinia, massa et tempus elementum, mauris erat interdum est, sit amet iaculis urna turpis tristique est. Mauris sodales nunc ante. Maecenas tellus est, molestie vel semper sit amet, ornare sit amet lectus. Nunc congue rhoncus quam, sed accumsan lorem facilisis et. Pellentesque lacinia magna elit, vitae commodo risus fringilla vitae. Aliquam pellentesque felis justo, id commodo lacus auctor vel. Mauris elementum lectus vel metus pretium pharetra. Aenean sit amet mollis purus. Suspendisse in erat et mauris aliquam placerat sit amet sed dolor. Curabitur sagittis eros sed neque tempus, vitae hendrerit metus laoreet. Maecenas tempor ligula sit amet lectus blandit consequat. Curabitur nec dolor vel massa aliquam semper nec sit amet orci. Phasellus vitae rhoncus diam. Quisque eu cursus urna, ac eleifend purus. Vestibulum ac lectus lacus.

                        </p>
                        <p>
                        Proin imperdiet nibh luctus turpis suscipit aliquet. Maecenas finibus ipsum in lacus ornare lobortis. In hac habitasse platea dictumst. Pellentesque risus lorem, mollis vel dui at, eleifend tristique dolor. Donec tempor vehicula dui eget suscipit. Aliquam porttitor gravida finibus. Nam quis neque in velit feugiat vulputate. Morbi eget placerat lorem. Donec eu fringilla felis, eget dictum ligula. Nullam tempor felis quis tincidunt mollis. Vivamus semper, quam quis aliquam pellentesque, nunc purus porttitor lectus, vitae placerat enim nulla at purus.
                        </p>
                        <p>
                        Proin imperdiet nibh luctus turpis suscipit aliquet. Maecenas finibus ipsum in lacus ornare lobortis. In hac habitasse platea dictumst. Pellentesque risus lorem, mollis vel dui at, eleifend tristique dolor. Donec tempor vehicula dui eget suscipit. Aliquam porttitor gravida finibus. Nam quis neque in velit feugiat vulputate. Morbi eget placerat lorem. Donec eu fringilla felis, eget dictum ligula. Nullam tempor felis quis tincidunt mollis. Vivamus semper, quam quis aliquam pellentesque, nunc purus porttitor lectus, vitae placerat enim nulla at purus.
                        </p>
                        
                    </ContentArticleStyled>
                </ArticleDetailContentStyled>
                </GridItemArticleStyled>
                <GridItemAuthorStyled>
                <div>
                    <figure>
                        <img src={AvatarIcon} alt="avatarIcon" />
                    </figure>
                    <span>Leandro de Souza Alencar</span>
                </div>
                <div>
                    <ul>
                        <li> <b>Email:</b>leandro.alencar@gmail.com</li>
                        <li> <b>Desde:</b>05/03/2022</li>
                        <li> <b>Registros:</b>07</li>
                        <li> <b>Horas:</b>02:00</li>
                    </ul>
                </div>

                </GridItemAuthorStyled>

                <GridItemCommentsStyled>
                    <CommentListStyled>
                        <CommentsQuantityStyled>2 Comentários</CommentsQuantityStyled>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                        <Comment/>

                    </CommentListStyled>
                </GridItemCommentsStyled>
            </ArticleDetailContainerStyled>

            <RecommendationContainerStyled>
                <h4>Recomendações</h4>
                <ContentStyled>
                    <ArrowLeft/>
                    <ArticleRecommendationFieldStyled>
                        <ArticleStyled>
                            <Article isFavorite={false} isRecommendation={true}/>
                        </ArticleStyled>
                        <ArticleStyled>
                            <Article isFavorite={false} isRecommendation={true}/>
                        </ArticleStyled>
                    </ArticleRecommendationFieldStyled>
                    <ArrowRight/>
                </ContentStyled>
            </RecommendationContainerStyled>
        </ArticleDetailSectionStyled>
        </>
    )
}
export default ArticleDetail;
