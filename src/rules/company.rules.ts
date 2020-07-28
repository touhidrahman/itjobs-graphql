import * as yup from 'yup'

export const createCompanyRules = yup.object().shape({
    displayName: yup.string().trim().required(),
    legalName: yup.string().trim().required(),
    description: yup.string(),
    industry: yup.array().of(yup.string()).min(1),
    address: yup.object().shape({
        line1: yup.string(),
        line2: yup.string(),
        city: yup.string(),
        postalCode: yup.string().label('Post Code'),
        country: yup.string(),
    }),
    contact: yup.object().shape({
        phone: yup.string(),
        fax: yup.string(),
        email: yup.string(),
        website: yup.string(),
        facebook: yup.string(),
        linkedin: yup.string(),
    }),
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
