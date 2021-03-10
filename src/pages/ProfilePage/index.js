import React, {useEffect, useState} from 'react'
import {ProfileCard} from "../../components/ProfileCard";
import {useStyles} from "./styles";
import {Box} from "@material-ui/core";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


export function ProfilePage(){
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const {root} = useStyles();

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box className={root} minHeight={windowDimensions.height}>
            <ProfileCard/>
        </Box>
    );
}