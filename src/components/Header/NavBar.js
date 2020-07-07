import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import PersonIcon from '@material-ui/icons/Person';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import {
    TextField,
    useTheme,
    InputAdornment,
} from '@material-ui/core';

import { Context as ContextNavigation } from '../../contexts/navigationContext';
import { Context as ThemeContext } from '../../contexts/themeContext';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import {
    NavLink
} from "react-router-dom";


import useWindowDimensions from "../../hooks/useWindowsDimention";

import { useLocation, useHistory } from 'react-router-dom'

import CloudIcon from '@material-ui/icons/Cloud';
import SelectTemperature from './SelectTemperature';
import SelectDarkMode from './SelectDarkMode';


// redux
import { useSelector } from 'react-redux'

import { Button } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        marginRight: 8
    },
    input: {
        backgroundColor: theme.palette.background.default,
        width: 140,
    },
    inputStyle: {
        display: props => props.width < 600 ? 'none' : 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'nowrap',
        borderRadius: 8,
        backgroundColor: theme.palette.background.default,
        paddingLeft: theme.spacing(2),
    },
    iconButton: {
        marginLeft: 5,
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
        color: theme.palette.secondary.main,
    },
    iconSunny: {
        color: '#fcd21c',
        animation: `$myEffect 6000ms infinite  ${theme.transitions.easing.easeInOut}`
    },
    "@keyframes myEffect": {
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(359deg)"
        }
      },
}));

function NavBar(props) {
    const history = useHistory();
    const location = useLocation();

    const {
        width
    } = useWindowDimensions();
    const classes = useStyles({ width });

    const [openSearch, setOpenSearch] = React.useState(true);
    const {
        state: { },
        setOpen,
    } = React.useContext(ContextNavigation);


    const {
        state: {
            theme
        }
    } = React.useContext(ThemeContext);;


    const {
        favorites
    } = useSelector(state => state.favorites);



    const handleTitleClicked = () => {
        if (location.pathname !== '/') {
            history.push('/');
        }
    }

    const goToFavoriteScreen = () => {
        if (location.pathname !== '/favorite') {
            history.push('/favorite');
        }
    }

    return (
        <div className={classes.grow}>
            <AppBar
                position="fixed"
                color="secondary"
                style={{
                    opacity: 1
                }}
            >
                <Toolbar variant="dense" color="secondary">


                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    {
                        width > 400 ?
                            <Button onClick={handleTitleClicked} style={{ textTransform: 'none' }} color="inherit"  >
                                <Typography className={classes.title} align="center" color="inherit" >
                                    {"Weather"}
                                </Typography>
                                { theme.palette.type === 'dark'?  <CloudIcon /> : <WbSunnyIcon  className={classes.iconSunny} /> }
                            </Button>
                            : null
                    }


                    <div className={classes.grow} />


                    <SelectDarkMode />


                    <Tooltip title="My Favorites">
                        <Button
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => goToFavoriteScreen()}
                            className={classes.iconButton}
                            style={{ textTransform: 'none' }}
                        >
                            <Typography style={{ marginRight: 5 }}>
                                Favorites
                            </Typography>
                            <Badge
                                badgeContent={
                                    <Typography>
                                        {favorites ? favorites.length : 0}
                                    </Typography>
                                } color="secondary"  >
                                <FavoriteIcon color="inherit" style={{ color: 'red' }} />
                            </Badge>
                        </Button>
                    </Tooltip>


                </Toolbar>
            </AppBar>
        </div>
    );
}


export default (NavBar);