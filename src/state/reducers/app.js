import {SIGN_OUT, SET_PROFILE, SET_TOKEN, SET_ACTIVE_PAGE, Set_Movie} from "../actions/app";
import {LOCALSTORAGE_TOKEN_KEY} from "../../services/axios";
import {SignInPage} from "../../pages/SignInPage";



const defaultAppState = {
    token: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY),
    profile: undefined,
    currentMovie: localStorage.getItem("currentMovie")
};

export function appStateReducer(state = defaultAppState, action) {
    switch (action.type) {
        case SIGN_OUT:
            localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY)
            return {
                ...state,
                token: null,
                profile: undefined
            };
        case SET_TOKEN:
            const {newToken} = action.payload;
            localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, newToken);
            return {
                ...state,
                token: newToken
            };
        case SET_PROFILE:
            const {newProfile} = action.payload;
            return {
                ...state,
                profile: newProfile
            };
        case Set_Movie:
            const {newMovie} = action.payload;
            localStorage.setItem("currentMovie",newMovie);
            return {
                ...state,
                currentMovie: newMovie
            }
        default:
            return state;
    }
}
