import { JobRole } from '@local/models/job-roles.model'
import * as yup from 'yup'
import { minMaxRules } from './common.rules'

export const createJobRules = yup.object().shape({
    role: yup
        .string()
        .trim()
        .required()
        .test(
            'jobRoleNotFound',
            'This job role does not exist in database',
            async (roleInput) => {
                const count = await JobRole.count({ name: roleInput })
                return count > 0
            },
        ),
    title: yup.string().trim().required(),
    level: yup
        .mixed()
        .oneOf([
            'Intern',
            'Junior',
            'Professional',
            'Senior',
            'Lead',
            'Architect',
        ])
        .required(),
    locationCity: yup.string().trim(),
    effort: yup.mixed().oneOf(['Fulltime', 'Parttime']),
    salary: minMaxRules,
    company: yup.string(),
    teamOrProduct: yup.string(),
    experience: minMaxRules,
    educationLevel: yup.number(),
    skills: yup.object().shape({
        mustHave: yup.array().of(yup.string()),
        niceToHave: yup.array().of(yup.string()),
    }),
    englishSkillLevel: yup.number(),
    relocationSupported: yup.boolean(),
    benefits: yup.array().of(yup.string()),
    description: yup.string(),
    leaveDays: yup.number(),
    employerReference: yup.string(),
    gender: yup.mixed().oneOf(['Male', 'Female', 'Any']),
    validUntill: yup.date(),
})
