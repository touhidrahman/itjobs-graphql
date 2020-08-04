import * as mongoose from 'mongoose'

export interface IJobRole extends mongoose.Document {
    name: string
}

const JobRoleSchema = new mongoose.Schema(
    {
        name: {type: String, index: true, unique: true, required: true }
    },
    { timestamps: false },
)

export const JobRole = mongoose.model<IJobRole>('JobRole', JobRoleSchema)
