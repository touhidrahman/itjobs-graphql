import { IUser } from '@local/models/user.model';
declare type UserForToken = {
    id: string;
    name: string;
    email: string;
};
declare type LoginResponse = {
    token: string;
    user: UserForToken | null;
};
export declare function signup(parent: any, args: any): Promise<IUser | Error>;
export declare function login(parent: any, args: any): Promise<LoginResponse | Error>;
export {};
