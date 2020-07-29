import {
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInputObjectType,
} from 'graphql'

export const SkillType = new GraphQLObjectType({
    name: 'Skill',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: GraphQLString },
        votes: { type: GraphQLInt },
    }),
})

export const SkillInputType = new GraphQLInputObjectType({
    name: 'SkillInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: GraphQLString },
        votes: { type: GraphQLInt },
    }),
})
