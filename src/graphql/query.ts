import { getCompanies, getSkills, getTeams } from '@local/graphql/resolver'
import {
    CompanyType,
    SkillType,
    TeamType,
    UserType,
} from '@local/graphql/types'
import { validateToken } from '@local/middlewares/validate-token'
import User from '@local/models/user.model'
import { GraphQLList, GraphQLObjectType } from 'graphql'

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
            resolve: getCompanies,
        },

        /**
         * TEAM
         */
        teams: {
            type: new GraphQLList(TeamType),
            resolve: getTeams,
        },

        /**
         * SKILL
         */
        skills: {
            type: new GraphQLList(SkillType), // TODO can be string type
            resolve(parent: any, { page, size }: any, { headers }: any) {
                console.log('TCL: resolve -> parent', parent)
                return getSkills(parent, { page, size }, { headers })
            },
        },
    },
})
