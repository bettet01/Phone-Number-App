import {combineReducers} from "redux";
import UserReducer from "./reducers/userReducer";
import SnackbarReducer from "./reducers/snackbarReducer";


export const rootReducer = combineReducers({
    UserReducer,
    SnackbarReducer
});
export type RootState = ReturnType<typeof rootReducer>;