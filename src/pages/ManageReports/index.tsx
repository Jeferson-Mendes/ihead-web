import React from "react";
import Navbar from "../../components/Navbar";

import {
    ManageReportsSectionStyled,
    ManageReportsContainerStyled,
    TableFieldStyled,
    TableStyled,
    ReportsNumberStyled,
}
from './style';

import avatarPath from '../../assets/avatar.svg';
import eyeIcon from '../../assets/eye.svg';
import checkIcon from '../../assets/check.svg';
import trashIcon from '../../assets/trash.svg';

const ManageReports:React.FC = () => {

    return (
        <>
            <Navbar hasHeader={true} headerTitle='Gerênciar Denúncias'/>
            
            <ManageReportsSectionStyled>
                <ManageReportsContainerStyled>
                    <h3>Denúncias</h3>
                    <TableFieldStyled>
                        <ReportsNumberStyled>4 Denúncias</ReportsNumberStyled>
                    <TableStyled>
                        <thead>
                            <tr>
                                <th>Denunciado</th>
                                <th>Data</th>
                                <th>Acusação</th>
                                <th>Visualização</th>
                                <th>Verificado</th>
                                <th>Apagar</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>
                                    <figure>
                                    <img src={avatarPath} alt="avatar" />
                                    </figure>
                                    <span>Ana Maria</span>
                                </td>
                                <td>24/03/2022</td>
                                <td>Comentário</td>

                                <td>
                                    <figure>
                                        <img src={eyeIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={checkIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={trashIcon} alt="eye" />
                                    </figure>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <figure>
                                    <img src={avatarPath} alt="avatar" />
                                    </figure>
                                    <span>Ana Maria</span>
                                </td>
                                <td>24/03/2022</td>
                                <td>Comentário</td>

                                <td>
                                    <figure>
                                        <img src={eyeIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={checkIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={trashIcon} alt="eye" />
                                    </figure>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <figure>
                                    <img src={avatarPath} alt="avatar" />
                                    </figure>
                                    <span>Ana Maria</span>
                                </td>
                                <td>24/03/2022</td>
                                <td>Comentário</td>

                                <td>
                                    <figure>
                                        <img src={eyeIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={checkIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={trashIcon} alt="eye" />
                                    </figure>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <figure>
                                    <img src={avatarPath} alt="avatar" />
                                    </figure>
                                    <span>Ana Maria</span>
                                </td>
                                <td>24/03/2022</td>
                                <td>Comentário</td>

                                <td>
                                    <figure>
                                        <img src={eyeIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={checkIcon} alt="eye" />
                                    </figure>
                                </td>

                                <td>
                                    <figure>
                                        <img src={trashIcon} alt="eye" />
                                    </figure>
                                </td>
                            </tr>
                            
                            
                        </tbody>
                        </TableStyled>
                    </TableFieldStyled>
                </ManageReportsContainerStyled>
            </ManageReportsSectionStyled>
        </>
    )
}
export default ManageReports;
