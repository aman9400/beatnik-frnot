import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const WhoWeAre = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Who are we?"
            subtitle="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. 
The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021.
The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population.
Company is looking for individuals who are open to new learning and ready to accept challenges. The individual will have to relocate to Silvassa.
Note: Individuals who are looking for a comfortable work environment and finds difficult to work under time pressure may not apply."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Our Vision"
            subtitle="We aspire to create an eco-system for everyone to avail the best of healthcare and medical support."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WhoWeAre;
