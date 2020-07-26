"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootQuery = void 0;
const graphql = require("graphql");
const user_model_1 = require("@local/models/user.model");
const type_1 = require("./type");
const validate_token_1 = require("@local/middlewares/validate-token");
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;
exports.RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: type_1.UserType,
            resolve(parent, args, { headers }) {
                const { authorization } = headers;
                const user = validate_token_1.validateToken(authorization);
                return user_model_1.default.findById(user.id);
            },
        },
        users: {
            type: new GraphQLList(type_1.UserType),
            resolve(parent, args, { headers }) {
                const { authorization } = headers;
                validate_token_1.validateToken(authorization);
                return user_model_1.default.find();
            },
        },
    },
});
//# sourceMappingURL=query.js.map