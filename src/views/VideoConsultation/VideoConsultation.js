import React from 'react';
import { Section } from 'components/organisms';
import MetaTitle from 'components/helper/MetaTitle';
import VideoConsultBanner from './components/Banner/Banner';
import { makeStyles } from '@material-ui/core';
import WorkingProcess from './components/WorkingProcess';
import ReviewsBK from 'views/LandingPages/components/ReviewsBK';
import { ProductBox } from 'views/LandingPages/components';
import WhyUseAarogya from './components/WhyUseAarogya';
import DownloadApp from './components/DownloadApp';
import FAQConsult from './components/FAQConsult';

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

const VideoConsultation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | Video Consultation`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />

      <VideoConsultBanner />
      <Section
      >
        <WorkingProcess />
      </Section>
      <Section style={{backgroundColor: '#fff'}}>
        <ReviewsBK />
      </Section>
      <Section>
        <ProductBox />
      </Section>
      <Section style={{backgroundColor: '#fff'}}>
        <WhyUseAarogya/>
      </Section>
      <Section>
        <FAQConsult/>
      </Section>
      <Section
      style={{
        backgroundImage:
          'linear-gradient(45deg,#ff23010f 25%,transparent 25% ),linear-gradient(135deg,#ff23010f 25%,transparent 25% ),linear-gradient(45deg,transparent 75%,#ff23010f 75% ),linear-gradient( 135deg,transparent 75%,#ff23010f 75% )',
        backgroundSize: '-4px 9px',
        backgroundPosition: '0px 0px, 0px 0px, 0 0px, 0px 0px',
        borderRadius: '0px 0px 0px 0px',
      }}
      >
       <DownloadApp/>
      </Section>
    </div>
  );
};

export default VideoConsultation;
