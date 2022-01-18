import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField } from '@material-ui/core';
import validate, { async } from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import Link from 'next/link';
import { getPatientLogin } from '../../../../components/helper/PatientApi';
import AlertMassage from '../../../../components/helper/AlertMessage';
import Router from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  mobile: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 10,
      message: 'must be 10 digit',
      minimum: 10,
      message: 'must be 10 digit',
    },
  },
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const [subming, setSubiting] = React.useState(false);
  const [status, setStatusBase] = React.useState('');

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (formState.isValid) {
      var data = JSON.stringify({ mobile: formState.values.mobile });

      const res = await getPatientLogin(data);
      if (res.success) {
        setStatusBase('');
        setStatusBase({
          key: 22,
          status: 'success',
          msg: 'Check your mobile for the OTP',
        });
        Router.push(`/signin-otp?mob=${formState.values.mobile}`, undefined, {
          shallow: true,
        });
      } else {
        setStatusBase('');
        setStatusBase({
          key: 22,
          status: 'error',
          msg: res.message,
        });
      }
      console.log('res', res);
      setSubiting(false);
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors,
      },
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      {status ? (
        <AlertMassage
          key={status.key}
          message={status.msg}
          status={status.status}
        />
      ) : null}
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="Mobile"
              label="Mobile *"
              variant="outlined"
              size="medium"
              name="mobile"
              onInput={e => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
              }}
              fullWidth
              helperText={
                hasError('mobile') ? formState.errors.mobile[0] : null
              }
              error={hasError('mobile')}
              onChange={handleChange}
              type="number"
              value={formState.values.mobile || ''}
            />
          </Grid>

          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">
                Fields that are marked with * sign are required.
              </Typography>
            </i>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
