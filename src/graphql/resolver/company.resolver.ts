import Company, { ICompany } from '@local/models/company.model'
import { createCompanyRules } from '@local/rules/company.rules'
import { GraphQLError } from 'graphql'

export async function createCompany(
    parent: any,
    args: any,
): Promise<ICompany | Error> {
    try {
        const sanitizedArgs = await createCompanyRules.validate(args)

        const company = new Company({ ...sanitizedArgs })

        const res = await company.save()
        const resPopulated = await Company.findById(res._id).populate(
            'hiringManager',
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
    return await Company.find().populate('hiringManager')
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
