import {
    getCompanies,
    getJobs,
    getSkills,
    getTeams,
    getUser,
    getUsers,
    getJobRoles,
} from '@local/graphql/resolver'
import {
    CompanyType,
    JobType,
    SkillType,
    TeamType,
    UserType,
    JobRoleType,
} from '@local/graphql/types'
import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql'

export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        /**
         * USER
         */
        user: {
            type: UserType,
            resolve: getUser,
        },

        users: {
            type: new GraphQLList(UserType),
            args: {
                page: { type: GraphQLInt },
                size: { type: GraphQLInt },
            },
            resolve: getUsers,
        },

        /**
         * COMPANY
         */
        companies: {
            type: new GraphQLList(CompanyType),
            args: {
                page: { type: GraphQLInt },
                size: { type: GraphQLInt },
            },
            resolve: getCompanies,
        },

        /**
         * TEAM
         */
        teams: {
            type: new GraphQLList(TeamType),
            args: {
                page: { type: GraphQLInt },
                size: { type: GraphQLInt },
            },
            resolve: getTeams,
        },

        /**
         * JOB
         */
        jobs: {
            type: new GraphQLList(JobType),
            resolve: getJobs,
        },

        /**
         * JOB ROLE
         */
        jobRoles: {
            type: new GraphQLList(JobRoleType),
            resolve: getJobRoles,
        },

        /**
         * SKILL
         */
        skills: {
            type: new GraphQLList(SkillType), // TODO can be string type
            args: {
                page: { type: GraphQLInt },
                size: { type: GraphQLInt },
            },
            resolve: getSkills,
        },
    },
})
