import { Schema, Document, model } from 'mongoose'
import { IUser } from './user.model';
import { ICompany } from './company.model';

export interface IMessenger extends Document {
    linkedUser: IUser
    linkedCompany: ICompany
    type: 'User' | 'Company'
}

export const MessengerSchema = new Schema({
    linkedUser: {type: Schema.Types.ObjectId, ref: 'User'},
    linkedCompany: {type: Schema.Types.ObjectId, ref: 'Company'},
    type: {type: String, enum: ['User', 'Company'], required: true, default: 'User'}
}, {timestamps: true}) 

export const Messenger = model<IMessenger>('Messenger', MessengerSchema)