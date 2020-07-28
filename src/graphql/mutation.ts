import { createCompany, login, signup } from '@local/graphql/resolver'
import {
    AddressInputType,
    CompanyType,
    ContactInputType,
    KeyPersonsInputType,
    TokenType,
    UserType,
} from '@local/graphql/types'
import {
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
                keyPersons: { type: new GraphQLNonNull(KeyPersonsInputType) },
                hiringManager: { type: new GraphQLList(GraphQLString) },
            },
            resolve: createCompany,
        },
    },
})
