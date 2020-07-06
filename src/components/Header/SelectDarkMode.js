import React from 'react';
import Switch from '@material-ui/core/Switch';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import {
    IconButton,
    Tooltip,
} from '@material-ui/core';


//redux
import { Context } from '../../contexts/themeContext';



export default function Switches(props) {
    const [state, setState] = React.useState(false);
    const themeColor = React.useContext(Context);

    const handleChange = (event) => {
        toogleDarkMode(!state);
        setState(event.target.checked);
    };

    const {
        toogleDarkMode,
        state: {
            theme
        }
    } = themeColor;

    React.useEffect(() => {
        // const lastTheme = localStorage.getItem('theme');
        if (theme.palette.type === 'dark') {
            setState(true);
        } else {
            setState(false);
        }
        // console.log(theme.palette.type);
    }, []);


    return (
        <div>
            <Tooltip title={theme.palette.type === 'dark'? 'ligth mode' : 'dark mode'}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => toogleDarkMode(theme.palette.type !== 'dark')}
                    style={{ textTransform: 'none' }}
                >
                    {
                        theme.palette.type === 'dark' ?
                            <Brightness4Icon /> :
                            <Brightness4OutlinedIcon />
                    }
                </IconButton>
            </Tooltip>

        </div>
    );
}
