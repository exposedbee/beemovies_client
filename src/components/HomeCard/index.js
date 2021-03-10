import React, {useEffect, useState} from 'react'
import {Box, Card, CardContent, Container, Grid, Paper, Typography} from "@material-ui/core";
import {setProfile, setToken} from "../../state/actions/app";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {useStyles} from "./styles";
import {MovieListView} from "../MovieListView";
import {MovieCell} from "../MovieCell";
import {getLatestWatchList, getNewMovies, getRecommendations} from "../../services/movies";

const http = require("http");

const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setProfile, setToken};

export const HomeCard = connect(mapStateToProps, mapDispatchToProps)(HomeCardComponent);


function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}


export function HomeCardComponent({token, profile, setProfile}) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})
    const [data3, setData3] = useState({})
    useEffect(function () {
        getNewMovies()
            .then(res => {
                {
                    setData(res);
                }
            })

        getLatestWatchList()
            .then(res => {
                {
                    setData2(res);
                }
            })

        getRecommendations()
            .then(res => {
                {
                    setData3(res);
                }
            })
    }, []);


    const {container, display} = useStyles();
    const history = useHistory();

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <Container>
            <CardContent>

                {data &&
                <MovieListView til="New Arrival" moviesData={data}/>}

                {data2 &&
                <MovieListView til="Continue Watching" moviesData={data2}/>}

                {data3 &&
                <MovieListView til="Recommendations" moviesData={data3}/>}

            </CardContent>
        </Container>


    );
}