import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Zoom from '@material-ui/core/Zoom';

// context Theme for temperature c or f
import { Context as ThemeContext } from '../../contexts/themeContext';

// snackbar
import SnackBar from '../SnackBar/SnackBar';

// redux
import { useSelector, useDispatch } from 'react-redux'

import {
    SelctedCountry,
    deleteOneFavorite
} from '../../store/actions';

import {
    NavLink,
    useLocation,
    useHistory
} from "react-router-dom";


import useCurrentWeather from '../../hooks/useCurrentWeather';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        //margin: 0
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
    temperature: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        alignSelf: 'center'
    },
}));


function FavoriteView(props) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
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

    const [openSnack, setOpenSnack] = React.useState(false);

    const {
        favorite
    } = props;

    React.useEffect(() => {
        getCurrentWeather(favorite.Key);
    }, []);

    React.useEffect(() => {
        if (errorMessage) {
            setOpenSnack(true);
        }
    }, [errorMessage]);

    const handleDelete = () => {
        dispatch(deleteOneFavorite(favorite.Key))
    }

    const handleFavoriteClicked = () => {
        dispatch(SelctedCountry({
            Key: favorite.Key,
            LocalizedName: favorite.LocalizedName
        }))
        history.push('/');
    }

    return (
        <Zoom in={true} timeout={800}>
            <Card className={classes.root}>
                <CardActionArea
                    onClick={() => handleFavoriteClicked()}
                >
                    <CardContent>
                        <div className={classes.temperature}>
                            <Typography variant="h3" align="center" >
                                {favorite.LocalizedName ? favorite.LocalizedName : ''}   {' '}
                            </Typography>
                            {(loading || !result) ?
                                <Skeleton variant="circle" className={classes.avatar} />
                                :
                                <Avatar className={classes.avatar} align="center" src={`https://developer.accuweather.com/sites/default/files/${result.WeatherIcon < 10 ? '0' : ''}${result.WeatherIcon}-s.png`} />
                            }
                            {(loading || !result) ? (
                                <Skeleton width="50%" align="center" style={{ alignSelf: 'center' }}>
                                    <Typography gutterBottom variant="h6" align="center">.</Typography>
                                </Skeleton>
                            ) : (
                                    <Typography gutterBottom variant="h6" align="center">
                                        {result ? (temperature === "C" ? result.Temperature.Metric.Value : result.Temperature.Imperial.Value) : ''} {' '}
                                        {result ? (temperature === "C" ? result.Temperature.Metric.Unit : result.Temperature.Imperial.Unit) : ''}
                                    </Typography>

                                )}
                            {(loading || !result) ? (
                                <Skeleton width="50%" align="center" style={{ alignSelf: 'center' }}>
                                    <Typography variant="h5" align="center">.</Typography>
                                </Skeleton>
                            ) : (
                                    <Typography variant="h5" align="center">
                                        {result ? result.WeatherText : ''}
                                    </Typography>

                                )}
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton
                        onClick={handleDelete}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </CardActions>
                <SnackBar open={openSnack} success={false} duration={2000} handleClose={() => setOpenSnack(false)} message={errorMessage} />
            </Card>
        </Zoom>
    );
}




export default (FavoriteView);