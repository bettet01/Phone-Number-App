import {model, Schema} from "mongoose";
import {PhoneNumber} from "../types/PhoneNumber";
import * as mongoose from "mongoose";


const PhoneNumberDao: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true, id: true })

export default model<PhoneNumber>("records", PhoneNumberDao);