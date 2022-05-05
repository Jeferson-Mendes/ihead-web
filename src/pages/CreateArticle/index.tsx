import React from "react";
import Navbar from '../../components/Navbar';
import RichEditor from "../../components/RichTextEditor";

import {
    EditorContainerStyled,
    EditorSectionStyled
} from './style';

const CreateArticle:React.FC = () => {

    return (
        <>
            <Navbar hasHeader={true} headerTitle="Publicar"/>

            <EditorSectionStyled>
                <EditorContainerStyled>
                    <RichEditor/>
                </EditorContainerStyled>
            </EditorSectionStyled>
        </>
    )
}
export default CreateArticle;
