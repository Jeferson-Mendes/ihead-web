import { IUser } from "../ts/interfaces";
import avatarPathIcon from '../assets/avatar.svg';

export const getAvatarPath = (user: IUser): string => {

    if (user.picture) {
        return user.picture

    } else if(user.resource?.secure_url) {
        return user.resource.secure_url

    } else {
        return avatarPathIcon
    }
}