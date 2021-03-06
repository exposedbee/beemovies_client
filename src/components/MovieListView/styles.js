import {makeStyles} from "@material-ui/core";
import {ImportantDevices} from "@material-ui/icons";

export const useStyles= makeStyles({
    // root : {
    //     display: 'inline'
    // },
    // listHeader :{
    //     marginBottom : 20,
    // },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        // color: theme.palette.primary.light,
        height: '100% !important',
        width : '190px!Important',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },



});