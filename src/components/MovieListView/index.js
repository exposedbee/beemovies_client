import React from 'react'
import {
    Box,
    Button,
    Card, CardContent, CardHeader, CardMedia, Container,
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    ListSubheader, Paper,
    Typography
} from "@material-ui/core";
import {useStyles} from "./styles";
import {MovieCell} from "../MovieCell";


export function MovieListView({til, moviesData}) {
    const {listHeader, root, gridList, title, titleBar} = useStyles();
    const isData = Array.isArray(moviesData);
    if (isData) {
        // console.log("Data is as shown", moviesData);
    }
    return (

        <div>
            {isData &&
            <div>
                <Grid container direction={'row'} justify={"space-between"} alignItems={"center"}
                      className={listHeader} spacing={8}>
                    <Grid item>
                        <Typography variant={'h5'}>{til}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'subtitle1'}>More..</Typography>
                    </Grid>
                </Grid>
                <GridList className={gridList} >
                    {moviesData.map((data) =>
                        <GridListTile className={title} key={data._id}>
                            <MovieCell data={data}/>
                        </GridListTile>
                    )}
                </GridList>
            </div>
            }
        </div>
    );
}