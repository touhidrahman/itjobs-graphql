import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql'

export const JobRoleType = new GraphQLObjectType({
    name: 'JobRole',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
    }),
})
