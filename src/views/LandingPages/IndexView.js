import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Section } from 'components/organisms';
import {
  Hero,
  UserSay,
  DownloadApp,
  PatientConsult,
  BannerPage,
  Packages,
  CustomerRatings,
  News,
  Appointment,
  Articles,
  Categories,
  Products,
  Search,
  SearchLocation,
  ProductBox,
} from './components';
import MetaTitle from 'components/helper/MetaTitle';
import Container from '@material-ui/core/Container';
import About from './components/About';
import DoctorsSay from './components/DoctorsSay';
import ReviewsBK from './components/ReviewsBK';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#f5f5f5',
  },
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 60,
      paddingTop: 60,
    },
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

  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`OnlineAarogya | Video Consultation with Doctors, Book Doctor Appointments`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing OnlineAarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />

      <Section className={classes.sectionTop} style={{ padding: '54px 1px' }}>
        <BannerPage />
      </Section>

      <Section
        className={classes.sectionTop}
        style={{ backgroundColor: '#ffff' }}
      >
        <Container fixed>
          <Hero />
        </Container>
      </Section>
      {/* <Section className={classes.sectionTop}>
        <Container fixed>
          <About />
          <Appointment/>
          <Articles/>
          <BannerPage />

          <DoctorsSay/>
          <ProductBox/>
          <Search/>
          <SearchLocation/>

          <ReviewsBK/>

        </Container>
      </Section> */}
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

      <Section
        className={classes.sectionTop}
      >
        <Container fixed>
          <UserSay />
        </Container>
      </Section>

      <Section className={classes.sectionTop} style={{backgroundColor:'#fff'}}>
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

export default IndexView;
