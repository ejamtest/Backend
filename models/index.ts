import * as mongoose from "mongoose";

const Schema: any = mongoose.Schema;

export const templateSchema: any = new Schema({
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