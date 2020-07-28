import Team, { ITeam } from '@local/models/team.model'
import { GraphQLError } from 'graphql'

export async function createTeam(
    parent: any,
    args: any,
): Promise<ITeam | Error> {
    try {
        // TODO validate
        const team = new Team({ ...args })
        const res = await team.save()
        return (await Team.findById(team._id)) as ITeam
    } catch (error) {
        return new GraphQLError(error)
    }
}
