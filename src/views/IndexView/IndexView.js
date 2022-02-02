import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Features,
  Reviews,
  Hero,
  Search,
  Categories,
  Products,
  ProductBox,
} from './components';
import MetaTitle from 'components/helper/MetaTitle';

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 60,
      paddingTop: 60,
    },
  },

  sectionTop: {
    padding: '60px 64px',
  },

  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();
  const categories = [
    {
      title: 'Period doubts or Pregnancy',
      icon: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Period-Douts.png',
        srcSet:
          process.env.NEXT_PUBLIC_BASE_URL + '/assets/Period-Douts.png 2x',
      },
    },
    {
      title: 'Acne, pimple or skin issues',
      icon: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Pimple.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Pimple.png 2x',
      },
    },
    {
      title: 'Performance issues in bed',
      icon: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Performance-Issue.png',
        srcSet:
          process.env.NEXT_PUBLIC_BASE_URL + '/assets/Performance-Issue.png 2x',
      },
    },
    {
      title: 'Child not feeling well',
      icon: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Child-Fever.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Child-Fever.png 2x',
      },
    },
    {
      title: 'Depression or anxiety',
      icon: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Depression.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Depression.png 2x',
      },
    },
    {
      title: 'Cold, cough or fever',
      icon: {
        src: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Cough.png',
        srcSet: process.env.NEXT_PUBLIC_BASE_URL + '/assets/Cough.png 2x',
      },
    },
  ];

  const products = {
    items: [
      {
        icon: 'fas fa-heartbeat',
        title: 'ShapeItUp',
        subtitle:
          'We believe every individual is unique in terms of metabolism, routine and hobbies. Combining technology and artificial intelligence to manage above factors can make your fitness journey more fun and sustainable.',
      },
      {
        icon: 'fas fa-paw',
        title: 'Pet Aarogya',
        subtitle:
          'A digital veterinary platform that offers online consultations to pet owners to offer advice and prescribe medications depending on their pets health. It connects with a verified Veterinarians in a minute, to keep your pets safe and healthy',
      },
      {
        icon: 'fas fa-phone-volume',
        title: 'Lets Talk',
        subtitle:
          'At some point we all experience  disturbing thoughts that holds us back, with online let’s talk aarogya, one can get help to discover and overcome  these hindrance with the support of a licensed counsellor. The counseling sessions are 100% secure and private ',
      },
      {
        icon: 'fas fa-cart-plus',
        title: 'Aarogya Mall',
        subtitle:
          'Besides catering to the supply for lets talk, Pet aarogya, shapeitup and online aarogya, it provides various medical services to your door step including leasing out medical equipment and nursing services at the comfort of your home.',
      },

      {
        icon: 'fas fa-file-medical-alt',
        title: 'MediFiles',
        subtitle:
          'Your personal secure online locker to keep all your medical records digitally, which can be shared at your finger tip. The artificial intelligence combined with statistical analytics to provide the predictive health and medical conditions for lifestyle corrections.',
      },
    ],
    properties: [
      'Our sign up is dead simple. We only require your basic company information',
      'We support bulk uploading via SQL, integrations with most data storage products',
      "Simply select where you'd like to transfer your data ",
    ],
  };

  return (
    <div>
      <MetaTitle
        title={`OnlineAarogya | Video Consultation with Doctors, Book Doctor Appointments`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing OnlineAarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      {/* <Hero themeMode={themeMode} /> */}

      {/* <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <Search />
      </SectionAlternate> */}
      {/* <SectionAlternate className={classes.sectionAlternateNoPaddingTop}> */}
      <Features />
      {/* </SectionAlternate> */}

      <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        {/* <Products data={products} /> */}
        <ProductBox />
      </SectionAlternate>

      <Section className={classes.sectionTop}>
        <Categories data={categories} />
      </Section>

      {/* <Section className={classes.sectionTop}>
        <Reviews />
      </Section> */}

      {/* <SectionAlternate className={classes.sectionAlternateNoPaddingTop}>
        <Search />
      </SectionAlternate> */}
    </div>
  );
};

export default IndexView;
