import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  Button,
  TextField,
  MenuItem,
  LinearProgress,
} from '@material-ui/core';
import validate from 'validate.js';
import { LearnMoreLink } from 'components/atoms';
import Link from 'next/link';
import { getPatientRegister } from '../../../../components/helper/PatientApi';
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
      maximum: 300,
    },
  },
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 120,
    },
  },
  title: {
    presence: { allowEmpty: false, message: 'is required' },
  },
};

const Form = () => {
  const classes = useStyles();

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
    title: {
      presence: { allowEmpty: false, message: 'is required' },
    },
    firstName: {
      presence: { allowEmpty: false, message: 'is required' },
    },
    lastName: {
      presence: { allowEmpty: false, message: 'is required' },
    },
  };

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const [subming, setSubiting] = React.useState(false);
  const [status, setStatusBase] = React.useState('');
  const [progress, setProgress] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [clearform, setClearform] = React.useState('');
  const [submitbtn, setSubmitbtn] = React.useState(false);
  const timer = React.useRef(); // For calling timer on Progressbar

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
    setSubiting(false);
    setDisable(event.target.value === '');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setSubiting(true);
    if (formState.isValid) {
      // Code for Progressbar timer
      if (!progress) {
        setProgress(<LinearProgress />);
        timer.current = setTimeout(() => {
          setProgress(false);
        }, 1000);
      }
      // Ends here

      var data = JSON.stringify({
        title: formState.values.title,
        first_name: formState.values.firstName,
        middle_name: '',
        last_name: formState.values.lastName,
        mobile: formState.values.mobile,
        email: formState.values.email,
      });

      const res = await getPatientRegister(data);
      if (res.success) {
        //  setClearform(formState.values.title='',formState.values.firstName='',formState.values.lastName='',formState.values.mobile='',formState.values.email='',)
        //  setSubmitbtn(true)
        setStatusBase('');
        setStatusBase({
          key: 22,
          status: 'success',
          msg: 'Account has been created successfully.',
        });
        setTimeout(() => {
          Router.push('/signin');
        }, 3000);
      } else {
        // setStatusBase('');
        // // console.log('hello error else');
        // setStatusBase({
        //   key: 22,
        //   status: 'error',
        //   msg:res.message,
        // });

        setStatusBase('');
        setStatusBase({
          key: 22,
          status: 'error',

          msg: res.errors.email
            ? res.errors.email
            : '' + res.errors.mobile
            ? ' ' + res.errors.mobile
            : '',
        });
      }

      // console.log('res', res);
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
  // console.log('api Url', process.env.NEXT_PUBLIC_PATIENT_API_URL);
  return (
    <div className={classes.root} className="formContainerMain">
      {status ? (
        <AlertMassage
          key={status.key}
          message={status.msg}
          status={status.status}
        />
      ) : null}
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              // placeholder="Firs"
              label="Title *"
              variant="outlined"
              size="medium"
              name="title"
              fullWidth
              select
              helperText={hasError('title') ? formState.errors.title[0] : null}
              error={hasError('title')}
              onChange={handleChange}
              // type="title"
              value={formState.values.title || ''}
            >
              <MenuItem value="Mr.">Mr.</MenuItem>
              <MenuItem value="Mrs.">Mrs.</MenuItem>
              <MenuItem value="Dr.">Dr.</MenuItem>
              <MenuItem value="Mr">Dr(Mrs)</MenuItem>
            </TextField>
          </Grid>
          {/* <Grid item xs={1}></Grid> */}

          <Grid item xs={8}>
            <TextField
              placeholder="First name"
              label="First name *"
              variant="outlined"
              size="medium"
              name="firstName"
              fullWidth
              helperText={
                hasError('firstName') ? formState.errors.firstName[0] : null
              }
              error={hasError('firstName')}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Last name"
              label="Last name *"
              variant="outlined"
              size="medium"
              name="lastName"
              fullWidth
              helperText={
                hasError('lastName') ? formState.errors.lastName[0] : null
              }
              error={hasError('lastName')}
              onChange={handleChange}
              type="lastName"
              value={formState.values.lastName || ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="eg. 9876543210"
              label="Mobile Number *"
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
          {/* <Grid item xs={12}>
            <TextField
              placeholder="Email"
              label="Email"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError('email') ? formState.errors.email[0] : null}
              error={hasError('email')}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ''}
            />
          </Grid> */}
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              disabled={disable}
              fullWidth
            >
              {' '}
              Submit{' '}
            </Button>
            {progress !== false ? <LinearProgress /> : null}
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
              className="Privacy_policy_tag"
            >
              By signing up you agree to the <Link href="#">Terms & Conditions</Link>{' '}
              and our <Link href="#">Privacy Policy</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
              className="have_an_account"
            >
              Have an account ?
              <Link href="/signin">
               <LearnMoreLink title="Login" />
                
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
