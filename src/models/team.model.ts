import { Document, model, Schema } from 'mongoose'

export interface ITeam extends Document {
    type: 'TEAM' | 'PRODUCT'
    name: string
    description: string
    url: string
    technology: string[]
}

const TeamSchema = new Schema({
    type: { type: String, enum: ['TEAM', 'PRODUCT'], required: true },
    name: String,
    description: String,
    url: String,
    technology: [String],
})

export const Team = model<ITeam>('Team', TeamSchema)
