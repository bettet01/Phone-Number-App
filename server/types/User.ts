import {Document} from "mongoose";

export interface Role extends Document{
    name: string
}

export interface User extends Document {
    username: string,
    email: string,
    password: string,
    roles: Role[]
}