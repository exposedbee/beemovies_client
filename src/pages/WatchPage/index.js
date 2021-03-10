import React, {useEffect, useState} from 'react'
import {NavBar} from "../../components/NavigationBar";
import {HomeCard} from "../../components/HomeCard";
import {useStyles} from "./styles";
import {Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import {Accessibility} from "@material-ui/icons";
import {setProfile, setSignedOut, setToken} from "../../state/actions/app";
import {connect} from "react-redux";
import {getMovieRating} from "../../services/movies";
import {useHistory} from "react-router-dom";


const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setProfile, setToken, setSignedOut};

export const WatchPage = connect(mapStateToProps, mapDispatchToProps)(WatchPageComponent);

export function WatchPageComponent({currentMovie}) {
    const {root, commentSection} = useStyles();
    const history = useHistory();

    useEffect(function () {

        if(currentMovie._id===undefined){
            history.push('/home')
        }
    }, []);

    return (

        <div className={root}>
            <NavBar/>
            <Grid container direction={"column"} alignItems={"center"} justify={"center"} wrap={"nowrap"}>
                <Grid item>
                    <Paper>
                        <img src={currentMovie.imageUrl} width={'800'} height={'700'}/>
                    </Paper>
                </Grid>
                <Grid item container direction={"row"} alignItems={"center"} justify={"center"}>
                    <Grid item>
                        <Button><FastRewindIcon/></Button>
                    </Grid>
                    <Grid item>
                        <Button><PauseIcon/></Button>
                    </Grid>
                    <Grid item>
                        <Button><PlayArrowIcon/></Button>
                    </Grid>
                    <Grid item>
                        <Button><FastForwardIcon/></Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Paper className={commentSection} elevation={10}>
                        <Typography variant={"caption"}>Comment Section</Typography>
                    </Paper>
                </Grid>

            </Grid>

        </div>

    );
}