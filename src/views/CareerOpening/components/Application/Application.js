import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  LinearProgress,
} from '@material-ui/core';
import { IconText } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import AlertMassage from '../../../../components/helper/AlertMessage';
import MetaTitle from 'components/helper/MetaTitle';

const useStyles = makeStyles(theme => ({
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
  iconText: {
    fontWeight: 700,
    marginLeft: theme.spacing(2),
  },
  form: {
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  uploadButton: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid transparent',
    background: theme.palette.alternate.dark,
    textTransform: 'lowercase',
    '& .icon-text': {
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
}));

const Application = props => {
  const { api_data, className, ...rest } = props;
  // console.log('api', api_data);

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [status, setStatusBase] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  // console.log(status);

  return (
    <div className={className} {...rest}>
      <MetaTitle
        title={`${api_data.title} | OnlineAarogya}`}
        metaKeyWord="Jobs, OnlineAarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <SectionHeader
        title="Apply for this job"
        // subtitle="After 3 days all of your offers will arrive and you will have another 7 days to select your new company."
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
        id="apply"
      />
      <div className={classes.form}>
        {status ? (
          <AlertMassage
            key={status.key}
            message={status.msg}
            status={status.status}
          />
        ) : null}
        <Formik
          initialValues={{
            full_name: '',
            resume: '',
            email: '',
            massage: '',
            nid: api_data.nid,
            jobName: api_data.field_job_position,
          }}
          validationSchema={Yup.object().shape({
            full_name: Yup.string()
              .max(255)
              .required('full_name is required'),
            resume: Yup.string()
              .max(255)
              .required('resume is required'),
            email: Yup.string()
              .max(255)
              .required('email is required'),
          })}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            let data = new FormData();

            data.append('title', values.full_name);
            data.append('field_resume_c', values.resume);
            data.append('email', values.email);
            data.append('body', values.massage);
            data.append('field_applied_for_', values.nid);
            // console.log('dsds',values.resume);
            return fetch(
              `${process.env.NEXT_PUBLIC_DB_HOST}/api/post-contact`,
              {
                method: 'post',
                // mode: 'no-cors',
                // headers: new Headers({
                //   Accept: 'application/json',
                // }),
                body: data,
              },
            )
              .then(response => response.json())
              .then(result => {
                // console.log('Success:', result);
                // console.log(result);

                setStatusBase({
                  key: 22,
                  status: 'success',
                  msg:
                    'Your application for the' +
                    values.jobName +
                    'job has been successfully submitted.',
                });
                setSubmitting(false);
                resetForm(values);
              })
              .catch(error => {
                setStatusBase({
                  key: 22,
                  status: 'error',
                  msg: error,
                });
              });
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            touched,
            values,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Full name
                  </Typography>
                  <TextField
                    error={Boolean(touched.full_name && errors.full_name)}
                    fullWidth
                    helperText={touched.full_name && errors.full_name}
                    label="Enter your full name"
                    // margin="normal"
                    name="full_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.full_name}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    E-mail
                  </Typography>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Enter your email address"
                    name="email"
                    type="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={12} data-aos="fade-up">
                  <Button
                    variant="outlined"
                    component="label"
                    color="primary"
                    fullWidth
                    size="large"
                    className={classes.uploadButton}
                  >
                    <IconText
                      fontIconClass="fas fa-cloud-upload-alt"
                      color={theme.palette.primary.main}
                      title="Upload CV"
                      typographyProps={{
                        className: classes.iconText,
                      }}
                    />
                    <input
                      type="file"
                      name="file"
                      onChange={event => {
                        setFieldValue('resume', event.target.files[0]);
                        setFileName(event.target.files[0].name);
                      }}
                      style={{ display: 'none' }}
                    />
                    <span style={{ marginLeft: '10px' }}>{fileName}</span>
                  </Button>
                </Grid>

                <Grid item xs={12} data-aos="fade-up">
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    className={classes.inputTitle}
                  >
                    Message
                  </Typography>
                  <TextField
                    error={Boolean(touched.massage && errors.massage)}
                    fullWidth
                    helperText={touched.massage && errors.massage}
                    label="Message..."
                    name="massage"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.massage}
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Box my={2} ml={1.4}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    // onClick={e => resetForm()}
                  >
                    Apply Now
                  </Button>
                  {isSubmitting && <LinearProgress />}
                </Box>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

Application.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Application;
