import { useState , useContext } from 'react';

// axios api
import yelp from '../api/yelp';

const apikey = process.env.REACT_APP_API_KEY  //;


export default () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [result, setResult] = useState(null);


    // get the current weather by key
    const getCurrentWeather = async (myKey) => {
        try {
            setLoading(true);
            setResult(null);
            setErrorMessage('');
            let path = `/currentconditions/v1/${myKey}?apikey=${apikey}`
            const response = await yelp.get(path)
            if (response.data) {
                console.log(response.data[0]);
                setResult(response.data[0]);
                setSuccess(true);
            } else {
                setSuccess(false);
                setResult(null);
                setErrorMessage('problem to load weather');
            }
             setLoading(false);
        }
        catch (error) {
            console.log(error);
            setResult(null);
            setLoading(false);
            setErrorMessage('problem to load weather');
        }
    }

    return {
        getCurrentWeather,
        loading,
        errorMessage,
        success,
        result
    };
}




// default value selected 
const WATERSELECTED = {
        "LocalObservationDateTime": "2020-07-05T17:41:00+03:00",
        "EpochTime": 1593960060,
        "WeatherText": "Sunny",
        "WeatherIcon": 1,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
            "Metric": {
                "Value": 28.9,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 84.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    };
