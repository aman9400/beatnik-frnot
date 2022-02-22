import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import MetaTitle from 'components/helper/MetaTitle';
import DoctorBookingFrom from './components/Stepper/Stepper';
import HomeIcon from '@material-ui/icons/Home';
import { Container, Link, Typography, Breadcrumbs } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    background: 'hsl(0deg 0% 95%)',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));

const DoctorBooking = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | Booking Doctor Appointments`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company's mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <Section className='breadcrumbs_section'>
        <Container fixed>
          <div className={(classes.breadcrumb_container, 'breadcrumb_container')}>
            <Breadcrumbs className={(classes.breadcrumbs, 'breadcrumbs')}>
              <Link href="/" className={(classes.link, 'link')}>
                <HomeIcon className='link' /> Home
              </Link>
              <Link href="/find-doctor" className={(classes.link, 'link')}>
                Find Doctor
              </Link>
              <Link href="/doctor-search" className={(classes.link, 'link')}>
                Doctor List
              </Link>
              <Typography className={(classes.current, 'current')}>
                Book Appointment
              </Typography>
            </Breadcrumbs>
            <div className={(classes.page_title, 'page_title')}>Book Appointment</div>
          </div>
        </Container>
      </Section>


      <Section className={classes.pagePaddingTop}>
        <Container fixed>
          <DoctorBookingFrom />
        </Container>
      </Section>
    </div>
  );
};

export default DoctorBooking;
