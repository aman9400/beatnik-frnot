import React from 'react';
import { Section } from 'components/organisms';
import { Main } from './components';
import MetaTitle from 'components/helper/MetaTitle';
import { Link, Breadcrumbs, Typography, makeStyles } from '@material-ui/core';
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
}));

const DoctorSearch = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`OnlineAarogya | Find Doctors, Book Doctor Appointments`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing OnlineAarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <div className={(classes.breadcrumb_container, 'breadcrumb_container')}>
        <Breadcrumbs className={(classes.breadcrumbs, 'breadcrumbs')}>
          <Link href="/" className={classes.link, 'link'} >
            <HomeIcon className={(classes.icon, 'icon')} /> Home
          </Link>
          <Link href="/find-doctor" className={(classes.link, 'link')}>
            Find Doctor
          </Link>
          <Typography className={(classes.current, 'current')}>
            Doctor List
          </Typography>
        </Breadcrumbs>
        <div className={(classes.page_title, 'page_title')}>Doctor List</div>
      </div>
      <Section className={classes.pagePaddingTop}>
        <Main />
      </Section>
    </div>
  );
};

export default DoctorSearch;
