import * as mongoose from 'mongoose';
export interface IUser extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
declare const _default: mongoose.Model<IUser, {}>;
export default _default;
