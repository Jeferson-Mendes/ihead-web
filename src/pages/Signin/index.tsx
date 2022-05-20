
import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import api from '../../service/api';
import { 
    SignInPageStyled,
    PresentationContainerStyled,
    AppName,
    ParagraphStyled,
    SignInFormContainerStyled,
    SignInFormStyled,
    FormContainerStyled,
    ButtonContainerStyled,
    RememberAndRecoveryContainerStyled,
    RegisterLinkStyled,
    LabelStyled,
    InputStyled,
    LoginGoogleContainerStyled,
    LoadingStyled,
    BlurContainerStyled,
} from './style';

import likeIcon from '../../assets/like.svg';
import searchIcon from '../../assets/search.svg';
import lightIcon from '../../assets/light.svg';
import certifiedIcon from '../../assets/certified.svg';

type Inputs = {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    const { signIn, handleGoogleLogin } = useContext(AuthContext);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        async function handleSignin({ email, password }: Inputs) {
            await signIn({ email, password });
        }

        setIsLoading(true)
        await handleSignin({email: data.email, password: data.password});
        setIsLoading(false)
    }

    const responseSuccessGoogle = async (res: any) => {
        const tokenId = res.tokenId;

        const response = await api.post('users/google-auth', { tokenId })

        await handleGoogleLogin(response.data.user, response.data.token)
    }

    const responseFailureGoogle = (res: any) => {
        console.log(res)
    }

    return (
        <SignInPageStyled>
            <PresentationContainerStyled>
                <AppName>iHead</AppName>
                <ParagraphStyled>
                    <BlurContainerStyled>
                        
                        <div>
                            <img src={likeIcon} alt="likeicon" />
                            <span>  Partícipe desta comunidade </span>
                        </div>
                        <p>
                        Um lugar para compartilhar conhecimento
                        e entender melhor do mundo
                        da programação.
                        </p>

                    </BlurContainerStyled>
                    <ul>
                        <li> <img src={searchIcon} alt="searchIcon" /> <span>Pesquise respostas</span> </li>
                        <li> <img src={lightIcon} alt="lightIcon" /> <span>Crie soluções</span>  </li>
                        <li> <img src={certifiedIcon} alt="certifiedIcon" /> <span>Conquiste certificados</span> </li>
                    </ul>
                </ParagraphStyled>
            </PresentationContainerStyled>

            <SignInFormContainerStyled>

                <SignInFormStyled>
                    <h4>Bem-vindo de volta</h4>
                    <h1>Faça login na sua conta</h1>
                    <FormContainerStyled>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <LabelStyled htmlFor="email">Email</LabelStyled>
                            <InputStyled
                            type="email"
                            // name='email'
                            {...register('email')}
                            />

                            <LabelStyled htmlFor="password">Senha</LabelStyled>
                            <InputStyled
                            type="password"
                            // name='password'
                            {...register('password')}
                            />

                            <RememberAndRecoveryContainerStyled>
                                <div>
                                    <label htmlFor="remember">
                                        <input type="checkbox" name="remember" />
                                        <span>Lembrar-me</span>
                                    </label>
                                </div>
                                <div>
                                    <span> <Link to='/login'>Esqueci a senha?</Link> </span>
                                </div>
                            </RememberAndRecoveryContainerStyled>
                            <ButtonContainerStyled>
                                <button>
                                    { isLoading ? <LoadingStyled></LoadingStyled> : 'Entrar' }
                                </button>
                            </ButtonContainerStyled>
                            
                            <LoginGoogleContainerStyled>
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
                                    buttonText="Login com o Google"
                                    onSuccess={responseSuccessGoogle}
                                    onFailure={responseFailureGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </LoginGoogleContainerStyled>
                        </form>
                        
                    </FormContainerStyled>
                </SignInFormStyled>

                <RegisterLinkStyled>
                            <span>Não tem uma conta? <Link to='/register' > Junte-se gratuitamente hoje </Link> </span>
                </RegisterLinkStyled>

            </SignInFormContainerStyled>
        </SignInPageStyled>
    )
}

export default Signin;