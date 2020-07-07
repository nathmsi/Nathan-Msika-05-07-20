import React, { Component } from 'react'
import { connect } from 'react-redux'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import PaletteIcon from '@material-ui/icons/Palette';

import CloseIcon from '@material-ui/icons/Close';
import SwitchDarkMode from './SwitchDarkMode';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import MapIcon from '@material-ui/icons/Map';



import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import {
    NavLink,
    useLocation,
    useHistory
} from "react-router-dom";
import { Typography } from '@material-ui/core';

import SelectTemperature from './SelectTemperature';
import FindLocalisationWeather from './FindLocalisationWeather';

// redux
import { useSelector, useDispatch } from 'react-redux'

// use dimenssions
import useWindowDimensions from '../../hooks/useWindowsDimention';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    headerClose: {
        paddingBottom: 0,
        paddingTop: 0
    },
    iconButon: {
    },
    navLink: {
        // color: theme.palette.secondary.main
    },
    navLinkActive: {
        //color: theme.palette.secondary.main,
        backgroundColor: theme.palette.action.hover
    },
    titleDrawer: {
        // color: theme.palette.secondary.main,
        fontSize: 28
    },
    titleStyle: {
        padding: 0
    },
    categoriesList: {
        margin: 5,
        maxHeight: props => props.height - 520 ,
        overflow: 'auto'
    }
}));


const ListElementHeader = (props) => {
    const { height } = useWindowDimensions();
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles({ height });
    const dispatch = useDispatch();
    let { pathname } = useLocation();
    const {
        toggleDrawer,
    } = props;


    const handleTitleClicked = () => {
        if (pathname !== '/') {
            history.push('/');
            toggleDrawer();
        }
    }



    

    return (
        <div
            className={classes.list}
        >
            <div>
                <List className={classes.titleStyle}>
                    <ListItem className={classes.titleDrawer} >
                        <ListItemIcon >
                            <IconButton
                                color="inherit"
                                onClick={toggleDrawer}
                            >
                                <CloseIcon />
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText>
                            <Button onClick={handleTitleClicked} style={{ textTransform: 'none' }}>
                                <Typography
                                    variant="h6"
                                    color="inherit"
                                    style={{
                                    }}
                                >
                                    {'Weather'}
                                </Typography>
                            </Button>
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem onClick={toggleDrawer} button component={NavLink} to="/" className={(pathname === '/') ? classes.navLinkActive : classes.navLink} >
                        <ListItemIcon> <HomeIcon color="inherit" /></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem onClick={toggleDrawer} button component={NavLink} to="/favorite" className={(pathname === '/favorite') ? classes.navLinkActive : classes.navLink} >
                        <ListItemIcon> <PermContactCalendarIcon color="inherit" /></ListItemIcon>
                        <ListItemText primary={'My Favorites'} />
                    </ListItem>
                </List>

                <Divider />

               
            </div>
            <div className={classes.footerfixed}>
                <Divider />
                <List>
                <ListItem className={classes.navLink}  >
                        <ListItemIcon> <MapIcon /></ListItemIcon>
                        <FindLocalisationWeather />
                    </ListItem>
                    <ListItem className={classes.navLink} >
                        <ListItemIcon> <WbSunnyIcon /></ListItemIcon>
                        <SelectTemperature />
                    </ListItem>
                    <ListItem className={classes.navLink} button >
                        <ListItemIcon> <PaletteIcon /></ListItemIcon>
                        <SwitchDarkMode darkMode={'Dark Mode'} />
                    </ListItem>
                </List>
            </div>


        </div>
    );
};




export default (ListElementHeader);
