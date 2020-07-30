import {
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import { GenderEnumType, MinMaxInputType, MinMaxType } from '.'
import { CompanyType } from './company.gqltypes'
import { TeamType } from './team.gqltypes'

export const JobType = new GraphQLObjectType({
    name: 'Job',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        role: { type: GraphQLString },
        title: { type: GraphQLString },
        level: { type: GraphQLString },
        locationCity: { type: GraphQLString },
        effort: { type: JobEffortEnumType },
        remote: { type: GraphQLString },
        salary: { type: MinMaxType },
        company: { type: new GraphQLNonNull(CompanyType) },
        teamOrProduct: { type: new GraphQLNonNull(TeamType) },
        experience: { type: MinMaxType },
        educationLevel: { type: GraphQLInt },
        skills: { type: new GraphQLNonNull(JobSkillsType) },
        englishSkillLevel: { type: GraphQLInt },
        relocationSupported: { type: GraphQLBoolean },
        benefits: { type: new GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        leaveDays: { type: GraphQLInt },
        employerReference: { type: GraphQLString },
        gender: { type: GenderEnumType },
    }),
})

export const JobInputType = new GraphQLInputObjectType({
    name: 'JobInput',
    fields: () => ({
        role: { type: GraphQLString },
        title: { type: GraphQLString },
        level: { type: GraphQLString },
        locationCity: { type: GraphQLString },
        effort: { type: JobEffortEnumType },
        remote: { type: GraphQLString },
        salary: { type: MinMaxInputType },
        company: { type: new GraphQLNonNull(GraphQLID) },
        teamOrProduct: { type: new GraphQLNonNull(GraphQLID) },
        experience: { type: MinMaxInputType },
        educationLevel: { type: GraphQLInt },
        skills: { type: new GraphQLNonNull(JobSkillsInputType) },
        englishSkillLevel: { type: GraphQLInt },
        relocationSupported: { type: GraphQLBoolean },
        benefits: { type: new GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        leaveDays: { type: GraphQLInt },
        employerReference: { type: GraphQLString },
        gender: { type: GenderEnumType },
    }),
})

export const JobEffortEnumType = new GraphQLEnumType({
    name: 'JobEffortEnum',
    values: {
        Fulltime: { value: 'Fulltime' },
        Parttime: { value: 'Parttime' },
    },
})

export const JobSkillsType = new GraphQLObjectType({
    name: 'JobSkills',
    fields: () => ({
        mustHave: { type: new GraphQLList(GraphQLString) },
        niceToHave: { type: new GraphQLList(GraphQLString) },
    }),
})

export const JobSkillsInputType = new GraphQLInputObjectType({
    name: 'JobSkillsInput',
    fields: () => ({
        mustHave: { type: new GraphQLList(GraphQLString) },
        niceToHave: { type: new GraphQLList(GraphQLString) },
    }),
})
