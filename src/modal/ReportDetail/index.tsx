
import React from "react";
import { X, Link } from 'react-feather';
import { useNavigate } from "react-router-dom";
import { LoadingStyled } from "../../pages/Signin/style";
import api from "../../service/api";
import { IReport } from "../../ts/interfaces";
import { 
    ButtonCancel,
    ButtonConfirm,
    ReportDetailContainerStyled,
    ConfirmFieldStyled,
    Title,
    TitleHeaderStyled,
    ReportInfo,
 } from './style';

 interface IProps {
    report: IReport;
    modalIsOpen: boolean;
    closeModal(): void;
}

const ReportDetail:React.FC<IProps> = ({ report, modalIsOpen, closeModal }) => {
    const [loading, setLoading] = React.useState<boolean>(false);

    const navigate = useNavigate();

    async function handleResolveReport() {
        setLoading(true)
        try {
            await api.delete(`reports/${report.id}`)
            setLoading(false);
            closeModal()
            return;
        } catch (error: any) {
            closeModal()
            alert(error.response.data.message);
            return
        }
    }

    async function handleDeleteArticleOrComment() {
        setLoading(true)
        try {
            await api.delete(`reports/resolve/${report.id}`)
            setLoading(false);
            closeModal()
            return;
        } catch (error: any) {
            closeModal()
            alert(error.response.data.message);
            return  
        }
    }

    const handleNavigateToArticleDetail = () => {
        window.scrollTo({ top: 0 })
        navigate('/artigo', { state: { articleId: report.publication ? report.publication.id : '', category: report.publication?.category } })
    }

    return (
        <ReportDetailContainerStyled modalIsOpen={modalIsOpen}>
            <ConfirmFieldStyled>
                <TitleHeaderStyled>
                    <div>
                        <span onClick={closeModal}>
                            <X/>
                        </span>
                    </div>
                <Title>Denúncia</Title>
                </TitleHeaderStyled>
                <ReportInfo>
                    <ul>
                        <li>
                        <b>Denunciado: </b> {report.denounced.name}
                        </li>
                        <li>
                        <b>Denuncia em: </b> {report.type}
                        </li>
                        <li onClick={handleNavigateToArticleDetail}>
                        <b>Link da página: </b> <Link/>
                        </li>
                        <li>
                        <b>Descrição: </b>
                        </li>
                    </ul>
                </ReportInfo>
                <input type="text"  disabled value={report.reason}/>
                {/* <h4 style={{ color: '#020203', marginBottom: '1rem' }} >Ações</h4> */}
                <ButtonCancel
                onClick={handleResolveReport}
                title="Manter o comentário ou artigo denunciado e resolver a denúncia."
                >
                    { loading ? <LoadingStyled/> : 'Manter Comentário/Artigo'}
                </ButtonCancel>
                <ButtonConfirm
                onClick={handleDeleteArticleOrComment}
                title="Remover da plataforma o comentário ou artigo denunciado."
                > 
                { loading ? <LoadingStyled/> : 'Deletar Comentário/Artigo'}
                </ButtonConfirm>
            </ConfirmFieldStyled>
        </ReportDetailContainerStyled>
    )
}
export default ReportDetail;
