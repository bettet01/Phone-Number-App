import {model, Schema} from "mongoose";
import * as mongoose from "mongoose";
import { User } from "../types/User";



const UserDao: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "roles", required: false}]
})

export default model<User>("users", UserDao);