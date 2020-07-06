import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function PositionedSnackbar(props) {

    const {
        open,
        message,
        success,
        handleClose,
        duration
    } = props;


    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={handleClose}
            autoHideDuration={duration? duration : 3000}
        >
            <Alert onClose={handleClose} severity={success ? 'info' : 'error'}>
                {message}
            </Alert>
        </Snackbar>
    );
}
