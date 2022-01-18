import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  Box,
  Link as Nv,
} from '@material-ui/core';
import validate from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import {
  getPatientLoginOtpVerification,
  resendOtpRequest,
} from '../../../../components/helper/PatientApi';
import AlertMassage from '../../../../components/helper/AlertMessage';
import Router from 'next/router';
import Encodr from 'encodr';
import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const schema = {
  otp: {
    presence: { allowEmpty: false, message: 'is required' },
    // otp: true,
    length: {
      maximum: 6,
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
  const [mobile, setMobile] = React.useState();
  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));

    // for for mobile number
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('mob');
    setMobile(myParam);
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
      var data = JSON.stringify({
        mobile: mobile,
        vtype: 'login_otp',
        otp: formState.values.otp,
      });

      const res = await getPatientLoginOtpVerification(data);
      if (res.success) {
        setStatusBase('');
        setStatusBase({
          key: 22,
          status: 'success',
          msg: 'Your mobile number is verified!',
        });
        Router.push(`/`, undefined, { shallow: true });

        const JSON = new Encodr('json');
        var enData = JSON.encode(res.access_token);
        Cookies.set('token', enData);
        Cookies.set('title', res.user.title);
        Cookies.set('first_name', res.user.first_name);
        Cookies.set('middle_name', res.user.middle_name);
        Cookies.set('last_name', res.user.last_name);

        Cookies.set('avatar', res.user.avatar);
        Cookies.set('email', res.user.email);
        Cookies.set('mobile', res.user.mobile);
        Cookies.set('gender', res.user.gender);
        Cookies.set('dob', res.user.dob);
        Cookies.set('age', res.user.age);
        Cookies.set('height', res.user.height);
        Cookies.set('weight', res.user.weight);
        Cookies.set('blood_group_id', res.user.blood_group_id);
        Cookies.set(
          'profile_completion_progress',
          res.user.profile_completion_progress,
        );
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

  const [subming, setSubiting] = React.useState(false);
  const [status, setStatusBase] = React.useState('');

  // Code for Resend OTP Starts here

  const handleStart = async () => {
    const res = await resendOtpRequest();
    if (res.success) {
      setStatusBase('');
      setStatusBase({
        key: 22,
        status: 'success',
        msg: 'OTP Resend Successfully',
      });
    }
    setStatus(STATUS.STARTED);
    setSecondsRemaining(INITIAL_COUNT);
  };

  const STATUS = {
    STARTED: 'Started',
    STOPPED: (
      <Typography variant="subtitle1" color="textSecondary" align="center">
        Didn't recieve code ?
        <LearnMoreLink title="Resent OTP" onClick={handleStart} />
      </Typography>
    ),
  };

  const INITIAL_COUNT = 10;
  const twoDigits = num => String(num).padStart(2, '0');
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [statuss, setStatus] = useState(STATUS.STOPPED);
  const [appear, setAppear] = useState(true);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  // const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    statuss === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

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
              placeholder="Enter Mobile OTP"
              label="OTP *"
              variant="outlined"
              size="medium"
              name="otp"
              fullWidth
              helperText={hasError('otp') ? formState.errors.otp[0] : null}
              error={hasError('otp')}
              onChange={handleChange}
              type="number"
              value={formState.values.otp || ''}
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
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            {statuss == STATUS.STARTED ? (
              <Box mt={0}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  align="center"
                  className="timer"
                >
                  {' '}
                  Resend OTP in <i class="far fa-clock"></i>{' '}
                  <span style={{ color: 'green', fontWeight: 'bold' }}>
                    {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
                  </span>{' '}
                </Typography>
              </Box>
            ) : (
              statuss
            )}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
