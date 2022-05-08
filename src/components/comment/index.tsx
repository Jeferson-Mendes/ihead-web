import React from "react";

import {
    CommentContainerStyled,
    HeaderStyled,
    BodyCommentStyled,
    CommentFooterStyled,
    CommentHourStyled,
    ReportCommentStyled,
} from './style';

import FavoriteIcon from '../../assets/heart-regular.svg';
import AvatarIcon from '../../assets/avatar.svg';
import ReportIcon from '../../assets/report.svg';
import { format, getHours, getMinutes, parseISO } from "date-fns";

interface IProps {
    authorPath?: string;
    authorName: string;
    comment: string;
    hour: string;
}

const Comment:React.FC<IProps> = ({ authorName, authorPath, comment, hour }) => {

    const formatHour = (hourDate: string) => {
        const hour = getHours(parseISO(hourDate));
        let minute = getMinutes(parseISO(hourDate)).toString();
        const formatHour = format(parseISO(hourDate), 'aa');

        if (minute.length < 2) {
            minute = `0${minute}`
        }

        return `${hour}:${minute} ${formatHour}`;

    }

    return (
        <CommentContainerStyled>
            <HeaderStyled>
                <span><img src={FavoriteIcon} alt="favoriteIcon" /></span>
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
    )
}
export default Comment;
