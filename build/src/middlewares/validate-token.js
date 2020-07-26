"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken = require("jsonwebtoken");
const config_1 = require("@local/config");
exports.validateToken = (token) => {
    return jsonwebtoken.verify(token, config_1.default.jwtSecret);
};
//# sourceMappingURL=validate-token.js.map