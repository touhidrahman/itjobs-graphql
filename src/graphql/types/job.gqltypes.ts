import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import { MinMaxType } from '.'

export const JobType = new GraphQLObjectType({
    name: 'Job',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        role: { type: GraphQLString },
        title: { type: GraphQLString },
        level: { type: GraphQLString },
        locationCity: { type: GraphQLString },
        effort: { type: GraphQLString },
        remote: { type: GraphQLString },
        salary: { type: MinMaxType },
        company: { type: new GraphQLNonNull(GraphQLID) },
        teamOrProduct: { type: new GraphQLNonNull(GraphQLID) },
        experience: { type: MinMaxType },
        educationLevel: { type: GraphQLInt },
        // skills
        englishSkillLevel: { type: GraphQLInt },
        relocationSupported: { type: GraphQLBoolean },
        benefits: { type: new GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        leaveDays: { type: GraphQLInt },
        employerReference: { type: GraphQLString },
        gender: { type: GraphQLString },
    }),
})
