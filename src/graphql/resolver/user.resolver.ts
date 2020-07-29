import User, { IUser } from '@local/models/user.model'
import { signupRules, loginRules } from '@local/rules/user.rules'
import { GraphQLError } from 'graphql'
import config from '@local/config'
import * as jsonwebtoken from 'jsonwebtoken'
import { validateToken } from '@local/middlewares/validate-token'

type UserForToken = { id: string; name: string; email: string }
type LoginResponse = {
    token: string
    user: IUser | null
}

export async function signup(parent: any, args: any): Promise<IUser | Error> {
    try {
        await signupRules.validate(args)

        const user = new User({
            firstName: args.firstName,
            lastName: args.lastName,
            password: args.password,
            email: args.email,
        })

        return await user.save()
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function login(
    parent: any,
    args: any,
): Promise<LoginResponse | Error> {
    try {
        await loginRules.validate(args)

        const userEmail = args.email
        const user = await User.findOne({ email: userEmail })

        if (!user) {
            return { token: '', user: null }
        }

        const userForToken: UserForToken = {
            name: `${user.firstName} ${user.lastName}`,
            id: user.id,
            email: user.email,
        }

        const token = jsonwebtoken.sign(
            { id: user.id, user: userForToken },
            config.jwtSecret!,
            { expiresIn: '1d' },
        )

        return { token, user }
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function getUsers(
    parent: any,
    args: any,
    context: any,
): Promise<IUser[]> {
    const page = Number(args.page) - 1
    const size = Number(args.size)

    return await User.find({})
        .skip(page * size)
        .limit(size)
}

export async function getUser(
    parent: any,
    args: any,
    { headers }: any,
): Promise<IUser | null> {
    const { authorization } = headers
    const user = validateToken(authorization) // TODO check

    return await User.findById(user.id)
}
