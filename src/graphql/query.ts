import * as graphql from 'graphql'

import User from '@local/models/user.model'
import Company from '@local/models/company.model'
import { CompanyType, UserType } from '@local/graphql/types'
import { validateToken } from '@local/middlewares/validate-token'

const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql

export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            resolve(parent: any, args: any, { headers }: any) {
                const { authorization } = headers
                const user = validateToken(authorization) // TODO check

                return User.findById(user.id)
            },
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent: any, args: any, { headers }: any) {
                console.log('TCL: headers :', headers) // ! remove
                const { authorization } = headers
                validateToken(authorization)

                return User.find()
            },
        },

        companies: {
            type: new GraphQLList(CompanyType),
            resolve(parent: any, args: any, { headers }: any) {
                return Company.find()
            },
        },
    },
})
