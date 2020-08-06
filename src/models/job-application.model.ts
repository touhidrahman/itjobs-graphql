import { ICandidate } from '@local/models/candidate.model'
import { IJob } from '@local/models/job.model'
import { Document, model, Schema } from 'mongoose'

export interface IJobApplication extends Document {
    job: IJob
    candidate: ICandidate
    matchScore: number
    nextAllowedStages: string[]
    currentStage: string
    history: {
        stage: string
        dateEntered: Date
        dateLeave: Date
    }[]
    declineInfo: {
        isDeclined: boolean
        reason: string
        afterStage: string
        dateDeclined: Date
    }
    isPremium: boolean
    isInvited: boolean
}

export const JobApplicationSchema = new Schema(
    {
        job: { type: Schema.Types.ObjectId, ref: 'Job' },
        candidate: { type: Schema.Types.ObjectId, ref: 'Candidate' },
        matchScore: Number,
        nextAllowedStages: [String],
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
