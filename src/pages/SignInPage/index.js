import React from 'react'
import {SignInCard} from "../../components/SignInCard";
import {useStyles} from "./styles";

export function SignInPage(){
    const {container }= useStyles();
    return (
        <div className={container}>
            <SignInCard/>
        </div>
    );
}