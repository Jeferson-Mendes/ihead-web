
import { Link } from 'react-router-dom';
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

const Signin: React.FC = () => {
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
                        <form >
                            <LabelStyled htmlFor="email">Email</LabelStyled>
                            <InputStyled type="email" name='email'/>

                            <LabelStyled htmlFor="password">Senha</LabelStyled>
                            <InputStyled type="password" name='password'/>

                            <RememberAndRecoveryContainerStyled>
                                <div>
                                    <label htmlFor="remember">
                                        <input type="checkbox" name="remember" />
                                        <span>Lembrar-me</span>
                                    </label>
                                </div>
                                <div>
                                    <span> <a href="#">Esqueci a senha?</a> </span>
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