import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    TextField, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18)
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined;


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(1),
            width: '100%',
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const renderField = ({ classes, input, label, type, meta: { touched, error, warning } }) => (
    <div className={classes.root} >
        <TextField
            error={(touched && ( error || warning ) ) ? true : false}
            type={type}
            fullWidth
            placeholder={label}
            margin="normal"
            helperText={(touched && error) ? error : '' || (touched && warning) ? warning : ''  }
            inputProps={input}
            variant="outlined"
        />
    </div>
);

const FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    const classes = useStyles();

    return (
        <form onSubmit={() => console.log('handleSubmit')} className={classes.root}>
            <Field name="username" type="text"
                component={renderField} label="Username"
                validate={[required, maxLength15]}
                props={{ classes }}
            />
            <Field name="email" type="email"
                component={renderField} label="Email"
                validate={email}
                warn={aol}
                props={{ classes }}
            />
            <Field name="age" type="number"
                component={renderField} label="Age"
                validate={[required, number, minValue18]}
                warn={tooOld}
                props={{ classes }}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ textTransform: 'none' }}
                disabled={submitting}
            >
                {"Submit"}
            </Button>
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ textTransform: 'none' }}
                onClick={reset}
                disabled={pristine || submitting}
            >
                {"Clear Values"}
            </Button>
        </form>
    )
};

export default reduxForm({
    form: 'signInForm' // a unique identifier for this form
})(FieldLevelValidationForm);