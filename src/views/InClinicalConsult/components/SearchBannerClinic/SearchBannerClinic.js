import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBannerClinic.module.css';
import { Container,Box, Grid,Typography } from '@material-ui/core';
import SearchDoctor from 'components/organisms/SearchDoctor';
const SearchBannerClinic = props => {

  return (
    <div className={styles.find_doctor_banner}>
      <Container fixed>
        <Grid
          className={styles.find_doctor_search_area}
          xs={12}
          sm
          container
          align="center"
        >
          <Box item xs={12} direction="column">
            <div  className={styles.find_doctor_search_part}>
              <Typography gutterBottom variant="h2">
                Clinic Near Me
              </Typography>
              
              <SearchDoctor />
            </div>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

SearchBannerClinic.propTypes = {
  /**
   * External classesgit status icon
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default SearchBannerClinic;

