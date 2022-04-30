import React, { ChangeEvent, FormEvent, useContext } from "react";
import Navbar from "../../components/Navbar";

import { 
    UpdateUserSectionStyled,
    UpdateUserContentStyled,
    TitleEditStyled,
    AvatarContainerStyled,
} from './style';

import AvatarIcon from '../../assets/avatar.svg'; 
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
    LabelStyled,
    LoadingStyled
} from "../Signin/style";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
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

const Update:React.FC = () => {

    const { user, updateUserContext } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = React.useState<File>();
    const [previewProfileImage, setPreviewProfileImage] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const [formData, setFormData] = React.useState<Inputs>({
        name: user?.name ? user.name : '',
        email: user?.email ? user.email : '',
        phoneNumber: user?.phoneNumber ? user.phoneNumber : '',
        semester: user?.semester ? user.semester : 0,
        genderIdentity: user?.genderIdentity ? user.genderIdentity : '',
        socialName: user?.socialName ? user.socialName : '',
    });

    const navigate = useNavigate();

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    function handleFileSelected(event:ChangeEvent<HTMLInputElement>) {
        const selectedFiles = Array.from(event.target.files ? event.target.files : []);

        // console.log(selectedFiles)
        const file = URL.createObjectURL(selectedFiles[0])
        setPreviewProfileImage(file)
        setSelectedFile(selectedFiles[0]);
    }

    function handleNavigateToProfile() {
        navigate('/perfil')
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, email, phoneNumber, semester, genderIdentity, socialName } = formData;

        const data = new FormData();

        data.append('name', name);
        data.append('email', email);
        data.append('phoneNumber', phoneNumber);
        data.append('semester', String(semester));

        if (genderIdentity) {
            data.append('genderIdentity', genderIdentity);
        }

        if (socialName) {
            data.append('socialName', socialName);
        }

        if(selectedFile) {
            data.append('file', selectedFile);
        }

        // console.log(data)
        try {
            setIsLoading(true)
            const response = await api.put('/users/update', data);
            alert('Informações do usuário atualizadas com sucesso!');
            updateUserContext(response.data.user);
            setIsLoading(false)
            navigate('/perfil');
        } catch (error) {
            alert('Falha ao editar usuário');
        }

    } 

    return (
        <>
            <Navbar hasHeader={true} headerTitle='Edição de Dados'/>
            <UpdateUserSectionStyled>
                <UpdateUserContentStyled>
                    <AvatarContainerStyled>
                        <figure>
                            <img src={ previewProfileImage ? previewProfileImage : user?.picture ? `${user?.picture}` : (user?.resource ? user.resource.secure_url : AvatarIcon) } alt="avatarImg" />
                        </figure>
                        <form>
                            <div>
                                {
                                    
                                }
                                <label htmlFor="file">Editar Foto</label>
                                <input type="file" name="file" id="file" onChange={handleFileSelected}/>
                            </div>
                        </form>
                    </AvatarContainerStyled>

                    <RegisterFieldStyled>
                    <TitleEditStyled>Dados Gerais</TitleEditStyled>
                    <FormContainerStyled>
                        <FormStyled id="formRegister" onSubmit={handleSubmit}>
                        <LeftFieldInputStyled>
                                <LabelStyled htmlFor="name"> Nome </LabelStyled>
                                <InputStyled
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                                value={formData.name}
                                />

                                <LabelStyled htmlFor="email"> Email </LabelStyled>
                                <InputStyled
                                type="email"
                                name="email"
                                onChange={handleInputChange}
                                value={formData.email}
                                />

                                <LabelStyled htmlFor="semester"> Período/Semestre </LabelStyled>
                                <InputStyled
                                type="number"
                                min={1}
                                max={8} 
                                name="semester"
                                onChange={handleInputChange}
                                value={formData.semester}
                                />
{/* 
                                <LabelStyled htmlFor="password"> Senha </LabelStyled>
                                
                                <InputStyled type="password" name="password" onChange={handleInputChange}/>
                                 */}
                        
                        </LeftFieldInputStyled>

                        <RightFieldInputStyled>
                            
                                <LabelStyled htmlFor="socialname"> Nome Social </LabelStyled>
                                <InputStyled type="text"  name="socialName" value={formData.socialName} onChange={handleInputChange}/>

                                <LabelStyled htmlFor="genderIdentity"> Identidade de Gênero </LabelStyled>
                                <SelectStyled onChange={handleInputChange} value={formData.genderIdentity} name="genderIdentity" >
                                    <option value="Homem_Cisgenero">Homem Cisgênero</option>
                                    <option value="Mulher_Cisgenero">Mulher Cisgênero</option>
                                    <option value="Homem_Transgenero">Homem Transgênero</option>
                                    <option value="Mulher_Transgenero">Mulher Transgênero</option>
                                    <option value="Nao_Binario">Não-Binário</option>
                                    <option value="Nao_Informar">Não Informar</option>
                                    <option value="Outra">Outra Opção</option>
                                </SelectStyled>

                                <LabelStyled htmlFor="phoneNumber"> Telefone de Contato </LabelStyled>
                                <InputStyled
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                min={1}
                                placeholder="EX: (88) 90000-0000" />

                                {/* <LabelStyled htmlFor="confirmPassword"> Confirme a Senha </LabelStyled>
                                <InputStyled
                                type="password"
                                name="confirmPassword"
                                onChange={handleInputChange} /> */}
                                

                        </RightFieldInputStyled>
                        </FormStyled>

                        <ButtonContainerStyled>
                                <CancelButtonStyled onClick={handleNavigateToProfile} type="button" value="Cancelar" />
                                
                                <InputButtonStyled
                                termsChecked={true}
                                type="submit"
                                form="formRegister"
                                style={{ backgroundColor:"#196C3D" }}>
                                    {isLoading ? <LoadingStyled/> : 'Salvar' }
                                    </InputButtonStyled>
                                
                        </ButtonContainerStyled>
                    </FormContainerStyled>
                </RegisterFieldStyled>
                </UpdateUserContentStyled>
            </UpdateUserSectionStyled>
        </>
    )
}
export default Update;
