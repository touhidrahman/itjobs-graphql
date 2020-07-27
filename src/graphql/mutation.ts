import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import { createCompany } from './resolver/company.resolver'
import { login, signup } from './resolver/user.resolver'
import {
    AddressType,
    CompanyType,
    ContactType,
    KeyPersons,
    TokenType,
    UserType,
} from './type'

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
                address: { type: new GraphQLNonNull(AddressType) },
                contact: { type: new GraphQLNonNull(ContactType) },
                registrationDetails: { type: GraphQLString },
                keyPersons: { type: new GraphQLNonNull(KeyPersons) },
                hiringManager: { type: GraphQLString },
            },
            resolve: createCompany,
        },
    },
})
