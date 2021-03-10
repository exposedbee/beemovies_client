export const SET_TOKEN = "SET_TOKEN";
export const SET_PROFILE = "SET_PROFILE";
export const SIGN_OUT = "SIGN_OUT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const Set_Movie = "SET_ACTIVE_MOVIE"


export const setToken = newToken => ({
    type: SET_TOKEN,
    payload: {newToken}
});

export const setProfile = newProfile => ({
    type: SET_PROFILE,
    payload: {newProfile}
});

export const setSignedOut = () => ({
    type: SIGN_OUT
});

export const setMovie = newMovie => ({
    type: Set_Movie,
    payload:{newMovie}
});