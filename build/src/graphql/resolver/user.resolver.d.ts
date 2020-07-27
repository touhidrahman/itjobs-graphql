import { IUser } from '@local/models/user.model';
declare type LoginResponse = {
    token: string;
    user: IUser | null;
};
export declare function signup(parent: any, args: any): Promise<IUser | Error>;
export declare function login(parent: any, args: any): Promise<LoginResponse | Error>;
export {};
