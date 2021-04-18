import produce from "immer";
import {Action, SnackbarActionEnums, SnackbarNotificationState} from "../../types/GenericTypes";


export const defaultState: SnackbarNotificationState = {
    color: undefined,
    message: null,
    showNotification: false

}

const SnackbarReducer = produce((state = defaultState, action: Action) => {
    switch (action.type) {
        case SnackbarActionEnums.DISPLAY_SNACKBAR:
            state.color = action.payload.color;
            state.message =  action.payload.message;
            state.showNotification = true;
            break;
        case SnackbarActionEnums.RESET_SNACKBAR:
            state.color = undefined;
            state.message =  null;
            state.showNotification = false;
            break;
        default:
            return state;
    }
})

export default SnackbarReducer;