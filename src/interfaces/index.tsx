export interface IUser {
    id: string;
    name: string;
    email: string;
    semester: number;
    picture?: string;
    phoneNumber: string;
    genderIdentity: string;
    socialName: string;
    resource?: IResource;
    createdAt: Date;
}

export interface IResource {
    secure_url?: string;
}