import { getCompanies } from '@local/graphql/resolver/company.resolver'
import { getJobs } from '@local/graphql/resolver/job.resolver'
import { getJobRoles } from '@local/graphql/resolver/jobrole.resolver'
import { getSkills } from '@local/graphql/resolver/skill.resolver'
import { getTeams } from '@local/graphql/resolver/team.resolver'
import { getUser, getUsers } from '@local/graphql/resolver/user.resolver'
import { CompanyType } from '@local/graphql/types/company.gqltypes'
import { JobType } from '@local/graphql/types/job.gqltypes'
import { JobRoleType } from '@local/graphql/types/jobrole.gqltypes'
import { SkillType } from '@local/graphql/types/skill.gqltypes'
import { TeamType } from '@local/graphql/types/team.gqltypes'
import { UserType } from '@local/graphql/types/user.gqltypes'
import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql'
import { getJobApplications } from './resolver/job-application.resolver'
import { JobApplicationType } from './types/job-application.gqltypes'

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

        /**
         * JOB APPLICATION
         */
        getJobApplications: {
            type: new GraphQLList(JobApplicationType),
            args: {
                page: { type: GraphQLInt },
                size: { type: GraphQLInt },
            },
            resolve: getJobApplications,
        },
    },
})
