import { useState , useEffect } from 'react';
import yelp from '../api/yelp';

const apikey = 'TmKFe7fbrlXsUY1XaWdPpbI94VaKbWrg';


export default () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [state,setState] = useState({
        latitude: '',
        longitude: '',
        isLocalize: false
    })



    const getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation
        console.log(location);
        if (location) {
            location.getCurrentPosition((position) => {
                setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    isLocalize: true
                })
            }, (error) => {
                setState({ latitude: 'err-latitude', longitude: 'err-longitude', isLocalize: false })
            })
        }

    }

    useEffect(() => {
        //getMyLocation();
    }, []);

    console.log(state);


    return {
        state,
        getMyLocation
    };
}