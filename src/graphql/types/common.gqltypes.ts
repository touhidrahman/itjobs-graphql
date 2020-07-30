import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'

export const AddressInputType = new GraphQLInputObjectType({
    name: 'AddressInput',
    fields: () => ({
        line1: { type: new GraphQLNonNull(GraphQLString) },
        line2: { type: GraphQLString },
        city: { type: new GraphQLNonNull(GraphQLString) },
        postalCode: { type: new GraphQLNonNull(GraphQLString) },
        country: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export const AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        line1: { type: new GraphQLNonNull(GraphQLString) },
        line2: { type: GraphQLString },
        city: { type: new GraphQLNonNull(GraphQLString) },
        postalCode: { type: new GraphQLNonNull(GraphQLString) },
        country: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export const ContactType = new GraphQLObjectType({
    name: 'Contact',
    fields: () => ({
        phone: { type: GraphQLString },
        fax: { type: GraphQLString },
        email: { type: GraphQLString },
        website: { type: GraphQLString },
        facebook: { type: GraphQLString },
        linkedin: { type: GraphQLString },
    }),
})

export const ContactInputType = new GraphQLInputObjectType({
    name: 'ContactInput',
    fields: () => ({
        phone: { type: GraphQLString },
        fax: { type: GraphQLString },
        email: { type: GraphQLString },
        website: { type: GraphQLString },
        facebook: { type: GraphQLString },
        linkedin: { type: GraphQLString },
    }),
})
