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
