import {makeStyles} from "@material-ui/core";
import * as theme from "@material-ui/system";

export const useStyles = makeStyles({
    root: {
        maxWidth: '190px!Important'
    },
    container: {
        width: '150px',
        height: '291px',

    },
    popover: {
        pointerEvents: 'none',
        width: '300px!Important',
        maxWidth: '300px!Important',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial'

    },
    movieTitle: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }

});