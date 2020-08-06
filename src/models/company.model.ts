import * as mongoose from 'mongoose'
import { IUser } from '@local/models/user.model'
import { ITeam } from '@local/models/team.model'

export interface ICompany extends mongoose.Document {
    displayName: string
    legalName: string
    industry: string[]
    description: string
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
    registrationDetails?: string // TODO proper schema
    keyPersons?: {
        chairman: string
        managingDirector: string
        ceo: string
        cto: string
        cfo: string
    }
    hiringManager?: IUser[]
    teams: ITeam[]
    isVerified: boolean
    // TODO premium
}

const CompanySchema = new mongoose.Schema(
    {
        displayName: { type: String, required: true },
        legalName: { type: String, required: true },
        industry: [String],
        description: String,
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
        registrationDetails: String,
        keyPersons: {
            chairman: String,
            managingDirector: String,
            ceo: String,
            cto: String,
            cfo: String,
        },
        hiringManager: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
        isVerified: { type: Boolean, default: false },
    },
    { timestamps: true },
)

export const Company = mongoose.model<ICompany>('Company', CompanySchema)
