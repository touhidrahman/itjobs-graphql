"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});
UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.password || !user.isModified()) {
        next();
    }
    try {
        user.password = await bcrypt.hash(user.password, 10);
    }
    catch (error) {
        next(error);
    }
    next();
});
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.model.js.map