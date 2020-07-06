import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import useWindowDimensions from '../../hooks/useWindowsDimention';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


import DrawerContent from './DrawerContent';


import NabBar from './NavBar';

import {
    NavLink
} from "react-router-dom";


//redux
import { connect } from 'react-redux';
import {
    
} from '../../store/actions';


import {
    NavLinkOption
} from '../Route';

import { Context as ContextNavigation } from '../../contexts/navigationContext';


const useStyles = makeStyles((theme) => ({
    content: {
        overflow: 'auto',
        height: props => ((props.height) - 48) / 2,
        border: 'solid',
        borderWidth: 1
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
}));


const HeaderComponent = (props) => {
    const { width, height } = useWindowDimensions();
    const classes = useStyles({
        width,
        height
    });
    const {
        state: { open, openCollspseMenu },
        setOpen,
        setOpenCollspseMenu
    } = React.useContext(ContextNavigation);

    const signOut = () => {
        console.log('signOut');
    }


    const toggleDrawer = (isOpen) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(isOpen)
    };



    return (
        <>
            <NabBar />
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <DrawerContent toggleDrawer={() => setOpen(false)} isAuth={props.isAuth} signOut={signOut} openCollspseMenu={openCollspseMenu} setOpenCollspseMenu={setOpenCollspseMenu} />
            </SwipeableDrawer>
        </>
    )
}




export default HeaderComponent;
