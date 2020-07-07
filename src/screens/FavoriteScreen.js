import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Container
} from '@material-ui/core';

import ListFavorites from '../components/Favorites/ListFavorites';

// redux
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    mainContent: {
        marginTop: 48 + 20,  // the navbar height + separation
    },
}));


const FavoritesScreen = () => {
    const classes = useStyles();
    const {
        favorites
    } = useSelector(state => state.favorites);



    return (
            <Container maxWidth="lg" className={classes.mainContent} >
                <ListFavorites favorites={favorites} />
            </Container>
    )
}



export default (FavoritesScreen);
