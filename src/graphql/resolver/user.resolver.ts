import User, { IUser } from '@local/models/user.model'
import { signupRules, loginRules } from '@local/rules/user.rules'
import { GraphQLError } from 'graphql'
import config from '@local/config'
import * as jsonwebtoken from 'jsonwebtoken'

type UserForToken = { id: string; name: string; email: string }
type LoginResponse = {
    token: string
    user: UserForToken | null
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

        return { token, user: userForToken }
    } catch (error) {
        return new GraphQLError(error)
    }
}
