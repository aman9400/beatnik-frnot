import React from 'react';
import MetaTitle from 'components/helper/MetaTitle';
import { Section } from 'components/organisms';
import { Container, makeStyles } from '@material-ui/core';
import DownloadApp from 'views/VideoConsultation/components/DownloadApp';
import ClinicalConsultBanner from './components/ClinicalConsultBanner';
import SearchBannerClinic from './components/SearchBannerClinic';
import ClinicBanner from './../../../public/assets/Images/banner/clinic-banner.jpg';
import ClinicServices from './components/ClinicServices';
const useStyles = makeStyles(theme => ({
  root: {
    background: 'hsl(0deg 0% 95%)',
  },
}));

const InClinicalConsult = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | In Clinic Consultation`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <Section style={{ backgroundColor: '#fff', borderTop: 'var(--border)' }}>
        <SearchBannerClinic />
      </Section>
      <Section
        style={{
          background: `url(${ClinicBanner})`,
          backgroundSize:'100%',
          padding: '0 !important',
          backgroundSize: '100% 100%',
        }}
      >
        <Container fixed>
          <ClinicalConsultBanner />
        </Container>
      </Section>
      <Section>
        <Container fixed>
          <ClinicServices />
        </Container>
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
        <Container fixed>
          <DownloadApp />
        </Container>
      </Section>
    </div>
  );
};

export default InClinicalConsult;
