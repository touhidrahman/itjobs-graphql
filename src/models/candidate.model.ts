import * as mongoose from 'mongoose'

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
        fax: string
        email: string
        website: string
        facebook: string
        linkedin: string
    }

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
            fax: String,
            email: String,
            website: String,
            facebook: String,
            linkedin: String,
        },
    }, {
        timestamps: true
    }
)

export const Candidate = mongoose.model<ICandidate>('Candidate', CandidateSchema)