import * as yup from 'yup';
export declare const signupRules: yup.ObjectSchema<yup.Shape<object | undefined, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}>>;
export declare const loginRules: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    password: string;
}>>;
