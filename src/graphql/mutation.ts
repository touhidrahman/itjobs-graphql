import {
    addTeamToCompany,
    createCandidate,
    createCompany,
    createSkill,
    createTeam,
    deleteCompany,
    login,
    removeTeamFromCompany,
    signup,
    updateSkill,
    createJobPost,
} from '@local/graphql/resolver'
import {
    AddressInputType,
    CandidateType,
    CompanyType,
    ContactInputType,
    JobType,
    KeyPersonsInputType,
    MinMaxInputType,
    SkillInputType,
    SkillType,
    TeamType,
    TeamTypeEnumType,
    TokenType,
    UserType,
    JobInputType,
} from '@local/graphql/types'
import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: signup,
        },

        login: {
            type: TokenType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: login,
        },

        /**
         * COMPANY
         */
        createCompany: {
            type: CompanyType,
            args: {
                displayName: { type: new GraphQLNonNull(GraphQLString) },
                legalName: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
                industry: { type: new GraphQLList(GraphQLString) },
                address: { type: new GraphQLNonNull(AddressInputType) },
                contact: { type: new GraphQLNonNull(ContactInputType) },
                registrationDetails: { type: GraphQLString },
                keyPersons: {
                    type: new GraphQLNonNull(KeyPersonsInputType),
                },
                hiringManager: { type: new GraphQLList(GraphQLString) },
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
                type: { type: new GraphQLNonNull(TeamTypeEnumType) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                url: { type: GraphQLString },
                technology: { type: new GraphQLList(GraphQLString) },
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
                name: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(AddressInputType) },
                contact: { type: new GraphQLNonNull(ContactInputType) },
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
    },
})
