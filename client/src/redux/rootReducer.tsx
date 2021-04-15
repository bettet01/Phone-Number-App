import {combineReducers} from "redux";
import UserReducer from "./reducers/userReducer";


export const rootReducer = combineReducers({
    UserReducer
});
export type RootState = ReturnType<typeof rootReducer>;