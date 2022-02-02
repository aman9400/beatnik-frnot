import React, { lazy, Suspense } from 'react';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import { Loading, FamilyMembers } from './components';
import  Breadcrumb  from '../Reusable/Breadcrumb';

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
    }
  },
}));

// const getComponentId = () => parse(window.location.search).component || 'introduction';
// const renderComponent = () => {
//   let Component = null;
//   const componentId = getComponentId();
// }

const ViewFamilyMember = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Breadcrumb url="Family Members"/>
      <Section className={classes.section}>
        <Suspense fallback={<Loading />}>
      <FamilyMembers/>
        </Suspense>
      </Section>
    </div>
  );
};

export default ViewFamilyMember;