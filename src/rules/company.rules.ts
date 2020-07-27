import * as yup from 'yup'

export const createCompanyRules = yup.object().shape({
    displayName: yup.string().trim().required(),
    legalName: yup.string().trim().required(),
    description: yup.string(),
    industry: yup.array().of(yup.string()).min(1)
})