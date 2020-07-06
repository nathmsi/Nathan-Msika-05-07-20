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
    searchOnSelect,
    SelctedCountry
} from '../../store/actions';

import useSeachCountry from '../../hooks/useSeachCountry';

const useStyles = makeStyles((theme) => ({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
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

    const {
        searchOnChange,
        loading,
        errorMessage,
        success,
        autoComplateSearch
    } = useSeachCountry();

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
        if (/^[a-zA-Z]+(-[a-zA-Z]+)*$/.test(value) || value === '') {  // accept only letter English only
            setSearchValue(value);
            if (!value.indexOf(searchValue) > -1) {
                searchOnChange(value)
            }
        }
    }

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