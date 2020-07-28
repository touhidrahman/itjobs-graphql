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
        keyPersons: { type: new GraphQLNonNull(KeyPersonsType) },
        hiringManager: { type: new GraphQLList(UserType) },
    }),
})

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

export const KeyPersonsType = new GraphQLObjectType({
    name: 'KeyPersons',
    fields: () => ({
        chairman: { type: GraphQLString },
        managingDirector: { type: GraphQLString },
        ceo: { type: GraphQLString },
        cto: { type: GraphQLString },
        cfo: { type: GraphQLString },
    }),
})

export const KeyPersonsInputType = new GraphQLInputObjectType({
    name: 'KeyPersonsInput',
    fields: () => ({
        chairman: { type: GraphQLString },
        managingDirector: { type: GraphQLString },
        ceo: { type: GraphQLString },
        cto: { type: GraphQLString },
        cfo: { type: GraphQLString },
    }),
})
