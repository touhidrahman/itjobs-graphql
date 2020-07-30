import config from '@local/config'
import { validateToken } from '@local/middlewares/validate-token'
import { IUser, User } from '@local/models/user.model'
import { loginRules, signupRules } from '@local/rules/user.rules'
import { GraphQLError } from 'graphql'
import * as jsonwebtoken from 'jsonwebtoken'

type UserForToken = { id: string; name: string; email: string }
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

        const user = new User({
            firstName: input.firstName,
            lastName: input.lastName,
            password: input.password,
            email: input.email,
        })

        return await user.save()
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
    const user = validateToken(authorization)

    return await User.findById(user.id)
}
