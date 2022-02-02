import React from 'react';
import MetaTitle from 'components/helper/MetaTitle';
import { Section } from 'components/organisms';
import { Container, makeStyles } from '@material-ui/core';
import PackageBanner from './components/PackageBanner';
import PackageInfo from './components/PackageInfo';
import PackageBannerIMG from './../../../public/assets/Images/banner/clinic-banner.jpg';
import { ProductBox } from 'views/LandingPages/components';
import DownloadApp from 'views/VideoConsultation/components/DownloadApp';
const useStyles = makeStyles(theme => ({
  root: {
    background: 'hsl(0deg 0% 95%)',
  },
}));

const PackageLandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Online Aarogya | Package `}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <Section
        style={{
          borderTop: 'var(--border)',
          padding: '0 !important',
          backgroundImage: `url(${PackageBannerIMG})`,
          backgroundSize: '100% 450px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container fixed>
          <PackageBanner />
        </Container>
      </Section>
      <Section>
        <Container fixed>
          <PackageInfo />
        </Container>
      </Section>
      <Section style={{ background: '#fff' }}>
        <Container fixed>
          <ProductBox />
        </Container>
      </Section>
      <Section>
        <Container fixed>
          <DownloadApp />
        </Container>
      </Section>
    </div>
  );
};

export default PackageLandingPage;
