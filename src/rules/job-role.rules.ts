import * as yup from 'yup' 
import { JobRole } from '@local/models/job-roles.model';

export const jobRoleRules = yup.object().shape({
    name: yup.string().trim().required().test(
        'jobRoleExists',
        'This job role already exists in database',
        async (roleInput) => {
            const count = await JobRole.count({ name: roleInput })
            return count === 0
        },
    ),
})