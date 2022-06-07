import { CategoryArticleEnum, ReportTypeEnum, UserRoleEnum } from "../enum";

export interface IUser {
    id: string;
    name: string;
    email: string;
    semester: number;
    picture?: string;
    phoneNumber: string;
    genderIdentity: string;
    publicationsNumber: number;
    commentsNumber: number;
    contributionTotalHours: number;
    favoriteArticles: IArticle[];
    favoriteArticleComments: IComment[];
    socialName: string;
    resource?: IResource;
    userRole: UserRoleEnum;
    createdAt: Date;
}

export interface IResource {
    secure_url?: string;
}

export interface IArticle {
  id: string;
  title: string;
  author: IUser;
  coverImage?: IResource;
  articleContent: string;
  category: CategoryArticleEnum;
  likes: number;
  views: number;
  description: string;
  githubRepoLink?: string;
  reportsReceived: number;
  references?: string[];
}

export interface IComment {
  id: string;
  user: IUser;
  article: IArticle;
  commentContent: string;
  numberLikes: number;
  reportsReceived: number;
  createdAt: Date;
}

export interface IReport {
  id: string;
  denounced: IUser;
  type: ReportTypeEnum;
  reason: string;
  publication?: IArticle;
  comment?: IComment;
}