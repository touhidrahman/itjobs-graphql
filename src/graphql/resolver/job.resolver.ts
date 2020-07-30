import { Job, IJob } from '@local/models'
import { GraphQLError } from 'graphql'

export async function createJobPost(
    parent: any,
    { input }: any,
): Promise<IJob | Error> {
    try {
        const jobInput = input // TODO yup
        const job = new Job({ ...jobInput })
        await job.save()
        return (await Job.findById(job._id).populate(
            'company teamOrProduct',
        )) as IJob
    } catch (error) {
        throw new GraphQLError(error)
    }
}
