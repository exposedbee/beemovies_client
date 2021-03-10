import React, {useEffect, useState} from 'react'
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {setProfile, setToken} from "../../state/actions/app";
import {fetchProfile, signIn} from "../../services/auth";
import {useHistory} from "react-router-dom";


const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setProfile, setToken};

export const SignInCard = connect(mapStateToProps, mapDispatchToProps)(SignInCardComponent);

function SignInCardComponent({token, setToken, setProfile, setActivePage}) {
    const {container, fullWidth} = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(undefined);
    const history = useHistory();

    useEffect(() => {
        if (!token)
            return;
        fetchProfile()
            .then(profile => {
                setProfile(profile);
                history.push("/home");
            })
            .catch(error =>console.log("Previous Session Expired"))
    })

    function onSignInClick() {
        // axios.post('http://localhost:8080/auth/profile',{headers :{
        //     token : {token}
        //     }})
        //     .then((response) => {
        //         console.log(response);
        //         setToken(response.data);
        //     }, (error) => {
        //         console.log(error);
        //     });

        signIn(username, password)
            .then(token => {
                console.log(token);
                setToken(token)
                return fetchProfile();
            })
            .then(data => {
                    setProfile(data);
                }
            )
            .catch(error => setError(error.response.data.message));
    }

    return (
        <Card className={container}>
            <CardContent>
                <Grid container direction={"column"} spacing={5}>
                    <Grid item>
                        <Typography>
                            Sign in to bedMovies
                        </Typography>
                    </Grid>
                    {error && (
                        <Grid item>
                            <Typography variant="subtitle2" color="error">
                                {error}
                            </Typography>
                        </Grid>
                    )}
                    <Grid item>
                        <TextField
                            label="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            type="email"
                            className={fullWidth}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className={fullWidth}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    onSignInClick()
                                }
                            }
                            }
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() => {
                                onSignInClick()
                            }}
                            className={fullWidth}>
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container direction={"row"} justify={"flex-end"}>
                    <Grid item>
                        <Button>Dont have a account? Sign Up</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}