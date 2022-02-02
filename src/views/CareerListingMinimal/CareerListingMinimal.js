import React from 'react';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { About, Features, Hero, Jobs, Newsletter } from './components';

import { features, jobs } from './data';
import MetaTitle from 'components/helper/MetaTitle';

const CareerListingMinimal = props => {
  return (
    <>
      <MetaTitle
        title={`Careers with ACPL | OnlineAarogya}`}
        metaKeyWord="job at ACPL, OnlineAarogya"
        metaDescription="We believes in building Team with diversity through fundamentals of providing employment opportunities to qualified applicants irrespective of race, color, gender, marital status or affectional."
      />
      <Section>
        <About />
      </Section>
      {/* <Features data={features} /> */}
      <SectionAlternate>
        <Jobs api_data={props.data.data} data={jobs} />
      </SectionAlternate>
      {/* <Section>
      <Newsletter />
    </Section>
    <Divider /> */}
    </>
  );
};

export default CareerListingMinimal;
