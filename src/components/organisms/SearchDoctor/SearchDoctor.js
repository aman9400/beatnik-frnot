import React, { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './searchDoctor.module.css';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  TextField,
  FormControl,
  Box,
  Grid,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },
  fullWidth: {
    maxWidth: '100%',
  },
  disablePadding: {
    padding: 0,
  },
  narrow: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the sections
 *
 * @param {Object} props
 */
const SearchDoctor = props => {
  const {
    children,
    fullWidth,
    narrow,
    disablePadding,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

// Code For Search Doctor According to Patient
  const searchDoctor = () =>
  {
    router.push({
      pathname: '/doctor-search/',
      query:{name:searchdoctors}
    })
  }
  const router = useRouter();
  const [searchdoctors, setSearchDoctors] = useState('');
  return (
    <section
      className={clsx(
        'section',

        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        className,
      )}
      {...rest}
    >
      <Grid
        container
        className="padng"
        style={{
          padding: '0px',
          position: 'relative',
          zIndex: '99',
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          border: '0px solid red',
          borderRadius: ' 15px',
          width: '75%',
          boxShadow:
            '0 1px 3px rgb(60 63 66 / 32%), 0 4px 12px rgb(60 63 66 / 15%)',
          overflow: 'hidden',
          margin: '0 auto',
        }}
      >
        <Grid style={isMd ? { padding: '0px' } : { padding: '0px' }}>
          {isMd ? (
            <Box
              display="flex"
              mb={2}
              className="search"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl>
                <TextField
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '-18px',
                    marginLeft: '0px',
                    overflow: 'hidden',
                    zIndex: '999',
                  }}
                  name={'text'}
                  className={styles.txf}
                  InputProps={{
                    startAdornment: (
                      <LocationOnIcon onClick={() => 0}>x</LocationOnIcon>
                    ),
                  }}
                />
              </FormControl>
            </Box>
          ) : (
            <></>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={4}
          className={styles.container_location_input}
          style={isMd ? { padding: '0px' } : { padding: '50px' }}
        >
          <FormControl fullWidth className={styles.input_form_control1}>
            <Autocomplete
              freeSolo
              id="multiple-limit-tags"
              options={top100Films}
              ListboxProps={{
                style: {
                  maxHeight: 250,
                  overflowX: 'hidden',
                  overflowY: 'scroll',
                  fontSize: '14px',
                  fontWeight: '600',
                  borderBottom: '0px dashed  #878787',
                  boxShadow:
                    '0 1px 4px hsl(0deg 0% 0% / 9%), 0 3px 8px hsl(0deg 0% 0% / 9%), 0 4px 13px hsl(0deg 0% 0% / 13%)',
                  position: 'relative',
                  zIndex: '99999',
                },
              }}
              getOptionLabel={option => option.title}
              renderInput={params => (
                <TextField
                  className={styles.input_field_control}
                  variant="outlined"
                  {...params}
                  placeholder="Location"
                  InputProps={{
                    classes: {
                      root: styles.input,
                    },
                    ...params.InputProps,

                    type: 'Location',
                  }}
                />
              )}
              renderOption={option => {
                return (
                  <React.Fragment>
                    <div
                      style={{
                        backgroundColor: '#fff4f2',
                        marginRight: '8px',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        padding: '5px',
                      }}
                    >
                      <SearchIcon color="primary" />
                    </div>

                    {option.title}
                  </React.Fragment>
                );
              }}
            />
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          className={styles.container_location_input}
          style={isMd ? { padding: '0px' } : { padding: '0px' }}
        >
          <FormControl fullWidth className={styles.input_form_control2}>
            <TextField
              className={styles.input_field_control2}
              onChange={e => setSearchDoctors(e.target.value)}
              name={'text'}
              variant="outlined"
              placeholder="Doctor, Specialization, Clinic, Symptoms"
              InputProps={{
                classes: {
                  root: styles.inputs,
                },
              }}
            />
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          md={2}
          className={styles.container_location_input}
          style={isMd ? { padding: '0px' } : { padding: '10px' }}
        >
          {isMd ? (
            <Box>
              <Button
                onClick={searchDoctor}
                variant="contained"
                style={{
                  height: '3.8em',
                  width: '100%',
                  borderRadius: '0px',
                  position: 'relative',
                  left: '40px',
                }}
                size="large"
                color="primary"
              >
                {' '}
                Search
              </Button>
            </Box>
          ) : (
            <Grid container justifyContent="center">
              <Button
                onClick={searchDoctor}
                variant="contained"
                style={{
                  height: '3.8em',
                  width: '100%',
                  borderRadius: '0px',
                }}
                size="large"
                color="primary"
              >
                Search
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
      {children}
    </section>
  );
};

SearchDoctor.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  narrow: PropTypes.bool,
  /**
   * Should the section be full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Should the section render with no padding
   */
  disablePadding: PropTypes.bool,
};

export default SearchDoctor;
const top100Films = [
  { title: 'Vapi', year: 1994 },
  { title: 'Vadodara', year: 1972 },
  { title: 'Valsad', year: 1974 },
  { title: 'Surat', year: 2008 },
  { title: 'Mumbai', year: 1957 },
  { title: 'Virar', year: 1993 },
  { title: 'Pune', year: 1994 },
  { title: 'Bhopal', year: 1995 },
  { title: 'Indore', year: 1948 },
  { title: 'GopalGanj', year: 1921 },
  { title: 'Kolkata', year: 2009 },
  { title: 'Delhi', year: 2000 },
  { title: 'Ranikhet', year: 2009 },
  { title: 'Solapur', year: 1975 },
];
