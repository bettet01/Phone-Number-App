import {UserActionEnums, UserSignupPayload} from "../../types/UserTypes";
import {loginUser, signupUser} from "../../service/backendApi";


export interface UserAction {
    type: string;
    payload?: any;
}

export const signUpUsernameAndPassword = (payload: UserSignupPayload) => async (dispatch: any) => {
    dispatch({
        type: UserActionEnums.USER_LOADING,
    });

    signupUser(payload).then((res) => {
        localStorage.setItem("token", res.data.accessToken)
        dispatch({
            type: UserActionEnums.USER_CREDS_SUCCESS,
            payload: res.data
        })
    }).catch((err) => {
        dispatch({
            type: UserActionEnums.USER_ERROR,
            payload: err
        })
    })
}

export const signInUsernameAndPassword = (payload: UserSignupPayload) => async (dispatch: any) => {
    dispatch({
        type: UserActionEnums.USER_LOADING,
    });

    loginUser(payload).then((res) => {
        localStorage.setItem("token", res.data.accessToken)
        dispatch({
            type: UserActionEnums.USER_CREDS_SUCCESS,
            payload: res.data
        })
    }).catch((err) => {
        dispatch({
            type: UserActionEnums.USER_ERROR,
            payload: err
        })
    })
}