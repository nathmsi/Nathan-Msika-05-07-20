import React from 'react'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerContent from './DrawerContent';
import NabBar from './NavBar';


import { Context as ContextNavigation } from '../../contexts/navigationContext';



const HeaderComponent = () => {
    const {
        state: { open, openCollspseMenu },
        setOpen,
        setOpenCollspseMenu
    } = React.useContext(ContextNavigation);



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
                <DrawerContent toggleDrawer={() => setOpen(false)}  openCollspseMenu={openCollspseMenu} setOpenCollspseMenu={setOpenCollspseMenu} />
            </SwipeableDrawer>
        </>
    )
}




export default HeaderComponent;
