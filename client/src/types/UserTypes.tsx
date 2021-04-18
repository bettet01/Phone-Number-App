

export enum Roles {
    ROLE_USER = "ROLE_USER",
    ROLE_ADMIN = "ROLE_ADMIN"
}

export interface RoleObject {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserActionEnums {
    USER_LOADING = "USER_LOADING",
    USER_CREDS_SUCCESS = "USER_CREDS_SUCCESS",
    USER_ERROR = "USER_ERROR"
}

export interface UserState {
    loading: boolean;
    user: User | undefined;
    errorMessage: string | undefined;
}

export interface User {
    id: string;
    username: string;
    email: string;
    roles: Roles[] | RoleObject[];
}

export interface UserDto {
    id: string;
    username: string;
    email: string;
    roles: RoleObject[];
}

export interface UserResponse {
    users: UserDto[]
}

export interface UserAcceptanceResponse extends User {
    accessToken: string;
}

export interface UserSignupPayload {
    username: string;
    password: string;
    email: string;
}

export interface UserLoginPayload {
    username: string;
    password: string;
}