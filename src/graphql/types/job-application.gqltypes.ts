import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInputObjectType,
} from 'graphql'
import { GraphQLDate } from 'graphql-iso-date'
import { CandidateType } from './candidate.gqltypes'
import { JobType } from './job.gqltypes'

export const JobApplicationType = new GraphQLObjectType({
    name: 'JobApplication',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        job: { type: JobType },
        candidate: { type: CandidateType },
        matchScore: { type: GraphQLInt },
        nextAllowedStages: { type: GraphQLList(GraphQLString) },
        currentStage: { type: GraphQLString },
        history: { type: GraphQLList(JobApplicationHistoryType) },
        declineInfo: { type: JobApplicationDeclineInfoType },
        isPremium: { type: GraphQLBoolean },
        isInvited: { type: GraphQLBoolean },
    }),
})

export const ApplyToJobInputType = new GraphQLInputObjectType({
    name: 'ApplyToJobInput',
    fields: () => ({
        jobId: { type: new GraphQLNonNull(GraphQLID) },
        candidateId: { type: new GraphQLNonNull(GraphQLID) },
        isPremium: { type: GraphQLBoolean },
    }),
})

export const ChangeHiringStageInputType = new GraphQLInputObjectType({
    name: 'ChangeHiringStageInput',
    fields: () => ({
        jobId: { type: new GraphQLNonNull(GraphQLID) },
        candidateId: { type: new GraphQLNonNull(GraphQLID) },
        toStage: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export const JobApplicationHistoryType = new GraphQLObjectType({
    name: 'JobApplicationHistory',
    fields: () => ({
        stage: { type: GraphQLString },
        dateEntered: { type: GraphQLDate },
        dateLeave: { type: GraphQLDate },
    }),
})

export const JobApplicationDeclineInfoType = new GraphQLObjectType({
    name: 'JobApplicationDeclineInfo',
    fields: () => ({
        isDeclined: { type: GraphQLBoolean },
        reason: { type: GraphQLString },
        afterStage: { type: GraphQLString },
        dateDeclined: { type: GraphQLDate },
    }),
})
