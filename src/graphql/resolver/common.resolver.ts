import { validateToken } from '@local/middlewares/validate-token'
import { GraphQLError } from 'graphql'

export function allowSuperAdmin(authorization: string) {
    const parsedToken = validateToken(authorization)

    switch (parsedToken.user.role) {
        case 'SuperAdmin':
            break
        default:
            throw new GraphQLError('Not authorized')
    }
}

export function allowAdmin(authorization: string) {
    const parsedToken = validateToken(authorization)

    switch (parsedToken.user.role) {
        case 'Admin':
        case 'SuperAdmin':
            break
        default:
            throw new GraphQLError('Not authorized')
    }
}

export function allowHiringManager(authorization: string) {
    const parsedToken = validateToken(authorization)

    switch (parsedToken.user.role) {
        case 'HiringManager':
        case 'Admin':
        case 'SuperAdmin':
            break
        default:
            throw new GraphQLError('Not authorized')
    }
}

export function allowUser(authorization: string) {
    const parsedToken = validateToken(authorization)

    switch (parsedToken.user.role) {
        case 'User':
        case 'HiringManager':
        case 'Admin':
        case 'SuperAdmin':
            break
        default:
            throw new GraphQLError('Not authorized')
    }
}
