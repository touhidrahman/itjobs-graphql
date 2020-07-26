"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = exports.UserType = void 0;
const graphql_1 = require("graphql");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        firstName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        lastName: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
    }),
});
exports.TokenType = new graphql_1.GraphQLObjectType({
    name: 'Token',
    fields: () => ({
        token: { type: graphql_1.GraphQLString },
        user: { type: exports.UserType },
    }),
});
//# sourceMappingURL=type.js.map