import config from '@local/config'
import { validateToken } from '@local/middlewares/validate-token'
import { IUser, User } from '@local/models/user.model'
import { loginRules, signupRules } from '@local/rules/user.rules'
import { GraphQLError } from 'graphql'
import * as jsonwebtoken from 'jsonwebtoken'
import { Messenger } from '@local/models/messenger.model'
import { allowUser } from './common.resolver'

type UserForToken = {
    id: string
    name: string
    email: string
    role: 'User' | 'HiringManager' | 'Admin' | 'SuperAdmin'
}
type LoginResponse = {
    token: string
    user: IUser | null
}

export async function signup(
    parent: any,
    { input }: any,
): Promise<IUser | Error> {
    try {
        await signupRules.validate(input)

        const user = new User({ ...input })
        const savedUser = await user.save()

        // create associated messenger profile
        const messenger = new Messenger({
            linkedUser: savedUser._id,
            type: 'User',
        })
        await messenger.save()

        return savedUser
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function login(
    parent: any,
    { input }: any,
): Promise<LoginResponse | Error> {
    try {
        await loginRules.validate(input)

        const userEmail = input.email
        const user = await User.findOne({ email: userEmail })

        if (!user) {
            return { token: '', user: null }
        }

        const userForToken: UserForToken = {
            name: `${user.firstName} ${user.lastName}`,
            id: user.id,
            email: user.email,
            role: user.role,
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

export async function logout(
    parent: any,
    args: any,
    { headers }: any,
): Promise<LoginResponse | Error> {
    allowUser(headers.authorization)

    return { token: '', user: null }
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
    const user = validateToken(authorization)

    return await User.findById(user.id)
}
