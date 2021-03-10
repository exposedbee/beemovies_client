import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        alignItem:'center'
    },
    circleBackground: {
        color: theme.palette.grey[200]
    },
    circle: {
        position: 'absolute'
    }
}));