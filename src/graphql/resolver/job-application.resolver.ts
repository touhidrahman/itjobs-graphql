import {
    IJobApplication,
    JobApplication,
} from '@local/models/job-application.model'
import { Job } from '@local/models/job.model'
import { GraphQLError } from 'graphql'
import { allowUser, allowHiringManager } from './common.resolver'

export async function createJobApplication(
    parent: any,
    { input }: any,
    { headers }: any,
): Promise<IJobApplication | null> {
    allowUser(headers.authorization)

    try {
        const jobApplicationInput = input // TODO yup
        const job = await Job.findById(jobApplicationInput.jobId)
        const today = new Date()
        if (!job) {
            throw new GraphQLError('Job is deactivated')
        }

        const validUntill = new Date(job.validUntill).valueOf()
        if (validUntill < today.valueOf()) {
            throw new GraphQLError('Job is no longer accepting applications')
        }
        const jobApplication = new JobApplication({
            job: jobApplicationInput.jobId,
            candidate: jobApplicationInput.candidateId,
        })
        // copy the hiring stages
        jobApplication.currentStage = job.hiringStages[0]
        // TODO check is invited
        // TODO make history
        jobApplication.history = [
            {
                stage: jobApplication.currentStage,
                dateEntered: new Date(),
            },
        ]
        const saved = await jobApplication.save()

        const res = await JobApplication.findById(saved._id)
        return res
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function withdrawJobApplication(
    parent: any,
    { id }: any,
    { headers }: any,
): Promise<IJobApplication | null> {
    allowUser(headers.authorization)

    try {
        const jobApplication = await JobApplication.findById(id)
        await JobApplication.findByIdAndDelete(id)

        return jobApplication
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function changeJobApplicationStatus(
    parent: any,
    { input }: any,
    { headers }: any,
): Promise<IJobApplication | null> {
    allowHiringManager(headers.authorization)

    const { jobApplicationId: id, toStage: stage } = input

    try {
        const jobApplication = await JobApplication.findById(id)
        if (!jobApplication) {
            return null
        }
        jobApplication.currentStage = stage
        // make history
        const history = {
            stage,
            dateEntered: new Date(),
        }
        jobApplication.history.push(history)

        const res = await jobApplication.save()
        return res
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function declineJobApplication(
    parent: any,
    { input }: any,
    { headers }: any,
): Promise<IJobApplication | null> {
    // allowHiringManager(headers.authorization)

    const { reason, jobApplicationId: id, isDeclinedByCandidate } = input

    try {
        const jobApplication = await JobApplication.findById(id)
        if (!jobApplication) {
            throw new GraphQLError('Application not found')
        }
        jobApplication.declineInfo = {
            reason,
            afterStage: jobApplication.currentStage,
            dateDeclined: new Date(),
            isDeclined: true,
            isDeclinedByCandidate,
        }
        jobApplication.currentStage = 'Declined'
        await jobApplication.save()

        return await JobApplication.findById(id)
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function getJobApplications(
    parent: any,
    { page, size }: any,
    { headers }: any,
): Promise<IJobApplication[] | null> {
    allowHiringManager(headers.authorization)

    const myPage = page < 1 ? 0 : page - 1

    try {
        const jobApplications = await JobApplication.find({})
            .skip(myPage * size)
            .limit(size)
        return jobApplications
    } catch (error) {
        throw new GraphQLError(error)
    }
}
