import {Document} from "mongoose";


export interface PhoneNumber extends Document {
    name: string;
    number: string;
    description: string;
}


export interface NumbersResponse {
    numbers: PhoneNumber[]
}