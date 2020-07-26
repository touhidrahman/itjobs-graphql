"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRules = exports.signupRules = void 0;
const yup = require("yup");
const user_model_1 = require("@local/models/user.model");
exports.signupRules = yup.object().shape({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    email: yup
        .string()
        .trim()
        .required()
        .test('uniqueEmail', 'This email already exists', async (emailInput) => {
        const user = await user_model_1.default.findOne({ email: emailInput });
        return user ? false : true;
    }),
    password: yup
        .string()
        .trim()
        .required()
        .min(6, 'Password is too short')
        .matches(/[a-zA-Z0-9@!#%]/, 'Password can only contain Latin letters, numbers and/or [@, !, #, %].'),
});
exports.loginRules = yup.object().shape({
    email: yup.string().trim().required(),
    password: yup.string().required(),
});
//# sourceMappingURL=user.rules.js.map