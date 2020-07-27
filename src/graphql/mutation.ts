import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
} from 'graphql'
import { UserType, TokenType, CompanyType } from './type'
import { signup, login } from './resolver/user.resolver'
import { createCompany } from './resolver/company.resolver'

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
                id: { type: new GraphQLNonNull(GraphQLID) },
                displayName: { type: new GraphQLNonNull(GraphQLString) },
                legalName: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
                industry: { type: new GraphQLList(GraphQLString) },
            },
            resolve: createCompany
        }
    },
})
