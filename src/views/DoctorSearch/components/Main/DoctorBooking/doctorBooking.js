import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import MetaTitle from 'components/helper/MetaTitle';
import DoctorBookingFrom from './components/Stepper/Stepper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
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
  breadcrumb_container: {
    position: 'relative',
    backgroundImage:
      'url(https://t4.ftcdn.net/jpg/04/74/32/63/360_F_474326354_UJkE9f2uLf5WfsVuUR3tgDqN3FeyoECv.jpg)',
    backgroundSize: '100%',
    padding: '10px 60px',
    borderTop:'var(--border)',
  },
  breadcrumbs: {
    position: 'relative',
  },
  separator: {
    color: 'red',
    fontWeight: '600',
  },
  link: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#484848',
    lineHeight: '41px',
    textDecoration: 'none',
    '& svg ': {
      position: 'relative',
      top: '4px',
    },
  },
  current: {
    color: 'red',
    fontSize: '14px',
    fontWeight: '600',
    opacity: '.7',
  },
  page_title: {
    fontWeight: '600',
    fontSize: '28px',
  },
}));

const DoctorBooking = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`OnlineAarogya | Booking Doctor Appointments`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company's mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <div className={classes.breadcrumb_container}>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="inherit" href="/" className={classes.link}>
            <HomeIcon className={classes.icon} /> Home
          </Link>
          <Link color="inherit" href="/find-doctor" className={classes.link}>
            Find Doctor
          </Link>
          <Link color="inherit" href="/doctor-search" className={classes.link}>
            Doctor List
          </Link>
          <Typography color="textPrimary" className={classes.current}>
            Book Appointment
          </Typography>
        </Breadcrumbs>
        <div className={classes.page_title}>Book Appointment</div>
      </div>
      <Section className={classes.pagePaddingTop}>
        <DoctorBookingFrom />
      </Section>
    </div>
  );
};

export default DoctorBooking;
