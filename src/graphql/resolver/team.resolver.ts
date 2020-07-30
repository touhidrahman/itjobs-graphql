import { Team, ITeam } from '@local/models/team.model'
import { createTeamRules } from '@local/rules/team.rules'
import { GraphQLError } from 'graphql'

export async function createTeam(
    parent: any,
    { input }: any,
): Promise<ITeam | Error> {
    try {
        const teamInput = await createTeamRules.validate(input)
        const team = new Team({ ...teamInput })
        await team.save()
        return (await Team.findById(team._id)) as ITeam
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function getTeams(
    parent: any,
    args: any,
): Promise<ITeam[] | Error> {
    try {
        return (await Team.find()) as ITeam[]
    } catch (error) {
        return new GraphQLError(error)
    }
}
