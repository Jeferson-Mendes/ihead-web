import React from "react";

import {
    CommentContainerStyled,
    HeaderStyled,
    BodyCommentStyled,
    CommentFooterStyled,
    CommentHourStyled,
    ReportCommentStyled,
} from './style';

import AvatarIcon from '../../assets/avatar.svg';
import ReportIcon from '../../assets/report.svg';
import { format, getHours, getMinutes, parseISO } from "date-fns";
import { Trash2 } from 'react-feather';
import DeleteComment from '../../modal/DeleteComment';

interface IProps {
    authorPath?: string;
    authorName: string;
    comment: string;
    hour: string;
    isOwner: boolean;
    commentId: string;
}

const Comment:React.FC<IProps> = ({ authorName, authorPath, comment, hour, isOwner, commentId }) => {

    const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false); 

    const formatHour = (hourDate: string) => {
        const hour = getHours(parseISO(hourDate));
        let minute = getMinutes(parseISO(hourDate)).toString();
        const formatHour = format(parseISO(hourDate), 'aa');

        if (minute.length < 2) {
            minute = `0${minute}`
        }

        return `${hour}:${minute} ${formatHour}`;

    }

    const handleCloseModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <>
        <DeleteComment modalIsOpen={modalIsOpen} closeModal={handleCloseModal} commentId={commentId}/>
        <CommentContainerStyled>
            <HeaderStyled>
                { isOwner ? <span> <Trash2 onClick={handleCloseModal}/> </span> : '' } 
                <div>
                    <figure>
                        <img src={authorPath ? authorPath : AvatarIcon} alt="avatarIcon" />
                    </figure>
                    <span>{authorName}</span>
                </div>
            </HeaderStyled>
            <BodyCommentStyled>
                <p>{ comment }</p>
                <CommentFooterStyled>
                    <CommentHourStyled>{formatHour(hour)}</CommentHourStyled>
                    <ReportCommentStyled>
                        <img src={ReportIcon} alt="ReportIcon" />
                    </ReportCommentStyled>
                </CommentFooterStyled>
            </BodyCommentStyled>
        </CommentContainerStyled>
        </>
    )
}
export default Comment;
