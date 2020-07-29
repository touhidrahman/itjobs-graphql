import * as yup from 'yup'

export const createSkillRules = yup.object().shape({
    name: yup.string().trim().required(),
    logo: yup.string(),
    votes: yup.number(),
})
