import {
    AddressType,
    ContactType,
    AddressInputType,
    ContactInputType,
} from '@local/graphql/types'
import {
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInputObjectType,
} from 'graphql'

export const CandidateType = new GraphQLObjectType({
    name: 'Candidate',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(AddressType) },
        contact: { type: new GraphQLNonNull(ContactType) },
    }),
})

export const CandidateInputType = new GraphQLInputObjectType({
    name: 'CandidateInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(AddressInputType) },
        contact: { type: new GraphQLNonNull(ContactInputType) },
    }),
})
