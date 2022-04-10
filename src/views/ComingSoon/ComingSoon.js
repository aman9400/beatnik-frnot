import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: 'cover',
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

const ComingSoon = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              // label="404"
              title="Coming Soon"
              subtitle={
                <span>We are currently working hard to build this page.</span>
              }
              titleProps={{
                variant: 'h3',
              }}
              labelProps={{
                color: 'secondary',
                className: classes.label,
                variant: 'h5',
              }}
              ctaGroup={[
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Go Back
                </Button>,
              ]}
              disableGutter
            />
          </div>
        }
        rightSide={
          <Image
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
            className={classes.image}
            lazy={false}
          />
        }
      />
    </div>
  );
};

export default ComingSoon;
