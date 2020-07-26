"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    serverUrl: process.env.SERVER_URL,
    serverPort: process.env.PORT,
    serverDatabase: process.env.DB_PROD,
    jwtSecret: process.env.JWT_SECRET,
};
exports.default = config;
//# sourceMappingURL=production.js.map