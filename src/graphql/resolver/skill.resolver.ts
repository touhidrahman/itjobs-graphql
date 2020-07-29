import Skill, { ISkill } from '@local/models/skill.model'
import { createSkillRules } from '@local/rules/skill.rules'
import { GraphQLError } from 'graphql'

export async function createSkill(
    parent: any,
    args: any,
): Promise<ISkill | Error> {
    try {
        const skillInput = await createSkillRules.validate(args)

        const skill = new Skill({ ...skillInput })
        await skill.save()
        return (await Skill.findById(skill._id)) as ISkill
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function getSkills(
    parent: any,
    { page, size }: any,
    { headers }: any,
): Promise<ISkill[]> {
    const _page = Number(page) - 1
    const _size = Number(size)

    return await Skill.find({})
        .skip(_page * _size)
        .limit(_size)
}

export async function updateSkill(
    parent: any,
    { name, newName }: any,
    { headers }: any,
): Promise<ISkill | null> {
    const skill = await Skill.findOneAndUpdate({ name }, { name: newName })
    if (skill) {
        return await Skill.findOne({ name: newName })
    }
    return null
}
