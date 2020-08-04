import { IJobRole, JobRole } from '@local/models/job-roles.model'
import { jobRoleRules } from '@local/rules/job-role.rules'
import { GraphQLError } from 'graphql'
import { allowAdmin } from './common.resolver'

export async function createJobRole(
    parent: any,
    args: any,
    { headers }: any,
): Promise<IJobRole | Error> {
    allowAdmin(headers.authorization)

    try {
        const jobRoleInput = await jobRoleRules.validate(args)
        const jobRole = new JobRole({ ...jobRoleInput })
        const saved = await jobRole.save()

        return (await JobRole.findById(saved._id)) as IJobRole
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function updateJobRole(
    parent: any,
    { id, name }: any,
    { headers }: any,
): Promise<IJobRole | Error> {
    allowAdmin(headers.authorization)

    try {
        await jobRoleRules.validate({ name })
        await JobRole.findByIdAndUpdate(id, { name })

        return (await JobRole.findById(id)) as IJobRole
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function getJobRoles(parent: any, args: any): Promise<IJobRole[]> {
    return await JobRole.find({})
}

export async function deleteJobRole(
    parent: any,
    args: any,
    { headers }: any,
): Promise<IJobRole | null> {
    allowAdmin(headers.authorization)

    try {
        const toDelete = await JobRole.findById(args.id)
        await JobRole.findByIdAndDelete(args.id)

        return toDelete
    } catch (error) {
        throw new GraphQLError(error)
    }
}
