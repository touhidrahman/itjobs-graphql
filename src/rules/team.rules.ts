import * as yup from 'yup'

export const createTeamRules = yup.object().shape({
    type: yup.string().required(), // TODO make enum
    name: yup.string(),
    description: yup.string(),
    url: yup.string(),
    technology: yup.array().of(yup.string()),
})
