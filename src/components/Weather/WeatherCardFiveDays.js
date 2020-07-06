import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';

import Tooltip from '@material-ui/core/Tooltip';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";

import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import SnackBar from '../SnackBar/SnackBar';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Container } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


import WeatherCurrent from './WeatherCurrent';

// hooks
import useWindowDimention from '../../hooks/useWindowsDimention';
import use5daysWeather from '../../hooks/use5daysWeather';

// redux
import { useDispatch, useSelector } from 'react-redux'
import {
    addToFavorite
} from '../../store/actions';

import Zoom from '@material-ui/core/Zoom';



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
            }else{
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
                <Card  >
                    <CardContent>
                        <WeatherCurrent selectedCountry={selectedCountry} isLiked={isLiked} addToFavorite={(obj)=> dispatch(addToFavorite(obj))} />
                        <div className={classes.fiveWeather}>
                            <FiveWeather selectedCountry={selectedCountry} />
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}



export default (WeatherCard);