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
): Promise<IJobApplication | null> {
    try {
        const jobApplicationInput = input // TODO yup
        const jobApplication = new JobApplication({
            job: jobApplicationInput.jobId,
            candidate: jobApplicationInput.candidateId,
        })
        // copy the hiring stages
        const job = await Job.findById(jobApplicationInput.jobId)
        if (job) {
            const hiringStages = job.hiringStages
            jobApplication.currentStage = hiringStages[0]
            jobApplication.nextAllowedStages = hiringStages.slice(1)
            // TODO check is invited
            // TODO make history
            jobApplication.history = [
                {
                    stage: jobApplication.currentStage,
                    dateEntered: new Date(),
                },
            ]
        }
        const saved = await jobApplication.save()

        const res = await JobApplication.findById(saved._id)
        console.log('TCL: res', res)
        return res
    } catch (error) {
        throw new GraphQLError(error)
    }
}
