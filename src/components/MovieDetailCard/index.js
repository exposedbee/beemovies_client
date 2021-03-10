import React, {useEffect, useState} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Container, Dialog,
    DialogActions, DialogContent, DialogTitle,
    Grid,
    Paper, TextField,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import {ErrorCard} from "../ErrorCard";
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import {setProfile, setToken} from "../../state/actions/app";
import {connect} from "react-redux";
import {HomeCardComponent} from "../HomeCard";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Rating from '@material-ui/lab/Rating';


import {
    getLatestWatchList,
    getMovieRating,
    getNewMovies,
    getRecommendations, postMovieRating,
    postWatchMovie
} from "../../services/movies";
import {useHistory} from "react-router-dom";


const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {};

export const MovieDetailCard = connect(mapStateToProps, mapDispatchToProps)(MovieDetailCardComponent);


export function MovieDetailCardComponent({currentMovie}) {
    const {detailsContainer, container, containerBackground, spacerIconSmall, watchIcon} = useStyles();
    const [rating, setRating] = useState({});
    const ratingButtonText = rating.rating ? "Edit" : "Add a Rating";
    const ratingValue = rating ? parseInt(rating.rating) : 0;
    const [open, setOpen] = useState(false);
    const [ratingComment, setRatingComment] = useState("");
    const comment = rating ? rating.commentContent : ratingComment;
    const [ratingVal, setRatingVal] = useState(0);
    const [ratingValMain, setRatingValMain] = useState(0);
    const history = useHistory();
    const [movieDate,setMovieDate]= useState();
    const [movieType, setMovieType] = useState("");


    useEffect(function () {
        getMovieRating(currentMovie._id)
            .then(res => {
                {
                    if (res) {
                        setRating(res);
                        setRatingVal(parseInt(res.rating));
                        setRatingValMain(parseInt(res.rating))
                        setRatingComment(res.commentContent);
                    }
                }
            })
        if(currentMovie._id ===undefined){
            history.push('/home')
        }
        else{
            setMovieDate(currentMovie.releaseDate.slice(0, 10))
            setMovieType(genra());
        }
    }, []);

    const styles = {
        paperContainer: {
            position: 'relative',
            display: 'flex',
            '&::before': {
                content: "",
                backgroundImage: `url(${currentMovie.imageUrl})`,
                backgroundSize: 'cover',
                position: 'absolute',
                opacity: '0.75',
            },

        }
    };

    const genra = () => {
        let result;
        result = "";
        currentMovie.category.forEach(data =>
            result = result + " " + data)
        return result
    }

    const submit = () => {
        postMovieRating(currentMovie._id, ratingComment, ratingVal.toString());
        setRatingValMain(ratingVal);
        setOpen(false);
    }

    return (
        <Paper style={styles.paperContainer} className={container}>
            {currentMovie &&
            <Container >
                <Grid container direction={'row'} wrap={"nowrap"} >
                    <Grid item>
                        <Paper elevation={10}>
                            <img src={currentMovie.imageUrl} width={'300'} height={'450'}/>
                        </Paper>
                    </Grid>
                    <Grid item container justify={"space-between"} direction={"column"} className={detailsContainer}>
                        <Grid item container direction={"column"} spacing={10}>
                            <Grid item>
                                <Grid item>
                                    <Typography
                                        variant={"h4"}
                                        component={"h1"}
                                    >{currentMovie.title}</Typography>
                                </Grid>
                                <Grid item container direction={"row"} justify={"flex-start"} spacing={1}>
                                    <Grid item>
                                        <Typography variant={"subtitle2"} color={"primary"}>
                                            {movieDate}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <FiberManualRecordIcon className={spacerIconSmall} color="secondary"/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"subtitle2"} color={"primary"}>
                                            {movieType}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid item container direction={"column"} justify={"flex-start"}>
                                    <Grid item>
                                        <Typography variant={"subtitle2"}>
                                            Director
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"subtitle2"} color={"primary"}>
                                            {currentMovie.movieDirector}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container direction={"row"} justify={"space-between"} wrap={"nowrap"}>
                                <Grid item container direction={'column'}>
                                    <Grid item>{rating &&

                                    <Typography>
                                        <Rating name="read-only" value={ratingValMain} readOnly/>
                                    </Typography>}
                                    </Grid>
                                    <Grid item>
                                        <Button color={"secondary"}
                                                onClick={e => setOpen(true)}>{ratingButtonText}</Button>
                                        <Dialog open={open} onClose={() => setOpen(false)}>
                                            <DialogTitle>How did you like this movie</DialogTitle>
                                            <DialogContent>
                                                {/*<Grid container direction="column" spacing={3} className={gridContainer} justify="flex-start" >*/}
                                                <Rating
                                                    name="simple-controlled"
                                                    value={ratingVal}
                                                    onChange={(event, newValue) => {
                                                        setRatingVal(newValue);
                                                    }}
                                                />
                                                <TextField
                                                    defaultValue={ratingComment}
                                                    autoFocus
                                                    margin="dense"
                                                    id="label"
                                                    label="Comment"
                                                    fullWidth
                                                    onChange={e => setRatingComment(e.target.value)}
                                                />
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={e => setOpen(false)}>Cancel</Button>
                                                <Button color={"secondary"} onClick={submit}>Submit</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Grid>

                                </Grid>
                                <Grid item >
                                    <Button variant={"contained"} color={"secondary"}
                                            onClick={() => {
                                                postWatchMovie(currentMovie._id);
                                                history.push("/detail");
                                            }}
                                    >Watch
                                        <VisibilityIcon fontSize={"small"} className={watchIcon}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            }
        </Paper>
    );
}

// <Container>
//     <Card>
//         <CardHeader
//             title={title}/>
//         <CardContent className={container}>
//             <Grid container direction={'column'} alignItems='center'>
//                 <Grid item className={containerMovie}>
//                     <Paper className={containerMovie} >
//                         <ErrorCard errorMessage={"Could not load movie"}/>
//                         <Grid container direction={'row'}  justify={"center"} alignItems={"center"} className={player}>
//                             <Grid item><FastRewindIcon fontSize={"small"} color={"primary"}/></Grid>
//                             <Grid item><PlayArrowIcon fontSize={"small"} color={"primary"}/></Grid>
//                             <Grid item><FastForwardIcon fontSize={"small"} color={"primary"}/></Grid>
//                         </Grid>
//                     </Paper>
//                 </Grid>
//                 <Grid item>
//                 </Grid>
//             </Grid>
//         </CardContent>
//     </Card>
//     <Card>
//         <CardHeader title={'Rating'}/>
//     </Card>
// </Container>