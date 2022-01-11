import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  image: {
    maxWidth: 450,
    height: 'auto',
  },
}));

const Team = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = [
    'Get Medical Assistance 24x7.',
    'Your health is our priority. You get to choose your doctors for all your medical needs.',
    'Getting medical assistance is as simple as chat, audio call, video call or simply booking an on-clinic appointment.',
    'Digital medical records with prediction and prescription.',
    'Access your medical records whenever you need and share.',
    'Your medical emergency contact can share your medical records without any hassle.',
    'Provide complete Healthcare coverage to your Family and loved ones.',
    '100% assurance on Privacy and Security. We are ISO 27001, HIPPA, and future readiness with DISHA Compliance.',
  ];

  return (
    <div className={className} {...rest}>
      <Grid
        container
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
          >
            <SectionHeader
              title="Why Online Aarogya"
              // subtitle="We develop intelligent solutions for companies to reduce their operational costs, increase their profitability and improve service quality."
              subtitleColor="textPrimary"
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {data.map((item, index) => (
                <Grid item xs={12} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar>
                      <Avatar
                        src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="textPrimary">
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'center'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="assets/Why-Online-Aarogya.png"
            srcSet="assets/Why-Online-Aarogya.png 2x"
            alt="team"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Team.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default Team;
