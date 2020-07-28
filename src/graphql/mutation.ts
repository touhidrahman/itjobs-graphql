import {
    createCompany,
    createTeam,
    deleteCompany,
    login,
    signup,
} from '@local/graphql/resolver'
import {
    AddressInputType,
    CompanyType,
    ContactInputType,
    KeyPersonsInputType,
    TeamType,
    TokenType,
    UserType,
} from '@local/graphql/types'
import {
    GraphQLBoolean,
    GraphQLID,
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
    },
})
