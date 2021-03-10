import './styles';
import {useStyles} from "./styles";
import {Switch, Route} from 'react-router-dom'
import {SignInPage} from "../pages/SignInPage";
import {HomeCard} from "../components/HomeCard";

function App() {
    const {root}=useStyles();

    return (
    <div className={root} >
       <SignInPage/>
    </div>
  );
}

export default App;
