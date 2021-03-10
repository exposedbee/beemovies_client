import React, {useEffect, useState} from 'react';
import {NavBar} from "../../components/NavigationBar";
import {MovieDetailCard} from "../../components/MovieDetailCard";
import {setProfile, setToken} from "../../state/actions/app";
import {connect} from "react-redux";
import {ErrorCard} from "../../components/ErrorCard";
import {useStyles} from "./styles";


const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {};

export const MoviePage = connect(mapStateToProps, mapDispatchToProps)(MoviePageComponent);

export function MoviePageComponent({currentMovie}) {
    const {errorContainer, navbar}= useStyles();
    const [value, setValue] = useState(currentMovie);


    return (
        <div>
            <div >
                <NavBar/>
            </div>
            <div className={navbar}>
            {value &&
            <MovieDetailCard movieData={value}/>}
            {value &&
            <div className={errorContainer}>
                <ErrorCard errorMessage={"Error Loading"}/>
            </div>
            }
            </div>
        </div>
    );
}