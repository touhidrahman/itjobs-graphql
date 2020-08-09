import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import { GraphQLDate } from 'graphql-iso-date'

export const JobApplicationType = new GraphQLObjectType({
    name: 'JobApplication',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        job: { type: new GraphQLNonNull(GraphQLID) },
        candidate: { type: GraphQLID },
        matchScore: { type: GraphQLInt },
        currentStage: { type: GraphQLString },
        history: { type: new GraphQLList(JobApplicationHistoryType) },
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
        jobApplicationId: { type: new GraphQLNonNull(GraphQLID) },
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
        isDeclinedByCandidate: { type: GraphQLBoolean },
    }),
})
