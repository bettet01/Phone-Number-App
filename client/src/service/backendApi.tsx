import http from "../config/authorizationInterceptor";
import {UserAcceptanceResponse, UserLoginPayload, UserSignupPayload} from "../types/UserTypes";
import {PhoneNumberResponse} from "../types/PhoneNumberTypes";

const baseApi = "http://localhost:8001/api"

export const signupUser = (payload: UserSignupPayload) => {
    return http.post<UserAcceptanceResponse>(`${baseApi}/auth/signup`, payload);
}

export const loginUser = (payload: UserLoginPayload) => {
    return http.post<UserAcceptanceResponse>(`${baseApi}/auth/signin`, payload);
}

export const getPhoneNumbers = () => {
    return http.get<PhoneNumberResponse>(`${baseApi}/numbers`);
}