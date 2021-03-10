import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
   container:{
      height : 60,
      overflow: "hidden",
      display : "flex",
      paddingLeft: 100,
      paddingRight: 100,
   } ,
   content : {
      marginRight : 30,
      color:"#ffffff",
   }
   ,
   signOutCard:{
      color:"#ffffff"
   }
});