import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import FavoriteView from './FavoritesView';

import useWindowsDimention from '../../hooks/useWindowsDimention';


const useStyles = makeStyles((theme) => ({
    content: {
    },
    item: {
        display: 'flex',
    }
}));


export default function TitlebarGridList(props) {
    const classes = useStyles();

    const {
        width
    } = useWindowsDimention();

    const {
        favorites
    } = props;

    return (
        <Grid
            container
            spacing={2}
        >
            {favorites.map(favorite => (
                <Grid item xs={(width < 900 ? (width < 600 ? 12 : 6) : 4)} key={favorite.Key} className={classes.item} >
                    <FavoriteView favorite={favorite} />
                </Grid>
            ))}
        </Grid>
    );
}

