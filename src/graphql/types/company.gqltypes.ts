import { UserType } from '@local/graphql/types'
import {
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} from 'graphql'

export const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
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
