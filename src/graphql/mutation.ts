import {
    addTeamToCompany,
    createCompany,
    createTeam,
    deleteCompany,
    login,
    signup,
    createSkill,
} from '@local/graphql/resolver'
import {
    AddressInputType,
    CompanyType,
    ContactInputType,
    KeyPersonsInputType,
    TeamType,
    TokenType,
    UserType,
    SkillType,
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

        /**
         * TEAM
         */
        createTeam: {
            type: TeamType,
            args: {
                type: { type: new GraphQLNonNull(GraphQLString) }, // TODO make enum
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                url: { type: GraphQLString },
                technology: { type: new GraphQLList(GraphQLString) },
            },
            resolve: createTeam,
        },

        /**
         * SKILL
         */
        createSkill: {
            type: SkillType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                logo: { type: GraphQLString },
                votes: { type: GraphQLInt },
            },
            resolve: createSkill,
        },
    },
})
