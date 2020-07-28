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
