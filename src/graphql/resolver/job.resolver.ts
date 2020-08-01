import { Job, IJob } from '@local/models'
import { GraphQLError } from 'graphql'
import { createJobRules } from '@local/rules/job.rules'

export async function createJobPost(
    parent: any,
    { input }: any,
): Promise<IJob | Error> {
    try {
        const jobInput = await createJobRules.validate(input)
        const job = new Job({ ...jobInput })
        await job.save()
        return (await Job.findById(job._id).populate(
            'company teamOrProduct',
        )) as IJob
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function getJobs(parent: any, args: any): Promise<IJob[] | Error> {
    return (await Job.find().populate('company teamOrProduct')) as IJob[]
}
