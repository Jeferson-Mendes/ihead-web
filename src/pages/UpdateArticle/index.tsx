import React, { ChangeEvent } from "react";
import Navbar from '../../components/Navbar';
import RichEditor from "../../components/RichTextEditor";
import { AvatarContainerStyled } from "../Update/style";

import {
    EditorContainerStyled,
    EditorSectionStyled,
    ArticleTitleStyled,
    TextEditorContainer,
    ArticleHeaderStyled,
    RefLinksContainerStyled,
    SubmitContainerStyled,
    ArticleDescriptionStyled,
} from './style';

import educationIcon from '../../assets/education.svg';
import { CategoryArticleEnum } from "../../ts/enum";
import api from "../../service/api";
import { useLocation, useNavigate } from "react-router-dom";
import { IArticle } from "../../ts/interfaces";

type Inputs = {
    title: string;
    category: string;
    description: string;
}

const UpdateArticle:React.FC = () => {

    const [refLinks, setRefLinks] = React.useState<string[]>([]);
    const [article, setArticle] = React.useState<IArticle | null>(null)
    const [newRefLink, setNewRefLink] = React.useState<string>("");
    const [selectedFile, setSelectedFile] = React.useState<File>();
    const [previewProfileImage, setPreviewProfileImage] = React.useState<string>();
    const [textContent, setTextContent] = React.useState<string>('')

    const [formData, setFormData] = React.useState<Inputs>({
        title: '',
        category: '',
        description: '',
    });

    const location = useLocation();
    // const navigate = useNavigate();
    const navigate = useNavigate();
    
    const locationState = location.state as any;
    React.useEffect(() => {
        const article = locationState ? locationState.article : navigate('/')
        console.log(article)
        setArticle(article);

        if (article.coverImage) {
            setPreviewProfileImage(article.coverImage.secure_url)
        }

        setFormData({title: article.title, category: article.category, description: article.description})
        setRefLinks(article.references);
    },[])


    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleAddRefLink = () => {

        const regExp = /^(https?):\/\/[^\s$.?#].[^\s]*$/g;
        const url = newRefLink;
        const resultado = regExp.test(url); //retorna true ou false

        if (!resultado) {
            alert('Link inválido!')
            return;
        }

        if (!!newRefLink) {
            setRefLinks([...refLinks, newRefLink]);
        }

        setNewRefLink('');
      };

    const handleRemoveRefLink = (index: number) => {
        const removed = refLinks.splice(index, 1);
        const currentLinks = refLinks.filter( ref => !removed.includes(ref))
        setRefLinks(currentLinks);
    }

    function handleFileSelected(event:ChangeEvent<HTMLInputElement>) {
        const selectedFiles = Array.from(event.target.files ? event.target.files : []);

        // console.log(selectedFiles)
        const file = URL.createObjectURL(selectedFiles[0])
        setPreviewProfileImage(file)
        setSelectedFile(selectedFiles[0]);
    }

    const handlePublicateArticle: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!refLinks.length) {
            alert('Por favor, insira algum link de referência.')
            return
        }

        if(!textContent) {
            alert('Certifique-se de adicionar conteúdo a sua publicação.')
            return
        }

        const { title, category, description } = formData;
        const refLinksArr = JSON.stringify(refLinks);

        if (category === '') {
            alert('Por Favor, informe uma categoria.')
        }

        const data = new FormData();

        data.append('title', title);
        data.append('category', category);
        data.append('description', description);
        data.append('references', refLinksArr);
        data.append('articleContent', textContent);

        if(selectedFile) {
            data.append('file', selectedFile);
        }
        
        try {
            // console.log(title, category, description, refLinksArr, textContent)
            await api.put(`/articles/update/${locationState.article._id || locationState.article.id}`, data);
            alert('Publicação atualizada com sucesso!');
            navigate('/perfil');
        } catch (error:any) {
            alert(error.response.data.message);
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === 'Enter') {
            event.preventDefault();
            
            handleAddRefLink()
          }
    }

    return (
        <>
            <Navbar hasHeader={true} headerTitle="Publicar"/>

            <EditorSectionStyled>
                <EditorContainerStyled>
                    <form id="article" onSubmit={handlePublicateArticle}>
                    <ArticleHeaderStyled>
                        <ArticleTitleStyled>
                            <div>
                                <label htmlFor="title">Título</label>
                                <input type="text" required name="title" value={formData.title} onChange={handleInputChange} id="title" />
                            </div>

                            <div>
                                {/* <label htmlFor="category">Categoria</label> */}
                                <select name="category" value={formData.category} id="category" onChange={handleInputChange} required>
                                    <option value=''>Categoria</option>
                                    { Object.values(CategoryArticleEnum).map( (category, index) => (
                                        <option key={index} value={category}>{ category }</option>
                                    ) )}
                                </select>
                            </div>

                        </ArticleTitleStyled>
                            <AvatarContainerStyled>
                            <figure>
                                <img src={previewProfileImage ? previewProfileImage: educationIcon} alt="educationicon" />
                            </figure>
                            <div>
                                <div>
                                    {
                                        
                                    }
                                    <label htmlFor="file">Adicionar Capa</label>
                                    <input type="file" name="file" id="file" onChange={handleFileSelected} />
                                </div>
                            </div>
                        </AvatarContainerStyled>
                    </ArticleHeaderStyled>
                    <TextEditorContainer>
                        { article ? (
                            <RichEditor defaultText={`${article?.articleContent}`} setTextContent={setTextContent}/>
                        ) : ''}
                        <ArticleDescriptionStyled>
                            <span>Adicione uma descrição para melhorar a visualização do seu artigo.</span>
                            <textarea
                            name="description"
                            id="description"
                            required
                            value={formData.description}
                            cols={30}
                            onChange={handleInputChange}
                            rows={4}></textarea>
                        </ArticleDescriptionStyled>
                        <RefLinksContainerStyled>
                            <span>Adicione links de referência</span>
                            <div
                            // onSubmit={handleAddRefLink}
                            >
                                <input
                                type="url"
                                name="references"
                                id="ref"
                                placeholder="Adicione links de Referências"
                                value={newRefLink}
                                onKeyDown={(event) => handleKeyDown(event)}
                                onChange={(event) => setNewRefLink(event.target.value)}/>
                                {/* <button onClick={handleAddRefLink} >Adicionar</button> */}
                                <span onClick={handleAddRefLink}>Adicionar Link</span>
                            </div>

                            <ul>
                                { refLinks.map((refLink, index) => (
                                    <li key={index}> <a href={refLink}>{ refLink }</a> <span onClick={() => handleRemoveRefLink(index)} >Remover</span> </li>
                                )) }
                            </ul>
                        </RefLinksContainerStyled>
                    </TextEditorContainer>
                    <SubmitContainerStyled>
                            <span onClick={() => navigate('/')}>Cancelar</span>
                            <button type="submit" form="article">Salvar</button>
                    </SubmitContainerStyled>
                </form>
                </EditorContainerStyled>
            </EditorSectionStyled>
        </>
    )
}
export default UpdateArticle;
