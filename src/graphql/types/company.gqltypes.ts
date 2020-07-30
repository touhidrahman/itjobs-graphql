import { TeamType, UserType, ContactType, AddressType } from '@local/graphql/types'
import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
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
        teams: { type: new GraphQLList(TeamType) },
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
