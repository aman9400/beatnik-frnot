import React, { lazy, Suspense } from 'react';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import { Loading, General } from './components';
import Breadcrumb from '../Reusable/Breadcrumb';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    height: '100%',
    width: '100%',
  },
  section: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(4),
    },
  },
}));

const AccountInfo = () => {
  const classes = useStyles();
  return (
    <div className="medifile_profie">
      <div className="medifiles_pannel">
        <div className="medifile_dashboard">
          <h3 className="medifile_head">Hi! Welcome to Medifiles </h3>
          <Breadcrumb url="Account Info" />
        </div>
      </div>
      
      <Section className="medifile_profile_data">
        <Suspense fallback={<Loading />}>
          <General />
        </Suspense>
      </Section>
    </div>
  );
};

export default AccountInfo;
