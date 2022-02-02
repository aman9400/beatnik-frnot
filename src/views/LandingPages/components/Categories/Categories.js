import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Image, LearnMoreLink } from 'components/atoms';
import Link from 'next/link';
import {  DescriptionCta } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  image: {
    width: 120,
    height: 120,
    objectFit: 'contain',
    marginBottom: theme.spacing(0),
  },
  descriptionListIcon: {
    '& .description-list-icon__title': {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  cardBase: {
    borderRadius: theme.spacing(2),
    padding: '0px !important',
  },
  title: {
    fontWeight: 'bold',
  },
  descriptionCta: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Categories = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>

      <DescriptionCta
        title=" top doctors online for any health concern "
        subtitle="Private online consultations with verified doctors in all specialists"
        primaryCta={
          <Button variant="outlined" color="primary" size="large">
            View more
          </Button>
        }
        align={'left'}
        titleProps={{
          variant: 'h5',
          color: 'textPrimary',
          className: classes.title,
        }}
        subtitleProps={{
          color: 'textPrimary',
          noWrap: false,
        }}
        className={classes.descriptionCta}
        data-aos="fade-up"
      />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Link href="contact-us">
            <Grid item xs={6} md={2} key={index} data-aos="fade-up">
              <CardBase
                noBorder
                noShadow
                liftUp
                className={(classes.cardBase, `category`)}
              >
                <DescriptionListIcon
                  className={classes.descriptionListIcon}
                  icon={
                    <Image
                      {...item.icon}
                      alt={item.title}
                      className={classes.image}
                    />
                  }
                  title={item.title}
                />

                <LearnMoreLink title="Consult Now" variant="subtitle1" />
              </CardBase>
            </Grid>
          </Link>
        ))}
        {/* padding: 16px 21px; */}
      </Grid>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;
