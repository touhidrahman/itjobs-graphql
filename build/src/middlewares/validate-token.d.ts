declare type ValidateResponse = {
    id: string;
    userName: string;
    iat: number;
    exp: number;
};
export declare const validateToken: (token: string) => ValidateResponse;
export {};
