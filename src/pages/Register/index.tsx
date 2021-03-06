import React from "react";
import { Link } from "react-router-dom";
import { AppName, InputStyled, LabelStyled } from "../Signin/style";

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
    GoBackStyled,
} from './style';

const Register:React.FC = () => {
    const [termsChecked, setTermsChecked] = React.useState<boolean>(false)

    const handleTermsChecked = () => {
        termsChecked ? setTermsChecked(false) : setTermsChecked(true)

        console.log(termsChecked)
    }
    return (
        <>
        <SignupContainerStyled>

            <ImageLogoContainerStyled>
                <AppName> iHead </AppName>
            </ImageLogoContainerStyled>

            <RegisterContainerStyled>
                <GoBackStyled>
                    <Link to='/login'>
                        Voltar para fazer login
                    </Link>
                </GoBackStyled>
                <RegisterFieldStyled>
                    <TitleStyled>Crie sua conta</TitleStyled>
                    <FormContainerStyled>
                        <FormStyled >
                        <LeftFieldInputStyled>
                                <LabelStyled htmlFor="name"> Nome </LabelStyled>
                                <InputStyled type="text" name="name" />

                                <LabelStyled htmlFor="email"> Email </LabelStyled>
                                <InputStyled type="email" name="email" />

                                <LabelStyled htmlFor="semester"> Período/Semestre </LabelStyled>
                                <InputStyled type="number" name="semester" min={1} />

                                <LabelStyled htmlFor="password"> Senha </LabelStyled>
                                <span style={{ float: "right", color:'#565353' }}>Min. 8 caracteres</span>
                                <InputStyled type="password" name="password" />
                        
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
                                <span>Declaro estar ciente de que sou plenamente responsável pelas informações aqui prestadas e pelo <a href="https://www.lipsum.com/">Termo de Uso.</a> </span>
                                </label>  
                        </CheckboxTermOfServicesStyled>


                        <ButtonContainerStyled>
                                <InputButtonStyled termsChecked={termsChecked} type="button" value="Enviar" />
                        </ButtonContainerStyled>
                    </FormContainerStyled>
                </RegisterFieldStyled>
            </RegisterContainerStyled>
        </SignupContainerStyled>
        </>
    )
}

export default Register;
