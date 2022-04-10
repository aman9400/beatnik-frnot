import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './NotFoundCover.module.css';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import MetaTitle from 'components/helper/MetaTitle';
const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: 'cover',
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const NotFoundCover = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | Page Not Found`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing OnlineAarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      {/* <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              label="404"
              title="Uh oh."
              subtitle={
                <span>
                  There’s nothing here, but if you feel this is an error please{' '}
                  <LearnMoreLink
                    title="let us know"
                    href="#"
                    typographyProps={{ variant: 'h6' }}
                  />
                </span>
              }
              titleProps={{
                variant: 'h3',
              }}
              labelProps={{
                color: 'secondary',
                className: classes.label,
                variant: 'h5',
              }}
              ctaGroup={[
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Go Back
                </Button>,
              ]}
              disableGutter
            />
          </div>
        }
        rightSide={
          <Image
            src="https://assets.maccarianagency.com/the-front/photos/account/cover-3.png"
            className={classes.image}
            lazy={false}
          />
        }
      /> */}
      <div className={styles.no_found_cover}>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.mian}>
          <h1>404</h1>
          <p>
          There’s nothing here, but if you feel this is an error please
            <br />
            That's a trouble?
          </p>
          <button onClick={handleClick} type="button">Go Back To Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundCover;
