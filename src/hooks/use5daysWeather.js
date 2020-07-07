import { useState , useContext } from 'react';

// axios api
import yelp from '../api/yelp';

// theme context for the temperature if is C or F
import { Context as ThemeContext } from '../contexts/themeContext';
 
const apikey = process.env.REACT_APP_API_KEY  //'hwvlCSyyDWPgwLiZXmEGDcluQ6td3kJWL';

export default () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [result, setResult] = useState(null);

    const{
      state : {
        temperature
      }
    } = useContext(ThemeContext);

    // get from api 5 days weathe by key
    const get5daysWeather = async (Key) => {
        try {
            setLoading(true);
            setResult(null);
            setErrorMessage('');
             const path = `/forecasts/v1/daily/5day/${Key}?apikey=${apikey}&metric=${temperature === 'C'}`
            const response = await yelp.get(path)
            console.log(response.data);
            if (response.data) {
                setResult(response.data);
                setSuccess(true);
            } else {
                setSuccess(false);
                setErrorMessage('problem to load weather');
            }
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            setErrorMessage('problem to load weather');
        }
    }

    return {
        get5daysWeather,
        loading,
        errorMessage,
        success,
        result,
        temperature
    };
}



// default value for test
const RESULT = {
    "Headline": {
      "EffectiveDate": "2020-07-05T20:00:00+03:00",
      "EffectiveEpochDate": 1593968400,
      "Severity": 7,
      "Text": "Warm Sunday night",
      "Category": "heat",
      "EndDate": "2020-07-06T08:00:00+03:00",
      "EndEpochDate": 1594011600,
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2020-07-05T07:00:00+03:00",
        "EpochDate": 1593921600,
        "Temperature": {
          "Minimum": {
            "Value": 26.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-06T07:00:00+03:00",
        "EpochDate": 1594008000,
        "Temperature": {
          "Minimum": {
            "Value": 24.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-07T07:00:00+03:00",
        "EpochDate": 1594094400,
        "Temperature": {
          "Minimum": {
            "Value": 23.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.5,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-08T07:00:00+03:00",
        "EpochDate": 1594180800,
        "Temperature": {
          "Minimum": {
            "Value": 24.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-09T07:00:00+03:00",
        "EpochDate": 1594267200,
        "Temperature": {
          "Minimum": {
            "Value": 24.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 29.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
      }
    ]
  }