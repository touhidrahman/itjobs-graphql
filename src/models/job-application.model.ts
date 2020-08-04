import { Schema, Document, model } from  'mongoose'

export interface IJobApplication extends Document {

}

export const JobApplicationSchema = new Schema({}, {timestamps: true})

export const JobApplication = model<IJobApplication>('JobApplication', JobApplicationSchema)
