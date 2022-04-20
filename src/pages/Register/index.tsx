import React from "react";
// import { Link } from "react-router-dom";
import TermsOfUseModal from "../../modal/TermsOfUseModal";
import { AppName, InputStyled, LabelStyled, LoadingStyled } from "../Signin/style";
import { useNavigate } from 'react-router-dom';
import { 
    ImageLogoContainerStyled,
    SignupContainerStyled,
    RegisterContainerStyled,
    CheckboxTermOfServicesStyled,
    LeftFieldInputStyled,
    RightFieldInputStyled,
    TitleStyled,
    ButtonContainerStyled,
    FormStyled,
    RegisterFieldStyled,
    FormContainerStyled,
    InputButtonStyled,
    // GoBackStyled,
    CancelButtonStyled,
    SelectStyled
} from './style';
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../../service/api";

type Inputs = {
    name: string;
    email: string;
    // password: string;
	phoneNumber: string;
	semester: number;
    socialName?: string;
    genderIdentity?: string;
}

const Register:React.FC = () => {
    const [termsChecked, setTermsChecked] = React.useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    // const [typedPassword, setTypedPassword] = React.useState<string>('');
    // const [confirmTypedPassword, setConfirmTypedPassword] = React.useState<string>('');
    const [passIsEqual, setPassIsEqual] = React.useState<boolean>(false);
    const [passData, setPassData] = React.useState({
        password: '',
        confirmPassword: '',
      })
      
    const navigate = useNavigate();

    React.useEffect(() => {
    passData.confirmPassword === passData.password ? setPassIsEqual(true) : setPassIsEqual(false)
    },[passData.confirmPassword, passData.password])


    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setPassData({ ...passData, [name]: value })
      }

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        async function handleSignin(userData: Inputs) {
            try {
                await api.post('/users/create', {...userData, password: passData.password})
                alert('Usuário cadastrado com sucesso!');
                navigate('/');
            } catch (error) {
                alert('Falha ao cadastrar usuário.');
            }
        }

        setIsLoading(true)
        await handleSignin(data);
        setIsLoading(false)
    };

    const handleTermsChecked = () => {
        termsChecked ? setTermsChecked(false) : setTermsChecked(true)

    }

    const handleCloseModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }

    const handleNavigateToLogin = () => {
        navigate('/login');
    }

    return (
        <>
        <TermsOfUseModal modalIsOpen={modalIsOpen} closeModal={handleCloseModal}/>
        <SignupContainerStyled>
            <ImageLogoContainerStyled>
                <AppName> iHead </AppName>
            </ImageLogoContainerStyled>

            <RegisterContainerStyled>
                {/* <GoBackStyled>
                    <Link to='/login'>
                        Voltar para fazer login
                    </Link>
                </GoBackStyled> */}
                <RegisterFieldStyled>
                    <TitleStyled>Crie sua conta</TitleStyled>
                    <FormContainerStyled>
                        <FormStyled id="formRegister" onSubmit={handleSubmit(onSubmit)}>
                        <LeftFieldInputStyled>
                                <LabelStyled htmlFor="name"> Nome </LabelStyled>
                                <InputStyled
                                type="text"
                                {...register('name')}
                                />

                                <LabelStyled htmlFor="email"> Email </LabelStyled>
                                <InputStyled
                                type="email"
                                {...register('email')}
                                />

                                <LabelStyled htmlFor="semester"> Período/Semestre </LabelStyled>
                                <InputStyled
                                type="number"
                                min={1}
                                max={8} 
                                {...register('semester')}
                                />

                                <LabelStyled htmlFor="password"> Senha </LabelStyled>
                                <span style={{ float: "right", color:'#565353' }}>Min. 8 caracteres</span>
                                <InputStyled type="password" style={ passIsEqual? {} : { border: '1px solid red', outline: 'none' } } name="password" onChange={handlePasswordChange} />
                                {passIsEqual
                                ?
                                ''
                                :
                                <span style={{ color: 'red', fontSize: '0.8rem', position: 'absolute' }}>Campo de "Senha" deve ser igual a "Confirme a Senha"</span>
                                }
                        
                        </LeftFieldInputStyled>

                        <RightFieldInputStyled>
                            
                                <LabelStyled htmlFor="socialname"> Nome Social </LabelStyled>
                                <span style={{ float: "right", color:'#093366' }}>*Opcional</span>
                                <InputStyled type="text" {...register('socialName')} />

                                <LabelStyled htmlFor="genderIdentity"> Identidade de Gênero </LabelStyled>
                                <SelectStyled  {...register('genderIdentity')} >
                                    <option value="Homem_Cisgenero">Homem Cisgênero</option>
                                    <option value="Mulher_Cisgenero">Mulher Cisgênero</option>
                                    <option value="Homem_Transgenero">Homem Transgênero</option>
                                    <option value="Mulher_Transgenero">Mulher Transgênero</option>
                                    <option value="Nao_Binario">Não-Binário</option>
                                    <option value="Nao_Informar">Não Informar</option>
                                    <option value="Outra">Outra Opção</option>
                                </SelectStyled>

                                <LabelStyled htmlFor="phoneNumber"> Telefone de Contato </LabelStyled>
                                <InputStyled type="text" {...register('phoneNumber')} min={1} placeholder="EX: (88) 90000-0000" />

                                <LabelStyled htmlFor="confirmPassword"> Confirme a Senha </LabelStyled>
                                <span style={{ float: "right", color: '#565353' }}>Min. 8 caracteres</span>
                                <InputStyled style={ passIsEqual? {} : { border: '1px solid red', outline: 'none' } } type="password" name="confirmPassword"  onChange={handlePasswordChange} />
                                

                        </RightFieldInputStyled>
                        </FormStyled>
                        <CheckboxTermOfServicesStyled>
                                <label htmlFor="terms"> 
                                <input type="checkbox" name="terms" id="terms" onChange={handleTermsChecked}/>
                                <span>Declaro estar ciente de que sou plenamente responsável pelas informações aqui prestadas e pelo <strong onClick={handleCloseModal}>Termo de Uso.</strong> </span>
                                </label>  
                        </CheckboxTermOfServicesStyled>


                        <ButtonContainerStyled>
                                <CancelButtonStyled onClick={handleNavigateToLogin} type="button" value="Cancelar" />
                                { termsChecked
                                ? 
                                <InputButtonStyled termsChecked={true} type="submit" form="formRegister" disabled>
                                    { isLoading ? <LoadingStyled></LoadingStyled> : 'Enviar' }
                                    </InputButtonStyled>
                                : 
                                <InputButtonStyled termsChecked={false} type="submit" form="formRegister" disabled>Enviar</InputButtonStyled>
                                }
                        </ButtonContainerStyled>
                    </FormContainerStyled>
                </RegisterFieldStyled>
            </RegisterContainerStyled>
        </SignupContainerStyled>
        </>
    )
}

export default Register;
