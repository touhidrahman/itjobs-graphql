import * as mongoose from 'mongoose'

export interface IJobRole extends mongoose.Document {
    name: string
}

const JobRoleSchema = new mongoose.Schema(
    {
        name: String,
    },
    { timestamps: false },
)

export const JobRole = mongoose.model<IJobRole>('JobRole', JobRoleSchema)
