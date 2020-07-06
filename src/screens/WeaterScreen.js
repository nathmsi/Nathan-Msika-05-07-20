import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


import SearchWeather from '../components/Search/SearchCountry';
import WeatherCardSingle from '../components/Weather/WeatherCardFiveDays';



const useStyles = makeStyles((theme) => ({
    mainContent: {
        marginTop: 48 + 20,
    },
}));


const WeatherScreen = () => {
    const classes = useStyles();

    return (
            <div className={classes.mainContent}>
                <SearchWeather />
                <WeatherCardSingle />
            </div>
    )
}



export default (WeatherScreen);
