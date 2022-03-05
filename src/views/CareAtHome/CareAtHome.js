import React from 'react';
import MetaTitle from 'components/helper/MetaTitle';
import { Banner } from './components';
import { Section } from 'components/organisms';
import { Container } from '@material-ui/core';
import OrderMedicineImage from './../../../public/assets/Images/banner/clinic-banner.jpg';
import { DownloadApp } from 'views/LandingPages/components';
import CareForm from './components/CareForm';
const CareAtHome = () => {
  return (
    <div>
      <MetaTitle
        title={`Online Aarogya | Care At Home`}
        metaKeyWord="Online Consultation, Care At Home"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
    <Section style={{backgroundImage:'url(' + OrderMedicineImage +' )', backgroundSize:'100% 100%'}}>
      <Container fixed>
      <Banner/>
      </Container>
    </Section>
    <Section>
      <Container fixed>
      <CareForm/>
      </Container>
    </Section>

    <Section >
      <Container fixed>
      <DownloadApp/>
      </Container>
    </Section>
    </div>
  );
};

export default CareAtHome;