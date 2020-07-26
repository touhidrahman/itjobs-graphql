"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
exports.default = new graphql_1.GraphQLSchema({
    query: query_1.RootQuery,
    mutation: mutation_1.Mutation,
});
//# sourceMappingURL=schema.js.map