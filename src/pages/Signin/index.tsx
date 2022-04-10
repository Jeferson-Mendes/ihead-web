
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
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
} from './style';

type Inputs = {
    email: string;
    password: string;
}

const Signin: React.FC = () => {
    const { signIn } = useContext(AuthContext);

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        async function handleSignin({ email, password }: Inputs) {
            console.log(email, password)
            await signIn({ email, password });
        }

        await handleSignin({email: data.email, password: data.password});
    }

    return (
        <SignInPageStyled>
            <PresentationContainerStyled>
                <AppName>iHead</AppName>
                <ParagraphStyled>
                    <p>
                    Um lugar para compartilhar <b>conhecimento </b>
                     e entender melhor do mundo
                    da <b>programação</b>.
                    </p>
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
                                <button>Entrar</button>
                            </ButtonContainerStyled>
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