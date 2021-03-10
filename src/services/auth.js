import {makeAxios, dataFromResponse} from "./axios";

export function signIn(username, password) {
    return makeAxios()
        .post("/auth/", {username, password})
        .then(dataFromResponse);
}

export function fetchProfile() {
    return makeAxios()
        .get("/auth/profile")
        .then(dataFromResponse);
}

export function createProfile({email, password, name, user_type, program}) {
    return makeAxios()
        .post("/auth/sign-up/", {
            email,
            password,
            name,
            user_type,
            program
        })
        .then(dataFromResponse);
}
