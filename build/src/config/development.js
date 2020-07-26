"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const config = {
    serverUrl: process.env.SERVER_URL,
    serverPort: process.env.SERVER_PORT,
    serverDatabase: process.env.DB_DEV,
    jwtSecret: process.env.JWT_SECRET,
};
exports.default = config;
//# sourceMappingURL=development.js.map