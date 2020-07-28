import { Document, Schema, model } from 'mongoose'

export interface ISkill extends Document {
    name: string
    logo: string
    votes: number
}

const SkillSchema = new Schema(
    {
        name: { type: String, required: true },
        logo: String,
        votes: { type: Number, default: 0 },
    },
    {
        timestamps: false,
    },
)

export default model<ISkill>('Skill', SkillSchema)
