import { createCandidate } from '@local/graphql/resolver/candidate.resolver'
import {
    addTeamToCompany,
    createCompany,
    deleteCompany,
    removeTeamFromCompany,
} from '@local/graphql/resolver/company.resolver'
import { createJobPost } from '@local/graphql/resolver/job.resolver'
import {
    createJobRole,
    deleteJobRole,
    updateJobRole,
} from '@local/graphql/resolver/jobrole.resolver'
import {
    createSkill,
    updateSkill,
} from '@local/graphql/resolver/skill.resolver'
import { createTeam } from '@local/graphql/resolver/team.resolver'
import { login, logout, signup } from '@local/graphql/resolver/user.resolver'
import {
    CandidateInputType,
    CandidateType,
} from '@local/graphql/types/candidate.gqltypes'
import {
    CompanyInputType,
    CompanyType,
} from '@local/graphql/types/company.gqltypes'
import { JobInputType, JobType } from '@local/graphql/types/job.gqltypes'
import { JobRoleType } from '@local/graphql/types/jobrole.gqltypes'
import { SkillInputType, SkillType } from '@local/graphql/types/skill.gqltypes'
import { TeamInputType, TeamType } from '@local/graphql/types/team.gqltypes'
import {
    LoginType,
    SignupType,
    TokenType,
    UserType,
} from '@local/graphql/types/user.gqltypes'
import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import {
    changeJobApplicationStatus,
    createJobApplication,
    withdrawJobApplication,
    declineJobApplication,
} from './resolver/job-application.resolver'
import {
    ApplyToJobInputType,
    ChangeHiringStageInputType,
    JobApplicationDeclineInputType,
    JobApplicationType,
} from './types/job-application.gqltypes'

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        /**
         * USER
         */
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

        logout: {
            type: TokenType,
            resolve: logout,
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

        updateJobRole: {
            type: JobRoleType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: updateJobRole,
        },

        deleteJobRole: {
            type: JobRoleType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: deleteJobRole,
        },

        /**
         * JOB APPLICATION
         */
        applyToJob: {
            type: JobApplicationType,
            args: {
                input: { type: new GraphQLNonNull(ApplyToJobInputType) },
            },
            resolve: createJobApplication,
        },

        withdrawJobApplication: {
            type: JobApplicationType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: withdrawJobApplication,
        },

        changeJobApplicationStatus: {
            type: JobApplicationType,
            args: {
                input: {
                    type: new GraphQLNonNull(ChangeHiringStageInputType),
                },
            },
            resolve: changeJobApplicationStatus,
        },

        declineJobApplication: {
            type: JobApplicationType,
            args: {
                input: {
                    type: new GraphQLNonNull(JobApplicationDeclineInputType),
                },
            },
            resolve: declineJobApplication,
        },
    },
})

// TODO: with creation of company and user, create an associated messenger profile under the hood
