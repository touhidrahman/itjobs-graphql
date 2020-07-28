import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInputObjectType,
} from 'graphql'

export const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        type: { type: new GraphQLNonNull(GraphQLString) }, // TODO make enum
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLString },
        technology: { type: new GraphQLList(GraphQLString) },
    }),
})

export const TeamInputType = new GraphQLInputObjectType({
    name: 'TeamInput',
    fields: () => ({
        type: { type: new GraphQLNonNull(GraphQLString) }, // TODO make enum
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLString },
        technology: { type: new GraphQLList(GraphQLString) },
    }),
})
