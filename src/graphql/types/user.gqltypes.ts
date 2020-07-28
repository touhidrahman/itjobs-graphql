import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export const TokenType = new GraphQLObjectType({
    name: 'Token',
    fields: () => ({
        token: { type: GraphQLString },
        user: { type: UserType },
    }),
})
