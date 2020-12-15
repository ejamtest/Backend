"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.templateSchema = new Schema({
    url: {
        type: String,
        required: "Enter a url"
    },
    templateName: {
        type: String,
        required: "Enter a templateName:"
    },
    version: {
        type: Array
    },
    deployedAt: {
        type: Date
    }
});
//# sourceMappingURL=index.js.map