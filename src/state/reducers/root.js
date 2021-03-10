import {appStateReducer} from "./app";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    appState: appStateReducer,
});
