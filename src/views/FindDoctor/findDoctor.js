import React from 'react';
import FindDoctorsBanner from './components/FindDoctorBanner';
import { Section } from 'components/organisms';
import MetaTitle from 'components/helper/MetaTitle';
import WorkingProcess from './components/WorkingProcess';
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
      <Section
        className={classes.sectionTop}
        style={{ backgroundColor: '#fff' }}
      >
        <WorkingProcess />
      </Section>
    </div>
  );
};

export default FindDoctor;
