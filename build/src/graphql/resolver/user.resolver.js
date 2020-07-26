"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const user_model_1 = require("@local/models/user.model");
const user_rules_1 = require("@local/rules/user.rules");
const graphql_1 = require("graphql");
const config_1 = require("@local/config");
const jsonwebtoken = require("jsonwebtoken");
async function signup(parent, args) {
    try {
        await user_rules_1.signupRules.validate(args);
        const user = new user_model_1.default({
            firstName: args.firstName,
            lastName: args.lastName,
            password: args.password,
            email: args.email,
        });
        return await user.save();
    }
    catch (error) {
        return new graphql_1.GraphQLError(error);
    }
}
exports.signup = signup;
async function login(parent, args) {
    try {
        await user_rules_1.loginRules.validate(args);
        const userEmail = args.email;
        const user = await user_model_1.default.findOne({ email: userEmail });
        if (!user) {
            return { token: '', user: null };
        }
        const userForToken = {
            name: `${user.firstName} ${user.lastName}`,
            id: user.id,
            email: user.email,
        };
        const token = jsonwebtoken.sign({ id: user.id, user: userForToken }, config_1.default.jwtSecret, { expiresIn: '1d' });
        return { token, user: userForToken };
    }
    catch (error) {
        return new graphql_1.GraphQLError(error);
    }
}
exports.login = login;
//# sourceMappingURL=user.resolver.js.map