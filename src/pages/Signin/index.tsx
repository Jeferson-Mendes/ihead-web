
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
    RegisterLinkStyled
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
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email'/>

                            <label htmlFor="password">Senha</label>
                            <input type="password" name='password'/>

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
                            <span>Não tem uma conta? <a href="#"> Junte-se gratuitamente hoje </a> </span>
                </RegisterLinkStyled>

            </SignInFormContainerStyled>
        </SignInPageStyled>
    )
}

export default Signin;