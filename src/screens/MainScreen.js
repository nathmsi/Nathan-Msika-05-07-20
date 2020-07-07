import React from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import Header from '../components/Header'
import { makeStyles } from '@material-ui/core/styles';

// initsialization logic theme
import useInitializeTheme from '../hooks/useInitializeTheme';

// Route
import {
    MainRoute
} from '../components/Route'

// Context Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const MainScreen = (props) => {
     
    const { theme  } = useInitializeTheme();  // initialization theme from local storage and temperature 

    return (
            <MuiThemeProvider theme={createMuiTheme(theme.state.theme)}>
                <CssBaseline />
                <Header isAuth={true} />
                <MainRoute />
            </MuiThemeProvider>
    );
}




export default MainScreen;
