import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {
    Container,
    Grow
} from '@material-ui/core';


import WeatherCurrent from './WeatherCurrent';

// redux
import { useDispatch, useSelector } from 'react-redux'
import {
    addToFavorite
} from '../../store/actions';



import FiveWeather from './FiveWeatherComponent';


const useStyles = makeStyles((theme) => ({
    content: {
        //width: 300,
        marginTop: 20,
        marginBottom: 20
    },
    rootDialog: {
        // width: props => props.width * (9 / 10),
    },
    img: {
        objectFit: 'contain'
    },
    grow: {
        flexGrow: 1
    },
    titleView: {
        display: 'flex',
        alignItems: 'center'
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    contentCard: {
        display: 'flex',
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        alignSelf: 'center'
    },
    card: {
       // backgroundImage: `url(${Background})`
    }
}));



function WeatherCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();

    const {
        selectedCountry
    } = useSelector(state => state.weather);

    const {
        favorites
    } = useSelector(state => state.favorites);



    React.useEffect(() => {
        if (selectedCountry) {
            const found = favorites.some(el => el.Key === selectedCountry.Key);
            if (found) {
                setIsLiked(true);
            } else {
                setIsLiked(false);
            }
        }
    }, [selectedCountry]);

    React.useEffect(() => {
        if (selectedCountry) {
            const found = favorites.some(el => el.Key === selectedCountry.Key);
            if (found) {
                setIsLiked(true);
            } else {
                setIsLiked(false);
            }
        }
    }, [favorites])





    return (
        <div className={classes.content}>
            <Container maxWidth="lg"  >
                <Grow in={true} timeout={1000}>
                    <Card  className={classes.card} >
                        <CardContent>
                            <WeatherCurrent selectedCountry={selectedCountry} isLiked={isLiked} addToFavorite={(obj) => dispatch(addToFavorite(obj))} />
                            <div className={classes.fiveWeather}>
                                <FiveWeather selectedCountry={selectedCountry} />
                            </div>
                        </CardContent>
                    </Card>
                </Grow>
            </Container>
        </div>
    );
}



export default (WeatherCard);