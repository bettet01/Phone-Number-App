import {model, Schema} from "mongoose";
import {Role} from "../types/User";


const RoleDao: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
}, {timestamps: true, id: true})


export default model<Role>("roles", RoleDao);