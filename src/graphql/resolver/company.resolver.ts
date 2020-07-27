import Company, { ICompany } from '@local/models/company.model'
import { createCompanyRules } from '@local/rules/company.rules'
import { GraphQLError } from 'graphql'

export async function createCompany(
    parent: any,
    args: any,
): Promise<ICompany | Error> {
    try {
        console.log('TCL: args', args)
        // await createCompanyRules.validate(args)

        const company = new Company({ ...args })

        return await company.save()
    } catch (error) {
        return new GraphQLError(error)
    }
}
