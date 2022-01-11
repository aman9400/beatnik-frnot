import React from 'react';
import { Divider } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Form, Contact } from './components';

import { mapData } from './data';
import MetaTitle from 'components/helper/MetaTitle';

const ContactPageSidebarMap = () => (
  <div>
    <MetaTitle
      title={`Contact Us | OnlineAarogya}`}
      metaKeyWord="Contact Us, OnlineAarogya"
      metaDescription="Contact us for anything, Our goal is to be as helpful as possible."
    />
    <Form data={mapData} />
    <Section>
      <Contact />
    </Section>
    <Divider />
  </div>
);

export default ContactPageSidebarMap;
