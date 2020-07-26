"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const config = {
    serverUrl: 'http://localhost',
    serverPort: 5001,
    serverDatabase: process.env.DB_TEST,
    jwtSecret: process.env.JWT_SECRET,
};
exports.default = config;
//# sourceMappingURL=test.js.map