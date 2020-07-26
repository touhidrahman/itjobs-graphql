"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDb = exports.connectDb = void 0;
const mongoose = require("mongoose");
const config_1 = require("../config");
let db;
exports.connectDb = () => {
    mongoose
        .connect(config_1.default.serverDatabase, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
        .catch((err) => console.log(err));
    db = mongoose.connection;
};
exports.disconnectDb = () => {
    if (!db) {
        return;
    }
    mongoose.disconnect();
};
//# sourceMappingURL=index.js.map