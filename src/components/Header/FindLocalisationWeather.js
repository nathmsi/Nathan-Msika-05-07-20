import React from 'react';
import Switch from '@material-ui/core/Switch';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';

import SnackBar from '../SnackBar/SnackBar';

//redux
import { Context } from '../../contexts/themeContext';
import { Button } from '@material-ui/core';
import useMyLocalisation from '../../hooks/useMyLocalisation';

// Context NAvigation
import { Context as ContextNavigation } from '../../contexts/navigationContext';


export default function Switches(props) {

    const {
        setOpen
    } = React.useContext(ContextNavigation);


    const {
        getMyLocation,
        loading,
        errorMessage,
        openSnack,
        setOpenSnack,
        success
    } = useMyLocalisation();

    const handlegetWetherPosition = () => {
        getMyLocation();
    }

    React.useEffect(() => {
        if (success) {
            setOpen(false);
        }
    }, [success]);



    return (
        <div>
            <Button
                style={{ textTransform: 'none' }}
                onClick={handlegetWetherPosition}
            >
                Weather in my position
                {loading && <CircularProgress />}
            </Button>
            <SnackBar open={openSnack} success={false} duration={2000} handleClose={() => setOpenSnack(false)} message={errorMessage} />
        </div>
    );
}
