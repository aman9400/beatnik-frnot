import React from 'react';
import FindDoctorsBanner from './components/FindDoctorBanner';
import { Section } from 'components/organisms';
import MetaTitle from 'components/helper/MetaTitle';
import PatientConsult from './../LandingPages/components/PatientConsult';
import Hero from './../LandingPages/components/Hero';
import Packages from './../LandingPages/components/Packages';
import DownloadApp from './../LandingPages/components/DownloadApp';
import UserSay from './../LandingPages/components/UserSay';
import CustomerRatings from './../LandingPages/components/CustomerRatings';
import News from './../LandingPages/components/News';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    background: '#f5f5f5',
  },
  sectionTop: {
    padding: '60px 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '50px 0px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '50px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 50px',
    },
  },
}));
const FindDoctor = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | Find Doctors`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />

      <FindDoctorsBanner />
      <Section>
        <Hero />
      </Section>
      <Section className={classes.sectionTop}>
        <Container fixed>
          <PatientConsult />
        </Container>
      </Section>

      <Section
        className={classes.sectionTop}
        style={{ backgroundColor: '#f8f8fb' }}
      >
        <Container fixed>
          <Packages />
        </Container>
      </Section>

      <Section
        className={classes.sectionTop}
        style={{
          backgroundImage:
            'linear-gradient(45deg,#ff23010f 25%,transparent 25% ),linear-gradient(135deg,#ff23010f 25%,transparent 25% ),linear-gradient(45deg,transparent 75%,#ff23010f 75% ),linear-gradient( 135deg,transparent 75%,#ff23010f 75% )',
          backgroundSize: '-4px 9px',
          backgroundPosition: '0px 0px, 0px 0px, 0 0px, 0px 0px',
          borderRadius: '0px 0px 0px 0px',
        }}
      >
        <Container fixed>
          <DownloadApp />
        </Container>
      </Section>

      <Section className={classes.sectionTop}>
        <Container fixed>
          <UserSay />
        </Container>
      </Section>

      <Section
        className={classes.sectionTop}
        style={{ backgroundColor: '#fff' }}
      >
        <Container fixed>
          <CustomerRatings />
        </Container>
      </Section>

      <Section className={classes.sectionTop}>
        <Container fixed>
          <News />
        </Container>
      </Section>
    </div>
  );
};

export default FindDoctor;
