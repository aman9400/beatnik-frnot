import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { Image } from 'components/atoms';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import MetaTitle from 'components/helper/MetaTitle';
import Link from 'next/link';

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
}));

const SigninCover = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | Sign In`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              title="Sign in"
              subtitle={
                <span>
                  Don’t have an account?{' '}
                  <Link href="/signup">
                    <LearnMoreLink
                      title="Sign up."
                      typographyProps={{ variant: 'h6' }}
                    ></LearnMoreLink>
                  </Link>
                </span>
              }
              titleProps={{
                variant: 'h3',
              }}
            />
            <Form />
          </div>
        }
        rightSide={
          <Image
            src="assets/logon_bg.jpg"
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>
  );
};

export default SigninCover;
