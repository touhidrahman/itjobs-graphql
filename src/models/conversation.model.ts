import {Document, Schema, model} from 'mongoose'
import { IUser } from './user.model';

export interface IConversation extends Document {
    subject: string
    description?: string
    participants: IUser[]
    initializeDate: Date
    isArchived: boolean
}

export const ConversationSchema = new Schema(
    {
        subject: String,
        description: String,
        participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
        initializeDate: {type: Date, default: Date.now },
        isArchived: {type: Boolean, default: false}
    },
    {
        timestamps: true
    }
)

export const Conversation = model<IConversation>('Conversation', ConversationSchema)