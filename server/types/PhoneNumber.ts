import {Document} from "mongoose";
import {User} from "./User";


export interface PhoneNumber extends Document {
    name: string;
    number: string;
    description: string;
    user: User;
}


export interface NumbersResponse {
    numbers: PhoneNumber[]
}