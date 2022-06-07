import React from "react";
import { Folder } from 'react-feather';
import Navbar from "../../components/Navbar";

import {
    ManageReportsSectionStyled,
    ManageReportsContainerStyled,
    TableFieldStyled,
    TableStyled,
    ReportsNumberStyled,
}
from './style';

import { IReport } from "../../ts/interfaces";
import api from "../../service/api";
import { getAvatarPath } from "../../utils/getAvatarPath";
import { ReportTypeEnum } from "../../ts/enum";
import ReportDetail from "../../modal/ReportDetail";

const ManageReports:React.FC = () => {

    const [reports, setReports] = React.useState<IReport[]>([]);
    const [reportsNum, setReportsNum] = React.useState<number>(0);
    const [currentReport, setCurrentReport] = React.useState<IReport | null>(null);
    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        async function getReports() {
            try {
                const response = await api.get(`reports/?limit=${10}&page=${1}`);
                setReports(response.data.reports);
                setReportsNum(response.data.reportsNumber);
                return
            } catch (error:any) {
                alert(error.response.data.message);
                return
            }
        }

        getReports();
    },[]);

    function handleOpenModal(report: IReport) {
        setCurrentReport(report);
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
            <Navbar hasHeader={true} headerTitle='Gerênciar Denúncias'/>
            {currentReport ?
            <ReportDetail modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(!modalIsOpen)} report={currentReport}/>
             : ''
             }
            <ManageReportsSectionStyled>
                <ManageReportsContainerStyled>
                    <h3>Denúncias</h3>
                    <TableFieldStyled>
                        <ReportsNumberStyled>{reportsNum} Denúncias</ReportsNumberStyled>
                    <TableStyled>
                        <thead>
                            <tr>
                                <th>Denunciado</th>
                                <th>Acusação</th>
                                <th>Abrir denúncia</th>
                            </tr>

                        </thead>

                        <tbody>
                            { reports.map(report => (
                                <tr key={report.id}>
                                    <td>
                                        <figure>
                                        <img src={getAvatarPath(report.denounced)} alt="avatar" />
                                        </figure>
                                        <span>{report.denounced.name}</span>
                                    </td>
                                    <td>{report.type === ReportTypeEnum.ARTICLE ? 'Publicação' : 'Comentário'}</td>
                                    <td onClick={() => handleOpenModal(report)}> <Folder/> </td>
                                </tr>                            

                            )) }
                            
                        </tbody>
                        </TableStyled>
                    </TableFieldStyled>
                </ManageReportsContainerStyled>
            </ManageReportsSectionStyled>
        </>
    )
}
export default ManageReports;
