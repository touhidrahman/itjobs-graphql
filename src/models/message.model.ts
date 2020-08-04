import {Document, Schema, model} from 'mongoose'
import { IConversation } from './conversation.model';
import { IUser } from './user.model';

export interface IMessage extends Document {
    conversation: IConversation
    from: IUser
    text: string
}

export const MessageSchema = new Schema({
    conversation: {type: Schema.Types.ObjectId, ref: 'Conversation'},
    from: {type: Schema.Types.ObjectId, ref: 'User'},
    text: String
}, {timestamps: true})

export const Message = model<IMessage>('Message', MessageSchema)
