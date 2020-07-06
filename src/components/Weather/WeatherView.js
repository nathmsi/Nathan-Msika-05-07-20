import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
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
        width: theme.spacing(10),
        height: theme.spacing(10),
        alignSelf: 'center'
    },
}));


function ImgMediaCard(props) {
    const classes = useStyles();

    const {
        dayly
    } = props;


    return (
        <Zoom in={true}>
            <div className={classes.root}>
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <div className={classes.temperature}>
                                <Avatar className={classes.avatar} align="center" src={`https://developer.accuweather.com/sites/default/files/${dayly.Day.Icon < 10 ? '0' : ''}${dayly.Day.Icon}-s.png`} />
                                <Typography variant="h5" align="center" style={{ marginBottom: 10 }}>
                                    {getCurrentDay(dayly.EpochDate)}
                                </Typography>
                                <Typography variant="h6" align="center">
                                    {"- "}  {dayly.Temperature.Minimum.Value} {dayly.Temperature.Minimum.Unit}
                                </Typography>
                                <Typography variant="h6" align="center">
                                    {"+ "}  {dayly.Temperature.Maximum.Value} {dayly.Temperature.Maximum.Unit}
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Zoom>
    );
}


const getCurrentDay = (timestamp) => {
    const a = new Date(timestamp * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[a.getDay()];
    return dayOfWeek;
}


export default (ImgMediaCard);