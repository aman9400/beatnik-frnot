import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';
import { Section, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const CompanyTerms = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
          <DescriptionCta
            title="Terms of Service"
            subtitle="Updated on 04.08.2021"
            primaryCta={
              <Button variant="outlined" color="primary" size="large">
                Print
              </Button>
            }
            align={'left'}
            titleProps={{
              className: classes.fontWeightBold,
              color: 'textPrimary',
            }}
            subtitleProps={{
              color: 'textSecondary',
            }}
          />
          <Divider className={classes.divider} />
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={8}>
              <SectionHeader
                title="What is Lorem Ipsum"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting"
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>

              <SectionHeader
                title="Additional terms"
                subtitle="If  Store is required to collect indirect taxes (such as sales tax, value-added tax, goods and services tax) under the laws of your state or country of residence, you shall be liable for payment of any such indirect tax. Where  Store or you are required to collect or remit direct or indirect taxes, you may be required to self-assess said tax under the applicable laws of your country of residence. Non-transferable as used herein means that except as specifically provided in this license agreement, you may not sell, rent, loan, give, sublicense, or otherwise transfer to anyone, CONTENT, or the right to use CONTENT. You may, however, make a one-time transfer of CONTENT to a third party for the sole purpose of causing such a third party to print and/or manufacture your goods incorporating CONTENT subject to the terms and conditions herein. If you become aware that any social media website uses any CONTENT in a manner that exceeds your license hereunder, you agree to remove all derivative works incorporating CONTENT from such Social Media Site and to promptly notify  SAS of each such social media website's use. You agree to take all commercially reasonable steps to prevent third parties from duplicating any CONTENT. If you become aware of any unauthorized duplication of any CONTENT please notify us via email at support@.com."
                align="left"
                titleProps={{
                  className: classes.fontWeightBold,
                  color: 'textPrimary',
                }}
                subtitleProps={{
                  variant: 'body1',
                  color: 'textPrimary',
                }}
                disableGutter
              />
              <List className={classes.list}>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    “ SAS” is a legal entity located at 128 Rue La Boétie 75008
                    Paris, France, and is the parent company to all subsidiaries
                    of Store.
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    “ Store” – collectively means SAS, all associated
                    subsidiaries, and websites including but not limited to{' '}
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    “CONTENT” means source code, photos, images, vectors, moving
                    images, animations, films, videos, audiovisual works, or
                    other media together with all associated keywords, metadata,
                    and/or titles.
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    “WEBSITE” means the service and and subsidiary websites.
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={isMd ? 4 : 2} direction="column">
                <Grid item xs={12}>
                  <CardBase withShadow className={classes.cardHighlighted}>
                    <SectionHeader
                      title="Have a question?"
                      subtitle="Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!"
                      ctaGroup={[
                        <Button variant="contained">Contact us</Button>,
                      ]}
                      disableGutter
                      align="left"
                      titleProps={{
                        variant: 'subtitle1',
                        className: clsx(
                          classes.textWhite,
                          classes.fontWeightBold,
                        ),
                      }}
                      subtitleProps={{
                        variant: 'body2',
                        className: classes.textWhite,
                      }}
                    />
                  </CardBase>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      </Section>
      <Divider />
    </div>
  );
};

export default CompanyTerms;
