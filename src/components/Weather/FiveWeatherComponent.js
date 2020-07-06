import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import WeatherView from './WeatherView';

import WeatherViewSkelton from './WeatherViewSkelton';


// snackbar
import SnackBar from '../SnackBar/SnackBar';


import useWindowsDimention from '../../hooks/useWindowsDimention';
import use5daysWeather from '../../hooks/use5daysWeather';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        justifyContent: 'center'
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));


export default function TitlebarGridList(props) {
    const classes = useStyles();
    const [openSnack, setOpenSnack] = React.useState(false);

    const {
        width
    } = useWindowsDimention();

    const {
        get5daysWeather,
        loading,
        errorMessage,
        success,
        result,
        temperature
    } = use5daysWeather();

    const {
        selectedCountry
    } = props;


    React.useEffect(() => {
        get5daysWeather(selectedCountry.Key);
    }, [selectedCountry]);

    React.useEffect(() => {
        if (errorMessage) {
            setOpenSnack(true);
        } else {
            setOpenSnack(false);
        }
    }, [errorMessage]);

    React.useEffect(() => {
        get5daysWeather(selectedCountry.Key);
    }, [temperature]);

    return (
        <div>
            <Grid
                container
                justify="center"
                spacing={2}
            >
                {
                    (!loading && result) ?
                        <>
                            {
                                result.DailyForecasts.map(dayly => (
                                    <Grid item xs={width < 1200 ? (width < 900 ? (width < 600 ? 12 : 6) : 4) : 2} key={dayly.Date} className={classes.item} >
                                        <WeatherView dayly={dayly} />
                                    </Grid>
                                ))
                            }
                        </>
                        : null
                }
                {
                    (loading || errorMessage) ?
                        <>
                            {
                                [0, 1, 2, 3, 4].map(key => (
                                    <Grid item xs={width < 1200 ? (width < 900 ? (width < 600 ? 12 : 6) : 4) : 2} key={key} className={classes.item} >
                                        <WeatherViewSkelton />
                                    </Grid>
                                ))
                            }
                        </>
                        : null
                }
            </Grid>

            <SnackBar open={openSnack} success={false} duration={2000} handleClose={() => setOpenSnack(false)} message={errorMessage} />
        </div>
    );
}

