import React from "react";
import Navbar from "../../components/Navbar";

import { 
    UpdateUserSectionStyled,
    UpdateUserContentStyled,
    TitleEditStyled,
    AvatarContainerStyled,
} from './style';

import AvatarImg from '../../assets/avatar.svg'; 
import {
    ButtonContainerStyled,
    CancelButtonStyled,
    FormContainerStyled,
    FormStyled,
    InputButtonStyled,
    LeftFieldInputStyled,
    RegisterFieldStyled,
    RightFieldInputStyled,
    SelectStyled
} from "../Register/style";

import {
    InputStyled,
    LabelStyled
} from "../Signin/style";

const Update:React.FC = () => {

    return (
        <>
            <Navbar hasHeader={true} headerTitle='Edição de Dados'/>
            <UpdateUserSectionStyled>
                <UpdateUserContentStyled>
                    <AvatarContainerStyled>
                        <figure>
                            <img src={AvatarImg} alt="avatarImg" />
                        </figure>
                    </AvatarContainerStyled>

                    <RegisterFieldStyled>
                    <TitleEditStyled>Dados Gerais</TitleEditStyled>
                    <FormContainerStyled>
                        <FormStyled id="formRegister">
                        <LeftFieldInputStyled>
                                <LabelStyled htmlFor="name"> Nome </LabelStyled>
                                <InputStyled
                                type="text"
                                
                                />

                                <LabelStyled htmlFor="email"> Email </LabelStyled>
                                <InputStyled
                                type="email"
                                
                                />

                                <LabelStyled htmlFor="semester"> Período/Semestre </LabelStyled>
                                <InputStyled
                                type="number"
                                min={1}
                                max={8} 
                                
                                />

                                <LabelStyled htmlFor="password"> Senha </LabelStyled>
                                
                                <InputStyled type="password" name="password" />
                                
                        
                        </LeftFieldInputStyled>

                        <RightFieldInputStyled>
                            
                                <LabelStyled htmlFor="socialname"> Nome Social </LabelStyled>
                                <InputStyled type="text"  />

                                <LabelStyled htmlFor="genderIdentity"> Identidade de Gênero </LabelStyled>
                                <SelectStyled  >
                                    <option value="Homem_Cisgenero">Homem Cisgênero</option>
                                    <option value="Mulher_Cisgenero">Mulher Cisgênero</option>
                                    <option value="Homem_Transgenero">Homem Transgênero</option>
                                    <option value="Mulher_Transgenero">Mulher Transgênero</option>
                                    <option value="Nao_Binario">Não-Binário</option>
                                    <option value="Nao_Informar">Não Informar</option>
                                    <option value="Outra">Outra Opção</option>
                                </SelectStyled>

                                <LabelStyled htmlFor="phoneNumber"> Telefone de Contato </LabelStyled>
                                <InputStyled type="text" min={1} placeholder="EX: (88) 90000-0000" />

                                <LabelStyled htmlFor="confirmPassword"> Confirme a Senha </LabelStyled>
                                <InputStyled type="password" name="confirmPassword" />
                                

                        </RightFieldInputStyled>
                        </FormStyled>

                        <ButtonContainerStyled>
                                <CancelButtonStyled type="button" value="Cancelar" />
                                
                                <InputButtonStyled termsChecked={true} type="submit" form="formRegister" style={{ backgroundColor:"#196C3D" }}>Salvar</InputButtonStyled>
                                
                        </ButtonContainerStyled>
                    </FormContainerStyled>
                </RegisterFieldStyled>
                </UpdateUserContentStyled>
            </UpdateUserSectionStyled>
        </>
    )
}
export default Update;
