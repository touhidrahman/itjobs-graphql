import * as mongoose from 'mongoose'
import { string } from 'yup'

export interface ICandidate extends mongoose.Document {
    name: string
    address: {
        line1: string
        line2: string
        city: string
        postalCode: string
        country: string
    }
    contact: {
        phone: string
        email: string
    }
    educations: {
        level: string // ssc, hsc, undergraduate (3 yrs / 4 yrs), graduate 91 yr, 1.5 yr, 2 yr), diploma, phd
        isStem: boolean
        isCoumputerScience: boolean
        institution: string
        fromDate: Date
        toDate: Date
        isCompleted: boolean
        programName: string
        cgpa: number
        description: string
        courses: {
            name: string
            cgpa: number
            project: {
                title: string
                description: string
                mediaUrl: string
                projectUrl: string
            }
        }[]
    }[]
}

const CandidateSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: {
            line1: String,
            line2: String,
            city: String,
            postalCode: String,
            country: String,
        },
        contact: {
            phone: String,
            email: String,
        },
        educations: [
            {
                level: String,
                isStem: Boolean,
                isCoumputerScience: Boolean,
                institution: String,
                fromDate: Date,
                toDate: Date,
                isCompleted: Boolean,
                programName: String,
                cgpa: Number,
                description: String,
                courses: {
                    name: String,
                    cgpa: Number,
                    project: {
                        title: String,
                        description: String,
                        mediaUrl: String,
                        projectUrl: String,
                    },
                },
            },
        ],
    },
    {
        timestamps: true,
    },
)

export const Candidate = mongoose.model<ICandidate>(
    'Candidate',
    CandidateSchema,
)
