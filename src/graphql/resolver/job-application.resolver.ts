import { Job, IJob } from '@local/models/job.model'
import { GraphQLError } from 'graphql'
import {
    JobApplication,
    IJobApplication,
} from '@local/models/job-application.model'

export async function createJobApplication(
    parent: any,
    { input }: any,
    { headers }: any,
): Promise<IJobApplication> {
    try {
        const jobApplicationInput = input // TODO yup
        const jobApplication = new JobApplication({ ...jobApplicationInput })
        // copy the hiring stages
        const job = await Job.findById(jobApplicationInput.jobId)
        if (job) {
            const hiringStages = job.hiringStages
            jobApplication.currentStage = hiringStages.shift()!
            jobApplication.nextAllowedStages = hiringStages
            // TODO check is invited
            // TODO make history
        }
        await jobApplication.save()

        return jobApplication
    } catch (error) {
        throw new GraphQLError(error)
    }
}
