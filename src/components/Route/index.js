import React from "react";


import { Switch, Route } from 'react-router-dom';

//screens
import WeatherScreen from '../../screens/WeaterScreen';
import FavoriteScreen from '../../screens/FavoriteScreen';
import { Typography } from "@material-ui/core";


const MainRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={WeatherScreen} />
            <Route exact path='/favorite' component={FavoriteScreen} />
            <Route component={NotFound} />
        </Switch>
    );
}

const NotFound = () => (
    <div style={{ marginTop: 70 }}>
       <Typography align="center" variant="h4" color="error">
           404 not found ... 
       </Typography>
    </div>
);




export {
    MainRoute
}