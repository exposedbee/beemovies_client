import {makeAxios2, dataFromResponse} from "./axios2";

export function getNewMovies() {
    return makeAxios2()
        .get("/movies/latest")
        .then(dataFromResponse)
}

export function getLatestWatchList() {
    return makeAxios2()
        .get("/watch/latestWatch")
        .then(dataFromResponse)
}


export function getRecommendations() {
    return makeAxios2()
        .get("/movies/random")
        .then(dataFromResponse)
        .then()
}

export function postWatchMovie(movie_id){
    return makeAxios2()
        .post("/watch/add",{movie_id})
        .then(dataFromResponse)
}

export function postMovieRating(movie_id,commentContent,rating){
    return makeAxios2()
        .post("/rating/add",{movie_id, commentContent,rating})
        .then(dataFromResponse)
        .then()
}

export function getMovieRating(movie_id){
    return makeAxios2()
        .post("/rating/getOneByMovie",{movie_id})
        .then(dataFromResponse)
}


