import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Hero,
  Horizontal,
  HorizontalCover,
  HorizontalTransparent,
  Vertical,
  VerticalOverlaped,
  VerticalTransparent,
} from './components';

import { articles1, articles2, articles3 } from './data';

import { getArticle } from './../../../lib/drupal/fetcher';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
}));

const BlogReachView = props => {
  const classes = useStyles();

  // console.log('new', process.env.BASE_URL);

  return (
    <>
      {/* <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section> */}

      <div className={classes.root}>
        <Hero />
        <SectionAlternate>
          <>
            <VerticalOverlaped api_data={props.data.data} data={articles1} />
            <Section>
              <Divider />
            </Section>
            <Horizontal api_data={props.data.data} data={articles2} />
          </>
        </SectionAlternate>
      </div>
    </>
  );
};

export default BlogReachView;
