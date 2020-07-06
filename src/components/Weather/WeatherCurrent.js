import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Tooltip from '@material-ui/core/Tooltip';

import IconButton from "@material-ui/core/IconButton";
import Skeleton from '@material-ui/lab/Skeleton';

import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Container } from '@material-ui/core';

// hooks
import useCurrentWeather from '../../hooks/useCurrentWeather';

// snackbar
import SnackBar from '../SnackBar/SnackBar';

// context Theme for temperature c or f
import { Context as ThemeContext } from '../../contexts/themeContext';


const useStyles = makeStyles((theme) => ({
    content: {
        //width: 300,
        marginTop: 20
    },
    contentCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 0
    },
    addFavorite: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    fiveWeather: {
        marginTop: 20
    },
    temperatureTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatar: {
        width: theme.spacing(19),
        height: theme.spacing(19),
        alignContent: 'center',
        marginLeft: theme.spacing(1)
    },
    Title: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));



function WeatherCard(props) {

    const classes = useStyles();
    const [openSnack, setOpenSnack] = React.useState(false);

    const {
        state: {
            temperature
        }
    } = React.useContext(ThemeContext);

    const {
        getCurrentWeather,
        loading,
        errorMessage,
        success,
        result
    } = useCurrentWeather();

    const {
        selectedCountry,
        addToFavorite,
        isLiked
    } = props;

    React.useEffect(() => {
        getCurrentWeather(selectedCountry.Key);
    }, []);

    React.useEffect(() => {
        if (errorMessage) {
            setOpenSnack(true);
        } else {
            setOpenSnack(false);
        }
    }, [errorMessage]);





    return (
        <div className={classes.contentCard}>

            <div className={classes.Title}>
                <Typography variant="h3" >
                    {selectedCountry.LocalizedName ? selectedCountry.LocalizedName : ''}   {' '}
                </Typography>
                <div className={classes.addFavorite}>
                    <Tooltip title={`${isLiked ? "unLike" : "Like"}`}>
                        <IconButton
                            color="inherit"
                            onClick={() => { addToFavorite(selectedCountry) }}
                        >
                            {
                                isLiked ?
                                    <FavoriteIcon color="inherit" />
                                    :
                                    <FavoriteBorderIcon color="inherit" />
                            }
                        </IconButton>
                    </Tooltip>
                </div>
            </div>


            <div className={classes.temperature}>


                <div className={classes.temperatureTitle}>
                    {(loading || errorMessage) ?
                        <Skeleton variant="circle" className={classes.avatar} />
                        :
                        <Avatar className={classes.avatar} align="center" src={`https://developer.accuweather.com/sites/default/files/0${result ? result.WeatherIcon : ''}-s.png`} />
                    }
                </div>


                {(loading || errorMessage) ? (
                    <Skeleton width="100%" style={{ alignSelf: 'center' }}>
                        <Typography gutterBottom variant="h6" align="center">.</Typography>
                    </Skeleton>
                ) : (
                        <Typography gutterBottom variant="h4" align="center">
                            {result ? (temperature === "C" ? result.Temperature.Metric.Value : result.Temperature.Imperial.Value) : ''} {' '}
                            {result ? (temperature === "C" ? result.Temperature.Metric.Unit : result.Temperature.Imperial.Unit) : ''}
                        </Typography>
                    )}

                {(loading || errorMessage) ? (
                    <Skeleton width="100%" style={{ alignSelf: 'center' }}>
                        <Typography gutterBottom variant="h6" align="center">.</Typography>
                    </Skeleton>
                ) : (
                        <Typography variant="h5" align="center">
                            {result ? result.WeatherText : ''}
                        </Typography>

                    )}

            </div>



            <SnackBar open={openSnack} success={false} duration={2000} handleClose={() => setOpenSnack(false)} message={errorMessage} />

        </div>
    );
}



export default (WeatherCard);