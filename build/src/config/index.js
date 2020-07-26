"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`).default;
exports.default = config;
//# sourceMappingURL=index.js.map