import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';


// snackbar
import SnackBar from '../SnackBar/SnackBar';

// redux
import { useSelector, useDispatch } from 'react-redux';
import {
    searchOnChange,
    SelctedCountry
} from '../../store/actions';

import useSeachCity from '../../hooks/useSeachCity';

const useStyles = makeStyles((theme) => ({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
            marginTop: 20
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
    }
}));


export default function CountrySelect() {
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');
    const [openSnack, setOpenSnack] = React.useState(false);


    const dispatch = useDispatch();

    let timeout = null;

    // const {
    //    // searchOnChange,
    //     loading,
    //     errorMessage,
    //     success,
    //     autoComplateSearch
    // } = useSeachCity();

    const {
        errorMessage,
        autoComplateSearch
    } = useSelector(state => state.search);

    const {
        selectedValue,
        weatherSelected
    } = useSelector(state => state.weather);




    const handleSelectCountry = (result) => {
        if (result) {
            dispatch(SelctedCountry({
                Key: result.Key,
                LocalizedName: result.LocalizedName
            }))
        }
    }

    const handleSeacheChange = (value) => {
        setSearchValue(value);
        // if (timeout) clearTimeout(timeout);
        // timeout = setTimeout(() => {
        //     if (/^[a-zA-Z0-9_ ]*$/.test(value) || value === '') {  // accept only letter English only number and  space between word      
        //         if (!value.indexOf(searchValue) > -1) {
        //             //searchOnChange(value)
        //         }
        //     }
        // }, 900);
        if (value !== '' && searchValue !== value) {
            if (!value.indexOf(searchValue) > -1) {
                dispatch(searchOnChange(value));
            }
        }

    };



    React.useEffect(() => {
        handleSelectCountry(selectedValue)
    }, []);


    React.useEffect(() => {
        if (errorMessage) {
            setOpenSnack(true);
        } else {
            setOpenSnack(false);
        }
    }, [errorMessage]);





    return (
        <div className={classes.content}>
            <Autocomplete
                value={selectedValue}
                onChange={(event, newValue) => {
                    handleSelectCountry(newValue);
                }}
                inputValue={searchValue}
                onInputChange={(event, newInputValue) => {
                    handleSeacheChange(newInputValue);
                }}
                getOptionSelected={(option, value) => option.LocalizedName === value.LocalizedName}
                style={{ width: 250 }}
                options={autoComplateSearch}
                classes={{
                    option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option.LocalizedName}
                renderOption={(option) => (
                    <React.Fragment>
                        {option.LocalizedName}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search a city"
                        variant="outlined"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        }}
                    />
                )}
            />
            <SnackBar open={openSnack} success={false} duration={2000} handleClose={() => setOpenSnack(false)} message={errorMessage} />
        </div>
    );
}