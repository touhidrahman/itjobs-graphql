import { Document, Schema, model } from 'mongoose'

export interface ISkill extends Document {
    name: string
    logo: string
    votes: number
}

const SkillSchema = new Schema(
    {
        name: { type: String, required: true, index: true, unique: true },
        logo: String,
        votes: { type: Number, default: 0 },
    },
    {
        timestamps: false,
    },
)

export const Skill = model<ISkill>('Skill', SkillSchema)
