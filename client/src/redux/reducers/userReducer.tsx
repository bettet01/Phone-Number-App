import {UserActionEnums, UserState} from "../../types/UserTypes";
import produce from "immer";
import {Action} from "../../types/GenericTypes";


export const defaultState: UserState = {
    loading: false,
    user: undefined,
    errorMessage: undefined,
}

const UserReducer = produce((state = defaultState, action: Action) => {
    switch (action.type) {
        case UserActionEnums.USER_LOADING:
            state.loading = true;
            state.errorMessage = undefined;
            break;
        case UserActionEnums.USER_CREDS_SUCCESS:
            state.loading = false;
            state.user = action.payload
            state.errorMessage = undefined;
            break;
        case UserActionEnums.USER_ERROR:
            state.loading = false;
            state.errorMessage = "An error occurred. Please try again later."
            break;
        default:
            return state;
    }
})

export default UserReducer;