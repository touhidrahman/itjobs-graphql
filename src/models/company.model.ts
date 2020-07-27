import * as mongoose from 'mongoose'

export interface ICompany extends mongoose.Document {
    displayName: string
    legalName: string
    industry: string[]
    description: string
}

const CompanySchema = new mongoose.Schema({
    displayName: { type: String, required: true },
    legalName: { type: String, required: true },
    industry: [String],
    description: String
}, { timestamps: true })

export default mongoose.model<ICompany>('Company', CompanySchema)