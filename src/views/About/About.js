import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Story,
  Team,
  WhoWeAre,
} from './components';

// import { team, companies, mapData, gallery } from './data';
import MetaTitle from '../../components/helper/MetaTitle';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionPartners: {
    boxShadow: '0 5px 20px 0 rgba(90, 202, 157, 0.05)',
    '& .section-alternate__content': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MetaTitle
        title={`About Us | OnlineAarogya}`}
        metaKeyWord="About Us, OnlineAarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <Section>
        <Story />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <WhoWeAre />
      </Section>
      <SectionAlternate>
        <Team />
      </SectionAlternate>
    </div>
  );
};

export default About;
