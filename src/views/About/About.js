import React from 'react';
import { Section } from 'components/organisms';
import { AboutCompany } from './components';
import MetaTitle from '../../components/helper/MetaTitle';
import { Container } from '@material-ui/core';
import AboutBG from './../../../public/assets/Images/banner/clinic-banner.jpg';
const About = () => {
  return (
    <div>
      <MetaTitle
        title={`About Us | Online Aarogya}`}
        metaKeyWord="About Us, Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <Section style={{padding:'0px !important',display:'block',marginBottom:'60px'}}>
        <div style={{ position: 'relative', backgroundImage: `url(${AboutBG})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', height: '350px' }}></div>
        <Container fixed>
          <AboutCompany />
        </Container>
      </Section>


    </div>
  );
};

export default About;
