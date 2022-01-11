import React from 'react';
import { Section, SectionAlternate } from 'components/organisms';
import { Faq, Contact, Hero, Categories } from './components';

import { faq, categories } from './data';

const HelpCenter = props => {
  // console.log('cat', props);
  return (
    <div>
      {/* <Hero /> */}
      {/* <Section> */}
      {/* <Categories /> */}
      {/* </Section> */}
      <SectionAlternate>
        <Categories api_data={props.data} data={categories} />
      </SectionAlternate>
      <SectionAlternate>
        <Contact />
      </SectionAlternate>
    </div>
  );
};

export default HelpCenter;
