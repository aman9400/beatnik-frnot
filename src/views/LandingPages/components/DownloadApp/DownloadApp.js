import React from 'react';
import styles from './download.module.css';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  TextField,
  Box,
  Typography,
  Grid,
  Button,
  FormControl,
  InputAdornment,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  gridItem: {
    border: 0,
    [theme.breakpoints.up('sm')]: {
      borderRight: `1px solid ${colors.blueGrey[100]}`,
      '&:nth-child(2n)': {
        borderRight: 0,
      },
      '&:nth-child(-n+4)': {
        borderBottom: `1px solid ${colors.blueGrey[100]}`,
      },
    },
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${colors.blueGrey[100]}`,
      '&:nth-child(2n)': {
        borderRight: `1px solid ${colors.blueGrey[100]}`,
      },
      '&:nth-child(-n+4)': {
        borderBottom: 0,
      },
      '&:nth-child(3n)': {
        borderRight: 0,
      },
      '&:nth-child(-n+3)': {
        borderBottom: `1px solid ${colors.blueGrey[100]}`,
      },
    },
  },
  card_color: {
    borderRadius: '0px',
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: '10px',
    borderRadius: '8px',
  },
}));

const Appointment = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={styles.download_container} {...rest}>
      <Grid container spacing={isMd ? 4 : 2} justifyContent={'space-between'}>
        <Grid item xs={12} md={5} data-aos="fade-up">
          <div className={styles.download_img_holder}>
            <img src={process.env.NEXT_PUBLIC_BASE_URL + '/assets/app-download.png'}
              alt="Download the Online Aarogya App"/>
          </div>
        </Grid>

        <Grid item xs={12} md={6} data-aos="fade-up">
          <Typography variant="h2" className={styles.download_title}>
            Download the Online Aarogya App
          </Typography>

          <Box mt={2}>
            <Typography variant="body2" className={styles.download_sub_title}>
              Book consultation with the best of the Doctors of your choice.
              Also choose the mode of consultation Video or in Clinic walk in
            </Typography>
          </Box>

          <Box mt={4} mb={2}>
            <Typography>
              <b>Get the link to download the app</b>
            </Typography>
          </Box>

          <Box mt={2}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                label="Enter Mobile Number"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+ 91</InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </FormControl>
          </Box>
          <Box mt={2}>
            <Grid container justifyContent={isMd ? 'left' : 'center'}>
              <Button
                href="#contained-buttons"
                size="large"
                variant="contained"
                className={styles.download_btn}
              >
                Send SMS
              </Button>
            </Grid>
          </Box>
          <Grid container justifyContent={isMd ? 'left' : 'center'}>
            <Box mt={4} style={{ marginBottom: '10px' }}>
              <Button
                href="#contained-buttons"
                mt={2}
                style={{ backgroundColor: '#2d2d32', color: 'white' }}
                size="large"
                variant="contained"
              >
                <i
                  class="fab fa-google-play"
                  style={{ marginRight: '7px' }}
                ></i>{' '}
                Google Play{' '}
              </Button>
              <Button
                href="#contained-buttons"
                mt={2}
                style={{
                  backgroundColor: '#2d2d32',
                  color: 'white',
                  marginLeft: '10px',
                }}
                size="large"
                variant="contained"
              >
                {' '}
                <i
                  class="fab fa-apple"
                  style={{ marginRight: '7px', fontSize: '20px' }}
                ></i>
                App Store
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Appointment.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default Appointment;
