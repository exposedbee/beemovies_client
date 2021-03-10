import React, {useEffect} from 'react'
import {setProfile, setToken, setSignedOut} from "../../state/actions/app";
import {connect} from "react-redux";
import {AppBar, Avatar, Button, Chip, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useStyles} from "./styles";
import {fetchProfile} from "../../services/auth";
import App from "../../App/App";


const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setProfile, setToken, setSignedOut};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent);

function NavigationBarComponent({setSignedOut, profile, setProfile, token}) {
    const {container, content, signOutCard} = useStyles();
    const history = useHistory();

    function onClickLogout() {
        setSignedOut();
    }

    function handleHomeClick() {
        history.push("/home");
    }

    function onClickUser() {
        history.push("/profile");
    }


    useEffect(() => {
        if (!token)
            history.push("/");
        if (!profile)
            fetchProfile()
                .then(profile => setProfile(profile)
                )
                .catch()
    })

    return (
            <AppBar className={container} style={{ background: '#2E3B55' }}>
                <Toolbar>
                <Grid container direction={"row"} alignItems={"center"} wrap={"nowrap"} spacing={3}>
                    <Grid item>
                        <Typography variant={"subtitle1"} component={"h1"}
                                    onClick={() => handleHomeClick()}>BeeMovies</Typography>
                    </Grid>

                    <Grid item container direction={"row"} justify={"flex-end"} alignItems={"center"}>
                        <Grid item>
                            {profile &&
                            <Chip

                                className={content}
                                avatar={<Avatar>{profile.username[0]}</Avatar>}
                                label={profile.username}
                                variant="outlined"
                                onClick={() => onClickUser()}
                            />}
                        </Grid>
                        <Grid item>
                            <Button size={"small"} onClick={() => setSignedOut()} className={signOutCard}>Log Out</Button>
                        </Grid>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
    );
}