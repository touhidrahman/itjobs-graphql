import { User } from '@local/models/user.model'
import * as yup from 'yup'

export const signupRules = yup.object().shape({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    email: yup
        .string()
        .email()
        .trim()
        .required()
        .test(
            'uniqueEmail',
            'This email already exists',
            async (emailInput) => {
                const user = await User.findOne({ email: emailInput })
                return user ? false : true
            },
        ),
    password: yup
        .string()
        .trim()
        .required()
        .min(6, 'Password is too short')
        .matches(
            /[a-zA-Z0-9@!#%]/,
            'Password can only contain Latin letters, numbers and/or [@, !, #, %].',
        ),
})

export const loginRules = yup.object().shape({
    email: yup.string().trim().required(),
    password: yup.string().required(),
})
