import * as yup from 'yup'
import { addressRules, contactRules } from './common.rules'

export const createCompanyRules = yup.object().shape({
    displayName: yup.string().trim().required(),
    legalName: yup.string().trim().required(),
    description: yup.string(),
    industry: yup.array().of(yup.string()).min(1),
    address: addressRules,
    contact: contactRules,
    registrationDetails: yup.string(),
    keyPersons: yup.object().shape({
        chairman: yup.string(),
        managingDirector: yup.string(),
        ceo: yup.string(),
        cto: yup.string(),
        cfo: yup.string(),
    }),
    hiringManager: yup.array().of(yup.string()),
})
