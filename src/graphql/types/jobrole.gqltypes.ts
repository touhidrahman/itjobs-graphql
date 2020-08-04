import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLID,
} from 'graphql'

export const JobRoleType = new GraphQLObjectType({
    name: 'JobRole',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export const JobRoleInputType = new GraphQLInputObjectType({
    name: 'JobRoleInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
    }),
})
