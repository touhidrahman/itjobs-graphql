import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import { AddressType, ContactType } from '@local/graphql/types';

export const CandidateType = new GraphQLObjectType({
    name: 'Candidate',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(AddressType) },
        contact: { type: new GraphQLNonNull(ContactType) },
    })
})