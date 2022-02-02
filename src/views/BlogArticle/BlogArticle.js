import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';

import { content, sidebarArticles, similarStories } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
}));

const BlogArticle = props => {
  console.log('from view', props.data);
  const classes = useStyles();

  // author array
  const author = {
    photo: {
      src: `${props.data.user_picture}`,
    },
    name: `${props.data.userName}`,
    date: `${props.data.date}`,
  };

  return (
    <div className={classes.root}>
      <Hero title={props.data.title} author={author} />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Content api_data={props.data} data={content} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles} />
            <SidebarNewsletter className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
      {/* <SectionAlternate>
        <SimilarStories data={similarStories} />
      </SectionAlternate>
      <SectionAlternate className={classes.footerNewsletterSection}>
        <FooterNewsletter />
      </SectionAlternate> */}
    </div>
  );
};

export default BlogArticle;
