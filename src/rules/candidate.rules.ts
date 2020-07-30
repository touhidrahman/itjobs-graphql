import * as yup from 'yup'
import { addressRules, contactRules } from './common.rules'

export const createCandidateRules = yup.object().shape({
    name: yup.string().trim().required(),
    address: addressRules,
    contact: contactRules,
})
