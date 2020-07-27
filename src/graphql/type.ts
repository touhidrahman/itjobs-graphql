import User from '@local/models/user.model'
import {
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInputObjectType,
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

export const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        displayName: { type: new GraphQLNonNull(GraphQLString) },
        legalName: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        industry: { type: new GraphQLList(GraphQLString) },
        address: { type: new GraphQLNonNull(AddressType) },
        contact: { type: new GraphQLNonNull(ContactType) },
        registrationDetails: { type: GraphQLString },
        keyPersons: { type: new GraphQLNonNull(KeyPersons) },
        hiringManager: { type: GraphQLString },
    }),
})

export const AddressType = new GraphQLInputObjectType({
    name: 'Address',
    fields: () => ({
        line1: { type: new GraphQLNonNull(GraphQLString) },
        line2: { type: GraphQLString },
        city: { type: new GraphQLNonNull(GraphQLString) },
        postalCode: { type: new GraphQLNonNull(GraphQLString) },
        country: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export const AddressOutputType = new GraphQLObjectType({
    name: 'Address',
    fields: () => ({
        line1: { type: new GraphQLNonNull(GraphQLString) },
        line2: { type: GraphQLString },
        city: { type: new GraphQLNonNull(GraphQLString) },
        postalCode: { type: new GraphQLNonNull(GraphQLString) },
        country: { type: new GraphQLNonNull(GraphQLString) },
    }),
})

export const ContactType = new GraphQLInputObjectType({
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

export const KeyPersons = new GraphQLInputObjectType({
    name: 'KeyPersons',
    fields: () => ({
        chairman: { type: GraphQLString },
        managingDirector: { type: GraphQLString },
        ceo: { type: GraphQLString },
        cto: { type: GraphQLString },
        cfo: { type: GraphQLString },
    }),
})
