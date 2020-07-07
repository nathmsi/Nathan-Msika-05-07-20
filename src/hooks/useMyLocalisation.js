import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const apikey = process.env.REACT_APP_API_KEY //'hwvlCSyyDWPgwLiZXmEGDcluQ6td3kJW';

// redux
import { useDispatch } from 'react-redux';
import{
    SelctedCountry
} from '../store/actions';

export default () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSucces] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const dispatch = useDispatch();


    const [state, setState] = useState({
        latitude: '',
        longitude: '',
        isLocalize: false
    })

    // get the current weather by key
    const getLoacalizeWeather = async (latitude,longitude) => {
        try {
            let path = `/locations/v1/cities/geoposition/search?apikey=${apikey}&q=${latitude}%2C${longitude}`
            const response = await yelp.get(path)
            if (response.data) {
                console.log(response.data);
                dispatch(SelctedCountry({
                    Key: response.data.Key? response.data.Key : 0, 
                    LocalizedName: response.data.LocalizedName? response.data.LocalizedName : ""
                }))
                setLoading(false);
                setSucces(true);
            } else {
                setErrorMessage('problem to get weather');
                setOpenSnack(true);
                setLoading(false);
            }
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            setErrorMessage('problem to get weather');
            setOpenSnack(true);
            setLoading(false);
        }
    }

    const getMyLocation = () => {
        setLoading(true);
        setState(false);
        setErrorMessage('');
        const location = window.navigator && window.navigator.geolocation
        //console.log(location);
        if (location) {
            location.getCurrentPosition((position) => {
                setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    isLocalize: true
                })
                getLoacalizeWeather(position.coords.latitude,position.coords.longitude);
            }, (error) => {
                setState({ latitude: 'err-latitude', longitude: 'err-longitude', isLocalize: false });
                setLoading(false);
                setErrorMessage('You need to accept to loacalize your position');
                setOpenSnack(true);
            })
        }
    }

    useEffect(() => {
        //getMyLocation();
    }, []);

    console.log(state);


    return {
        loading,
        errorMessage,
        getMyLocation,
        setOpenSnack,
        openSnack,
        success
    };
}