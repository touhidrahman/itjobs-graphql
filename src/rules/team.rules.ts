import * as yup from 'yup'

export const createTeamRules = yup.object().shape({
    type: yup.mixed().oneOf(['TEAM', 'PRODUCT']).required(),
    name: yup.string(),
    description: yup.string(),
    url: yup.string(),
    technology: yup.array().of(yup.string()),
})
