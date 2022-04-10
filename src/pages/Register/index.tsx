import React from "react";
// import { Link } from "react-router-dom";
import TermsOfUseModal from "../../modal/TermsOfUseModal";
import { AppName, InputStyled, LabelStyled } from "../Signin/style";
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
} from './style';
import { SubmitHandler, useForm } from "react-hook-form";
import api from "../../service/api";

type Inputs = {
    name: string;
    email: string;
    // semester: number;
    password: string;
}

const Register:React.FC = () => {
    const [termsChecked, setTermsChecked] = React.useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        async function handleSignin(userData: Inputs) {
            try {
                await api.post('/users/create', userData)
                alert('Usuário cadastrado com sucesso!');
                navigate('/');
            } catch (error) {
                alert('Falha ao cadastrar usuário.');
            }
        }

        await handleSignin(data);
    };

    const handleTermsChecked = () => {
        termsChecked ? setTermsChecked(false) : setTermsChecked(true)

        console.log(termsChecked)
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
                                <InputStyled type="number" min={1} max={8} />

                                <LabelStyled htmlFor="password"> Senha </LabelStyled>
                                <span style={{ float: "right", color:'#565353' }}>Min. 8 caracteres</span>
                                <InputStyled type="password" {...register('password')} />
                        
                        </LeftFieldInputStyled>

                        <RightFieldInputStyled>
                            
                                <LabelStyled htmlFor="socialname"> Nome Social </LabelStyled>
                                <span style={{ float: "right", color:'#093366' }}>*Opcional</span>
                                <InputStyled type="text" name="socialname" />

                                <LabelStyled htmlFor="gender"> Identidade de Gênero </LabelStyled>
                                <InputStyled type="text" name="gender" />

                                <LabelStyled htmlFor="phoneNumber"> Telefone de Contato </LabelStyled>
                                <InputStyled type="text" name="phoneNumber" min={1} />

                                <LabelStyled htmlFor="password"> Confirme a Senha </LabelStyled>
                                <span style={{ float: "right", color: '#565353' }}>Min. 8 caracteres</span>
                                <InputStyled type="password" name="password" />

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
                                <InputButtonStyled termsChecked={true} type="submit" form="formRegister">Enviar</InputButtonStyled>
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
