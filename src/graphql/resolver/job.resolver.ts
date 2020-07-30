import { Job, IJob } from '@local/models'
import { GraphQLError } from 'graphql'

export async function createJobPost(
    parent: any,
    args: any,
): Promise<IJob | Error> {
    try {
        const jobInput = args // TODO yup
        const job = new Job({ ...jobInput })
        await job.save()
        return (await Job.findById(job._id)) as IJob
    } catch (error) {
        throw new GraphQLError(error)
    }
}
