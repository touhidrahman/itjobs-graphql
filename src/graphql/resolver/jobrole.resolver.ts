import { jobRoleRules } from "@local/rules/job-role.rules";
import { JobRole, IJobRole } from "@local/models/job-roles.model";
import { GraphQLError } from "graphql";

export async function createJobRole(
    parent: any,
    args: any,
): Promise<IJobRole | Error> {
    try {
        const jobRoleInput = await jobRoleRules.validate(args)
        const jobRole = new JobRole({...jobRoleInput})
        const saved = await jobRole.save()

        return await JobRole.findById(saved._id) as IJobRole
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function getJobRoles(
    parent: any,
    args: any
): Promise<IJobRole[]> {
    return await JobRole.find({})
}

export async function deleteJobRole(
    parent: any, args: any
): Promise<IJobRole | null> {
    try {        
        const toDelete = await JobRole.findById(args.id)
        await JobRole.findByIdAndDelete(args.id)
    
        return toDelete
    } catch (error) {
        throw new GraphQLError(error)
    }
}