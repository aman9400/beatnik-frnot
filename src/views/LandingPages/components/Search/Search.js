import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeightBold: {
    fontWeight: 'bold',
  },
}));

const Search = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Digital Healthcare for your family"
        subtitle="Get access to your prescriptions, Book appointments with your favourite doctors"
        align="left"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardBase withShadow liftUp>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                  className={classes.fontWeightBold}
                  noWrap
                >
                  Safely access your prescriptions
                </Typography>
                <Typography variant="body1" color="textPrimary" noWrap>
                  View all your past prescriptions online from anywhere.
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                alignItems="center"
                xs={12}
                sm={3}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </CardBase>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <CardBase withShadow liftUp>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                  className={classes.fontWeightBold}
                  noWrap
                >
                  For The Doctor
                </Typography>
                <Typography variant="body1" color="textPrimary" noWrap>
                  An app that will change the way you practice
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify="flex-end"
                alignItems="center"
                xs={12}
                sm={4}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </CardBase>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

Search.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Search;
