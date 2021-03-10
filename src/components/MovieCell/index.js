import React, {useState} from 'react'
import {
    ButtonBase, Card, CardActions,
    CardMedia,
    Grid,
    Popover,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import {useHistory} from "react-router-dom";
import {setMovie} from "../../state/actions/app";
import {connect} from "react-redux";


function SingleMovieCard() {

    return {};
}


const mapStateToProps = (state, ownProps) => ({
    ...state.appState,
    ...ownProps
});

const mapDispatchToProps = {setMovie};

export const MovieCell = connect(mapStateToProps, mapDispatchToProps)(MovieCellComponent);


export function MovieCellComponent({data, setMovie, currentMovie}) {
    const {container, popover, paper, cardAction, root, movieTitle} = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setvalue] = useState(data);
    const history = useHistory();
    const releaseDate= data.releaseDate.slice(0,10);

    function onClickMovie() {
        // history.push("/profile");
        console.log(currentMovie);
        setMovie(data);
        console.log(currentMovie);
    }


    const open = Boolean(anchorEl);
    const classes = useStyles();

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={root}>
            <Card className={container}>
                <ButtonBase className={cardAction} onClick={() => {
                    setMovie(data);
                    history.push('/watch');
                }}>
                    <CardMedia>
                        <img src={data.imageUrl}
                             width={"150px"}/>
                    </CardMedia>
                    <CardActions>
                        <Grid container direction={'column'}>
                            <Grid item>
                                <Typography
                                    className={movieTitle}
                                    variant={"caption"}
                                    aria-owns={open ? 'mouse-over-popover' : undefined}
                                    aria-haspopup="true"
                                    onMouseEnter={handlePopoverOpen}
                                    onMouseLeave={handlePopoverClose}>
                                    {data.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"caption"}>
                                    {releaseDate}
                                </Typography>
                                {/*<Popover*/}
                                {/*    id="mouse-over-popover"*/}
                                {/*    className={popover}*/}
                                {/*    classes={{*/}
                                {/*        paper: paper,*/}
                                {/*    }}*/}
                                {/*    open={open}*/}
                                {/*    anchorEl={anchorEl}*/}
                                {/*    anchorOrigin={{*/}
                                {/*        vertical: 'bottom',*/}
                                {/*        horizontal: 'left',*/}
                                {/*    }}*/}
                                {/*    transformOrigin={{*/}
                                {/*        vertical: 'top',*/}
                                {/*        horizontal: 'left',*/}
                                {/*    }}*/}
                                {/*    onClose={handlePopoverClose}*/}
                                {/*    disableRestoreFocus*/}
                                {/*>*/}
                                {/*    <Typography variant={"caption"}>An ex-con becomes the traveling partner of a conman*/}
                                {/*        who*/}
                                {/*        turns out to be one of the older gods trying to recruit troops to battle the*/}
                                {/*        upstart*/}
                                {/*        deities. Based on Neil Gaiman's fantasy novel.</Typography>*/}
                                {/*</Popover>*/}
                            </Grid>
                        </Grid>
                    </CardActions>
                </ButtonBase>
            </Card>
        </div>
    );
}