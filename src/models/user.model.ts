import * as mongoose from 'mongoose'
import * as bcrypt from 'bcryptjs'

export interface IUser extends mongoose.Document {
    firstName: string
    lastName: string
    email: string
    password: string
}

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    },
)

UserSchema.pre('save', async function (
    next: mongoose.HookNextFunction,
): Promise<void> {
    const user: any = this

    if (!user.password || !user.isModified()) {
        next()
    }

    try {
        user.password = await bcrypt.hash(user.password, 10)
    } catch (error) {
        next(error)
    }
    next()
})

export const User = mongoose.model<IUser>('User', UserSchema)
