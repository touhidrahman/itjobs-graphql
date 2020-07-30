import { Candidate, ICandidate } from '@local/models/candidate.model'
import { GraphQLError } from 'graphql'
import { createCandidateRules } from '@local/rules/candidate.rules'

export async function createCandidate(
    parent: any,
    args: any,
): Promise<ICandidate | null> {
    try {
        const candidateInput = await createCandidateRules.validate(args)
        console.log('TCL: in :', candidateInput) // ! remove
        const candidate = new Candidate({ ...candidateInput })
        const saved = await candidate.save()

        return await Candidate.findById(saved._id)
    } catch (error) {
        throw new GraphQLError(error)
    }
}
