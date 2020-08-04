import {
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'
import {
    AddressType,
    ContactType,
    AddressInputType,
    ContactInputType,
} from './common.gqltypes'
import { UserType } from './user.gqltypes'
import { TeamType } from './team.gqltypes'

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

export const CompanyInputType = new GraphQLInputObjectType({
    name: 'CompanyInput',
    fields: () => ({
        displayName: { type: new GraphQLNonNull(GraphQLString) },
        legalName: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        industry: { type: new GraphQLList(GraphQLString) },
        address: { type: new GraphQLNonNull(AddressInputType) },
        contact: { type: new GraphQLNonNull(ContactInputType) },
        registrationDetails: { type: GraphQLString },
        keyPersons: {
            type: new GraphQLNonNull(KeyPersonsInputType),
        },
        hiringManager: { type: new GraphQLList(GraphQLString) },
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
