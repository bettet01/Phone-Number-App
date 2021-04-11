import {model, Schema} from "mongoose";
import {PhoneNumber} from "../types/PhoneNumber";


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
        }
    },
    { timestamps: true, id: true }
)

export default model<PhoneNumber>("records", PhoneNumberDao);