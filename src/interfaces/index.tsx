export interface IUser {
    id: string;
    name: string;
    email: string;
    semester: number;
    picture?: string;
    resource?: IResource;
    createdAt: Date;
}

export interface IResource {
    secure_url?: string;
}