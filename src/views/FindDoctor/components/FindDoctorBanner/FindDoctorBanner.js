import React from 'react';
import PropTypes from 'prop-types';
import styles from './finddoctorbanner.module.css';
import { Container, Box, Grid, Typography, Button } from '@material-ui/core';
import SearchDoctor from 'components/organisms/SearchDoctor';
const FindDoctorsBanner = props => {

  return (
    <div className={styles.find_doctor_banner}>
      <div fixed>
        <Grid
          className={styles.find_doctor_search_area}
          xs={12}
          sm
          container
          align="center"
        >
          <Box item xs={12} direction="column">
            <div className={styles.find_doctor_search_part}>
              <Typography gutterBottom variant="h2">
                Your home for health
              </Typography>
              <Typography variant="body2">
                Find and Book
              </Typography>
              <SearchDoctor />
            </div>
          </Box>
          <Box mt={4} style={{ marginBottom: '10px' }}>
            <Box className={styles.download_title}>
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
              <i
                className="fab fa-apple"
                style={{ marginRight: '7px', fontSize: '20px' }}
              ></i>
              App Store
            </Button>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

FindDoctorsBanner.propTypes = {
  /**
   * External classesgit status icon
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default FindDoctorsBanner;

