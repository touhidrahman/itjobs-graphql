import {
    GraphQLEnumType,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql'

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(UserRoleEnumType) },
    }),
})

export const SignupType = new GraphQLInputObjectType({
    name: 'Signup',
    fields: () => ({
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(UserRoleEnumType) },
    }),
})

export const LoginType = new GraphQLInputObjectType({
    name: 'Login',
    fields: () => ({
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

export const UserRoleEnumType = new GraphQLEnumType({
    name: 'UserRoleEnum',
    values: {
        User: { value: 'User' },
        HiringManager: { value: 'HiringManager' },
        Admin: { value: 'Admin' },
        SuperAdmin: { value: 'SuperAdmin' },
    },
})
