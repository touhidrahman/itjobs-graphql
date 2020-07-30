import { Company, ICompany } from '@local/models/company.model'
import { createCompanyRules } from '@local/rules/company.rules'
import { GraphQLError } from 'graphql'
import { validateToken } from '@local/middlewares/validate-token'

export async function createCompany(
    parent: any,
    { input }: any,
): Promise<ICompany | Error> {
    try {
        const sanitizedArgs = await createCompanyRules.validate(input)

        const company = new Company({ ...sanitizedArgs })

        const res = await company.save()
        const resPopulated = await Company.findById(res._id).populate(
            'hiringManager teams',
        )

        return resPopulated!
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function getCompanies(
    parent: any,
    args: any,
    { headers }: any,
): Promise<ICompany[] | Error> {
    const { authorization } = headers
    const user = validateToken(authorization)

    return await Company.find().populate('hiringManager teams')
}

export async function deleteCompany(
    parent: any,
    args: any,
): Promise<boolean | Error> {
    const { id } = args
    try {
        const res = await Company.findByIdAndDelete(id)
        if (!res) {
            return new GraphQLError('Company does not exist')
        }

        return !!res
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function addTeamToCompany(
    parent: any,
    args: any,
): Promise<ICompany | Error> {
    try {
        const company = await Company.findById(args.companyId)
        if (company && !company.teams.includes(args.teamId)) {
            company.teams.push(args.teamId)
            await company.save()
        }
        return (await Company.findById(args.companyId).populate(
            'hiringManager teams',
        )) as ICompany
    } catch (error) {
        return new GraphQLError(error)
    }
}

export async function removeTeamFromCompany(
    parent: any,
    args: any,
): Promise<ICompany | Error> {
    try {
        const company = await Company.findById(args.companyId)
        if (company && company.teams.includes(args.teamId)) {
            company.teams = company.teams.filter((x) => x !== args.teamId)
            await company.save()
        }
        return (await Company.findById(args.companyId).populate(
            'hiringManager teams',
        )) as ICompany
    } catch (error) {
        return new GraphQLError(error)
    }
}
