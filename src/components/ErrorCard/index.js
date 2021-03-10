import React from 'react'
import {Button, Grid, Typography} from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';
import {useStyles} from "./styles";


export function ErrorCard({errorMessage, onRetryClick}){
    const {container, errorIcon} = useStyles();

    return (
        <Grid container direction="column" className={container} spacing={5} alignItems="center" justify="center">
            <Grid item>
                <ErrorIcon color="disabled" className={errorIcon}/>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="h2" align="center" color="textSecondary">
                    {errorMessage}
                </Typography>
            </Grid>
            {onRetryClick && (
                <Grid item>
                    <Button variant="outlined" onClick={onRetryClick}>
                        Retry
                    </Button>
                </Grid>
            )}
        </Grid>
    );
}