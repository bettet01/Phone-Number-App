

export enum Roles {
    ROLE_USER = "ROLE_USER",
    ROLE_ADMIN = "ROLE_ADMIN"
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
    roles: Roles[];
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