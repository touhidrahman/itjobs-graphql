import * as yup from 'yup'

export const addressRules = yup.object().shape({
    line1: yup.string(),
    line2: yup.string(),
    city: yup.string(),
    postalCode: yup.string().label('Post Code'),
    country: yup.string(),
})

export const contactRules = yup.object().shape({
    phone: yup.string(),
    fax: yup.string(),
    email: yup.string(),
    website: yup.string(),
    facebook: yup.string(),
    linkedin: yup.string(),
})