"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const graphql_1 = require("graphql");
const type_1 = require("./type");
const user_resolver_1 = require("./resolver/user.resolver");
exports.Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: type_1.UserType,
            args: {
                firstName: { type: graphql_1.GraphQLString },
                lastName: { type: graphql_1.GraphQLString },
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: user_resolver_1.signup,
        },
        login: {
            type: type_1.TokenType,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: user_resolver_1.login,
        },
    },
});
//# sourceMappingURL=mutation.js.map