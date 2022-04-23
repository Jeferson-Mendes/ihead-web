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

const Comment:React.FC = () => {

    return (
        <CommentContainerStyled>
            <HeaderStyled>
                <span><img src={FavoriteIcon} alt="favoriteIcon" /></span>
                <div>
                    <figure>
                        <img src={AvatarIcon} alt="avatarIcon" />
                    </figure>
                    <span>Lucas</span>
                </div>
            </HeaderStyled>
            <BodyCommentStyled>
                <p>Sed vel bibendum diam. Nullam imperdiet semper arcu, nec aliquet tellus ullamcorper sit amet. Nam hendrerit, felis sed suscipit consequat.</p>
                <CommentFooterStyled>
                    <CommentHourStyled>12:00 pm</CommentHourStyled>
                    <ReportCommentStyled>
                        <img src={ReportIcon} alt="ReportIcon" />
                    </ReportCommentStyled>
                </CommentFooterStyled>
            </BodyCommentStyled>
        </CommentContainerStyled>
    )
}
export default Comment;
