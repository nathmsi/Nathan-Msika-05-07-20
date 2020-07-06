import React from 'react';
import Switch from '@material-ui/core/Switch';

import FormControlLabel from '@material-ui/core/FormControlLabel';

//redux
import { Context } from '../../contexts/themeContext';
import { Button } from '@material-ui/core';
import useMyLocalisation from '../../hooks/useMyLocalisation';


export default function Switches(props) {



    const {
        getMyLocation
    } = useMyLocalisation();

    const handlegetWetherPosition = () => {
        getMyLocation();
    }


    return (
        <div>
            <Button
            style={{ textTransform: 'none'}}
            onClick={handlegetWetherPosition}
            >
                Weather in my position
            </Button>
        </div>
    );
}
