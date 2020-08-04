import { Document, Schema, model } from 'mongoose'
import { IConversation } from './conversation.model'
import { IUser } from './user.model'
import { IMessenger } from './messenger.model'

export interface IMessage extends Document {
    conversation: IConversation
    from: IMessenger
    text: string
}

export const MessageSchema = new Schema(
    {
        conversation: { type: Schema.Types.ObjectId, ref: 'Conversation' },
        from: { type: Schema.Types.ObjectId, ref: 'Messenger' },
        text: String,
    },
    { timestamps: true },
)

export const Message = model<IMessage>('Message', MessageSchema)
