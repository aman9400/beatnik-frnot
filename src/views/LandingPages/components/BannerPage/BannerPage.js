import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Box,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import SearchDoctor from 'components/organisms/SearchDoctor';

const useStyles = makeStyles(theme => ({
  input: {
    borderRadius: '5px 0 0 5px',
    backgroundColor: '#ffffffba',
    fontSize: '16px',
    fontWeight: 500,
    boxShadow:
      'var(--bs-lg)',
  },
  download_title:{
textAlign:'center',
marginBottom:'20px',
'& p':{
  fontSize: '32px',
  fontWeight: 700,
  color: 'var(--heading-color)',
},
  },
  inputs: {
    backgroundColor: '#ffffffba',
    fontSize: '16px',
    fontWeight: 500,
    borderRadius: '0px',
    boxShadow:
      'var(--bs-lg)',
  },

  root: {
    '&.MuiFormControl-root MuiFormControl-fullWidth': {
      backgroundColor: 'red',
    },
  },

  pdg: {
    '&.MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-grid-md-4': {
      padding: '2px',
      background: 'red',
    },
  },
  pdng: {
    '& .MuiGrid-root MenuItem MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3 MuiGrid-grid-md-3': {
      padding: '2px',
    },
  },

  hero_para: {
    color: '#787887',
  },
  search_container: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: '0px !important',
      margin: '0px !important',
    },
  },
}));

const Banner = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });



  return (
    <div className={clsx(classes.home_banner, 'banner_home_bg')} {...rest}>
      <Grid
        container
        spacing={isMd ? 5 : 5}
        className={classes.search_container}
        style={{
          padding: '120px 0px 30px',
          position: 'relative',
          zIndex: '99',
          width: '100%',
          display: 'block',
        }}
      >
        <SearchDoctor />
      </Grid>
      <Grid
        container
        justifyContent="center"
      >
        <Box mt={4} style={{ marginBottom: '10px' }}>
          <Box className={classes.download_title}>
            <Typography>
              Download The App
            </Typography>
          </Box>
          <Button
            href="https://play.google.com/store/apps/details?id=com.aarogya"
            mt={2}
            target='_blank'
            style={{ backgroundColor: '#2d2d32', color: 'white' }}
            size="large"
            variant="contained"
          >
            <i
              className="fab fa-google-play"
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
              className="fab fa-apple"
              style={{ marginRight: '7px', fontSize: '20px' }}
            ></i>
            App Store
          </Button>
        </Box>
      </Grid>
      {/* Play Store Data end  */}
    </div>
  );
};
Banner.propTypes = {
  className: PropTypes.string,
};
export default Banner;
