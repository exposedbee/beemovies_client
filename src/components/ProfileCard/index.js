import React from 'react'
import {Card, CardContent, CardHeader, Container, Divider, Grid, Typography} from "@material-ui/core";
import {NavBar} from "../NavigationBar";
import {useStyles} from "./styles";
import {setProfile, setSignedOut, setToken} from "../../state/actions/app";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setProfile, setToken, setSignedOut};


export const ProfileCard = connect(mapStateToProps, mapDispatchToProps)(ProfileCardComponent);

export function ProfileCardComponent({profile}) {
    const {profileCard, detail,} = useStyles();


    return (
        <Container>
            <NavBar/>
            {profile &&
            <Card className={profileCard}>
                <CardHeader title={"User Profile"}>

                </CardHeader>
                <CardContent>
                    <Grid container direction={"column"} wrap={"nowrap"} >
                        <Grid container direction={"column"} className={detail}>
                            <Grid item container direction="row">
                                <Grid item sm={3}>
                                    <Typography>Name</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>{profile.name}</Typography>
                                </Grid>
                            </Grid>
                            <Divider light/>
                        </Grid>

                        <Grid container direction={"column"}  className={detail}>
                            <Grid item container direction="row">
                                <Grid item sm={3}>
                                    <Typography>username</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>{profile.username}</Typography>
                                </Grid>
                            </Grid>
                            <Divider light/>
                        </Grid>

                        <Grid container direction={"column"}  className={detail}>
                            <Grid item container direction="row">
                                <Grid item sm={3}>
                                    <Typography>Email</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>{profile.email}</Typography>
                                </Grid>
                            </Grid>
                            <Divider light/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            }
        </Container>
    );
}