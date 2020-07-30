import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLEnumType,
} from 'graphql'

export const TeamType = new GraphQLObjectType({
    name: 'Team',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        type: { type: new GraphQLNonNull(TeamTypeEnumType) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLString },
        technology: { type: new GraphQLList(GraphQLString) },
    }),
})

export const TeamInputType = new GraphQLInputObjectType({
    name: 'TeamInput',
    fields: () => ({
        type: { type: new GraphQLNonNull(TeamTypeEnumType) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLString },
        technology: { type: new GraphQLList(GraphQLString) },
    }),
})

export const TeamTypeEnumType = new GraphQLEnumType({
    name: 'TeamTypeEnum',
    values: {
        TEAM: { value: 'TEAM' },
        PRODUCT: { value: 'PRODUCT' },
    },
})
