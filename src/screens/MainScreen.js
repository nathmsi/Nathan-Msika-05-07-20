import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from '../components/Header'

// initsialization logic theme
import useInitializeTheme from '../hooks/useInitializeTheme';

// Route
import {
    MainRoute
} from '../components/Route'

// Context Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const MainScreen = (props) => {

    const { theme } = useInitializeTheme();

    return (
        <MuiThemeProvider theme={createMuiTheme(theme.state.theme)}>
            <CssBaseline />
            <Header isAuth={true} />
            <MainRoute />
        </MuiThemeProvider>
    );
}




export default MainScreen;
