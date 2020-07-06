import { useState } from 'react';

// axios api
import yelp from '../api/yelp';

const apikey = 'TmKFe7fbrlXsUY1XaWdPpbI94VaKbWrgk';


export default () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [autoComplateSearch, setAutocompletValues] = useState([]);



    // function to search city
    const searchOnChange = async (value) => {
            try {
                if (value) {
                    setLoading(true);
                    setErrorMessage('');
                    let path = `/locations/v1/cities/autocomplete?apikey=${apikey}&q=${value}`
                    const response = await yelp.get(path);
                    if (response.data) {
                        setAutocompletValues(response.data);
                        setSuccess(true);
                    } else {
                        setErrorMessage('problem to search country');
                    }
                    setLoading(false);
                }
            }
            catch (error) {
                console.log(error);
                setLoading(false);
                setErrorMessage('problem to search country');
            }
    }

    return {
        searchOnChange,
        loading,
        errorMessage,
        success,
        autoComplateSearch
    };
}