import {Document, Schema, model} from 'mongoose'
import { IUser } from './user.model';
import { IMessenger } from './messenger.model';

export interface IConversation extends Document {
    subject: string
    description?: string
    participants: IMessenger[]
    initializeDate: Date
    isArchived: boolean
}

export const ConversationSchema = new Schema(
    {
        subject: String,
        description: String,
        participants: [{type: Schema.Types.ObjectId, ref: 'Messenger'}],
        initializeDate: {type: Date, default: Date.now },
        isArchived: {type: Boolean, default: false}
    },
    {
        timestamps: true
    }
)

export const Conversation = model<IConversation>('Conversation', ConversationSchema)