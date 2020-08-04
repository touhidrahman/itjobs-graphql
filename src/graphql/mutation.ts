import {
    addTeamToCompany,
    createCandidate,
    createCompany,
    createJobPost,
    createSkill,
    createTeam,
    deleteCompany,
    login,
    removeTeamFromCompany,
    signup,
    updateSkill,
    createJobRole,
    deleteJobRole,
} from '@local/graphql/resolver'
import {
    CandidateInputType,
    CandidateType,
    CompanyInputType,
    CompanyType,
    JobInputType,
    JobType,
    LoginType,
    SignupType,
    SkillInputType,
    SkillType,
    TeamInputType,
    TeamType,
    TokenType,
    UserType,
} from '@local/graphql/types'
import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import { JobRoleType } from './types/jobrole.gqltypes'

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                input: { type: new GraphQLNonNull(SignupType) },
            },
            resolve: signup,
        },

        login: {
            type: TokenType,
            args: {
                input: { type: new GraphQLNonNull(LoginType) },
            },
            resolve: login,
        },

        /**
         * COMPANY
         */
        createCompany: {
            type: CompanyType,
            args: {
                input: { type: new GraphQLNonNull(CompanyInputType) },
            },
            resolve: createCompany,
        },

        deleteCompany: {
            type: GraphQLBoolean,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: deleteCompany,
        },

        addTeamToCompany: {
            type: CompanyType,
            args: {
                companyId: { type: new GraphQLNonNull(GraphQLID) },
                teamId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: addTeamToCompany,
        },

        removeTeamFromCompany: {
            type: CompanyType,
            args: {
                companyId: { type: new GraphQLNonNull(GraphQLID) },
                teamId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: removeTeamFromCompany,
        },

        /**
         * TEAM
         */
        createTeam: {
            type: TeamType,
            args: {
                input: { type: new GraphQLNonNull(TeamInputType) },
            },
            resolve: createTeam,
        },

        /**
         * JOB
         */
        createJobPost: {
            type: JobType,
            args: {
                input: { type: new GraphQLNonNull(JobInputType) },
            },
            resolve: createJobPost,
        },

        /**
         * CANDIDATE
         */
        createCandidate: {
            type: CandidateType,
            args: {
                input: { type: new GraphQLNonNull(CandidateInputType) },
            },
            resolve: createCandidate,
        },

        /**
         * SKILL
         */
        createSkill: {
            type: SkillType,
            args: {
                input: { type: new GraphQLNonNull(SkillInputType) },
            },
            resolve: createSkill,
        },

        updateSkill: {
            type: SkillType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                newName: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: updateSkill,
        },

        /**
         * JOBROLE
         */
        createJobRole: {
            type: JobRoleType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: createJobRole,
        },

        deleteJobRole: {
            type: JobRoleType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: deleteJobRole
        }
    },
})

// TODO: with creation of company and user, create an associated messenger profile under the hood
