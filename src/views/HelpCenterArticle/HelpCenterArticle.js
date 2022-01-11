import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb, Categories, Questions } from './components';

import { breadcrumb, questions, categories } from './data';

const useStyles = makeStyles(theme => ({
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
}));

const HelpCenterArticle = props => {
  const classes = useStyles();
  const { data, url } = props;
  console.log(props);
  return (
    <div>
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb url={url} />
      </SectionAlternate>
      <Section className={classes.pagePaddingTop}>
        <Questions api_data={props} data={questions} />
      </Section>
      {/* <SectionAlternate>
        <Categories data={categories} />
      </SectionAlternate> */}
    </div>
  );
};

export default HelpCenterArticle;
