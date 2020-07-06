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



import Zoom from '@material-ui/core/Zoom';




const useStyles = makeStyles((theme) => ({
    root: {
        //width: 300,
        flexGrow: 1,
        margin: 0
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


function ImgMediaCard(props) {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <div className={classes.temperature}>

                                <Skeleton variant="circle" className={classes.avatar} />
                                <Skeleton width="30%" align="center" style={{ alignSelf: 'center' }}>
                                    <Typography gutterBottom variant="h5" align="center">.</Typography>
                                </Skeleton>
                                <Skeleton width="50%" align="center" style={{ alignSelf: 'center' }}>
                                    <Typography gutterBottom variant="h6" align="center">{"- "}</Typography>
                                </Skeleton>
                                <Skeleton width="50%" align="center" style={{ alignSelf: 'center' }}>
                                    <Typography gutterBottom variant="h6" align="center">{"+ "} </Typography>
                                </Skeleton>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
    );
}



export default (ImgMediaCard);