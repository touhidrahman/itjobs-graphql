import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from 'graphql'
import { GraphQLDate } from 'graphql-iso-date'
import {
    AddressInputType,
    AddressType,
    ContactInputType,
    ContactType,
} from './common.gqltypes'

export const CandidateType = new GraphQLObjectType({
    name: 'Candidate',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(AddressType) },
        contact: { type: new GraphQLNonNull(ContactType) },
        educations: { type: CandidateEducationType },
    }),
})

export const CandidateInputType = new GraphQLInputObjectType({
    name: 'CandidateInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(AddressInputType) },
        contact: { type: new GraphQLNonNull(ContactInputType) },
    }),
})

export const CandidateEducationType = new GraphQLObjectType({
    name: 'CandidateEducation',
    fields: () => ({
        level: { type: GraphQLString },
        isStem: { type: GraphQLBoolean },
        isComputerScience: { type: GraphQLBoolean },
        institution: { type: GraphQLString },
        fromDate: { type: GraphQLDate },
        toDate: { type: GraphQLDate },
        isCompleted: { type: GraphQLBoolean },
        cgpa: { type: GraphQLFloat },
        description: { type: GraphQLString },
        // courses: { type: CandidateEducationCourseInputType },
    }),
})

export const CandidateEducationInputType = new GraphQLInputObjectType({
    name: 'CandidateEducationInput',
    fields: () => ({
        level: { type: new GraphQLNonNull(GraphQLString) },
        isStem: { type: new GraphQLNonNull(GraphQLBoolean) },
        isComputerScience: { type: new GraphQLNonNull(GraphQLBoolean) },
        institution: { type: new GraphQLNonNull(GraphQLString) },
        fromDate: { type: GraphQLDate },
        toDate: { type: GraphQLDate },
        isCompleted: { type: GraphQLBoolean },
        cgpa: { type: GraphQLFloat },
        description: { type: GraphQLString },
        courses: { type: CandidateEducationCourseInputType },
    }),
})

export const CandidateEducationCourseInputType = new GraphQLInputObjectType({
    name: 'CandidateEducationCourseInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        cgpa: { type: GraphQLFloat },
        isStem: { type: new GraphQLNonNull(GraphQLBoolean) },
        isComputerScience: { type: new GraphQLNonNull(GraphQLBoolean) },
        institution: { type: new GraphQLNonNull(GraphQLString) },
        fromDate: { type: GraphQLDate },
        toDate: { type: GraphQLDate },
        isCompleted: { type: GraphQLBoolean },
        description: { type: GraphQLString },
        courses: {
            type: new GraphQLList(CandidateEducationCourseProjectInputType),
        },
    }),
})

export const CandidateEducationCourseProjectInputType = new GraphQLInputObjectType(
    {
        name: 'CandidateEducationCourseProjectInput',
        fields: () => ({
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            mediaUrl: { type: GraphQLString },
            projecturl: { type: GraphQLString },
        }),
    },
)
