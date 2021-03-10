import React, {useEffect, useState} from 'react'
import {HomeCard} from "../../components/HomeCard";
import {useStyles} from "./styles";
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {NavBar} from "../../components/NavigationBar";
import {MovieCell} from "../../components/MovieCell";

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export function HomePage() {
    const {root, firstEle} = useStyles();
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div>

            <div className={firstEle}>
                <NavBar/>
            </div>
            {/*todo*/}
            <HomeCard/>
        </div>
    );
}