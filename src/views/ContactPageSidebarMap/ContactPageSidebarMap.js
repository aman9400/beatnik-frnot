import React from 'react';
import { Container, Divider } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Form, Contact } from './components';

import { mapData } from './data';
import MetaTitle from 'components/helper/MetaTitle';

const ContactPageSidebarMap = () => (
  <div>
    <MetaTitle
      title={`Online Aarogya | Contact Us `}
      metaKeyWord="Contact Us, OnlineAarogya"
      metaDescription="Contact us for anything, Our goal is to be as helpful as possible."
    />

    <Section style={{ borderTop: 'var(--border)' }}>
      <Container fixed>
        <Form data={mapData} />
      </Container>
    </Section>
    <Divider />
    <Section>
      <Container fixed>
        <Contact />
      </Container>
    </Section>
  </div>
);

export default ContactPageSidebarMap;
