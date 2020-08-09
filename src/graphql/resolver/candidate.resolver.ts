import { Candidate, ICandidate } from '@local/models/candidate.model'
import { createCandidateRules } from '@local/rules/candidate.rules'
import { GraphQLError } from 'graphql'

export async function createCandidate(
    parent: any,
    { input }: any,
): Promise<ICandidate | null> {
    try {
        const candidateInput = await createCandidateRules.validate(input)
        const candidate = new Candidate({ ...candidateInput })
        const saved = await candidate.save()

        return await Candidate.findById(saved._id)
    } catch (error) {
        throw new GraphQLError(error)
    }
}

export async function addEducationToCandidateProfile(
    parent: any,
    { id, input }: any,
    { headers }: any,
): Promise<ICandidate | null> {
    // allowUser(headers.authorization)

    const eduInput = input // TODO yup
    console.log('TCL: eduInput', eduInput)

    try {
        const candidate = await Candidate.findById(id)
        if (!candidate) {
            throw new GraphQLError('Candidate profile not found')
        }
        candidate.educations = [eduInput]
        await candidate.save()

        return await Candidate.findById(id)
    } catch (error) {
        throw new GraphQLError(error)
    }
}
