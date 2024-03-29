import { ICandidate } from '@local/models/candidate.model'
import { IJob } from '@local/models/job.model'
import { Document, model, Schema } from 'mongoose'

export interface IJobApplication extends Document {
    job: IJob
    candidate: ICandidate
    matchScore: number
    currentStage: string
    history: {
        stage: string
        dateEntered: Date
        dateLeave?: Date
    }[]
    declineInfo: {
        isDeclined: boolean
        reason: string
        afterStage: string
        dateDeclined: Date
        isDeclinedByCandidate: boolean
    }
    isPremium: boolean
    isInvited: boolean
}

export const JobApplicationSchema = new Schema(
    {
        job: { type: Schema.Types.ObjectId, ref: 'Job' },
        candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
        matchScore: Number,
        currentStage: { type: String, required: true },
        history: [
            {
                stage: String,
                dateEntered: Date,
                dateLeave: Date,
            },
        ],
        declineInfo: {
            isDeclined: Boolean,
            reason: String,
            afterStage: String,
            dateDeclined: Date,
            isDeclinedByCandidate: Boolean,
        },
        isPremium: Boolean,
        isInvited: Boolean,
    },
    { timestamps: true },
)

export const JobApplication = model<IJobApplication>(
    'JobApplication',
    JobApplicationSchema,
)
