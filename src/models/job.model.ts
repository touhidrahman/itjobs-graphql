import * as mongoose from 'mongoose'
import { ICompany } from './company.model'
import { ITeam } from './team.model'

export interface IJob extends mongoose.Document {
    role: string // TODO enum
    title: string
    level: string // TODO enum
    locationCity: string
    effort: string // TODO enum fulltime part time
    remote: string // TODO enum minimal, limited, full
    salary: {
        min: number
        max: number
    }
    company: ICompany
    teamOrProduct?: ITeam
    experience: {
        min: number
        max: number
    }
    educationLevel: number
    skills: {
        mustHave: string[]
        niceToHave: string[]
    }
    englishSkillLevel: number
    relocationSupported: boolean
    benefits: string[]
    description: string
    leaveDays: number
    employerReference: string
    gender: string // TODO enum male, female, both
}

const JobSchema = new mongoose.Schema({
    role: { type: String, required: true },
    title: String,
    level: { type: String, required: true },
    locationCity: String,
    effort: { type: String, required: true },
    remote: String,
    salary: {
        min: Number,
        max: Number,
    },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    teamOrProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    experience: {
        min: Number,
        max: Number,
    },
    educationLevel: Number,
    skills: {
        mustHave: [String],
        niceToHave: [String],
    },
    englishSkillLevel: Number,
    relocationSupported: Boolean,
    benefits: [String],
    description: String,
    leaveDays: Number,
    employerReference: String,
    gender: String,
})

export const Job = mongoose.model<IJob>('Job', JobSchema)
