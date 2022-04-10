import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Section } from 'components/organisms';
import { Banner } from './components';
import MetaTitle from 'components/helper/MetaTitle';
const useStyles = makeStyles(theme => ({
  root: {
    background: '#f5f5f5',
  },
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 60,
      paddingTop: 60,
    },
  },
  sectionTop: {
    padding: '60px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '50px 0px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '50px 0px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '50px 0px',
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MetaTitle
        title={`Home || Welcome to Beatnik World `}
        metaKeyWord="Welcome to Beatnik World "
        metaDescription="Welcome to Beatnik World "
      />
      <Banner />
    </div>
  );
};

export default IndexView;
