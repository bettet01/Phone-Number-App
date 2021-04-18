import http from "../config/authorizationInterceptor";
import {UserAcceptanceResponse, UserLoginPayload, UserResponse, UserSignupPayload} from "../types/UserTypes";
import {PhoneNumber, PhoneNumberResponse} from "../types/PhoneNumberTypes";

const baseApi = "http://localhost:8001/api"

export const signupUser = (payload: UserSignupPayload) => {
    return http.post<UserAcceptanceResponse>(`${baseApi}/auth/signup`, payload);
}

export const loginUser = (payload: UserLoginPayload) => {
    return http.post<UserAcceptanceResponse>(`${baseApi}/auth/signin`, payload);
}

export const getUsers = () => {
    return http.get<UserResponse>(`${baseApi}/users`);
}

export const getPhoneNumbers = () => {
    return http.get<PhoneNumberResponse>(`${baseApi}/numbers`);
}

export const createPhoneNumber = (payload: PhoneNumber) => {
    return http.post(`${baseApi}/number`, payload);
}

export const updatePhoneNumber = (payload: PhoneNumber) => {
    return http.put(`${baseApi}/number/${payload._id}`, payload);
}

export const deletePhoneNumber = (id: string) => {
    return http.delete(`${baseApi}/number/${id}`);
}