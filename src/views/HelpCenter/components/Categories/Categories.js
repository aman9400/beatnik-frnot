import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';
import { colors } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.error.main,
    color: 'white',
    fontWeight: 700,
    marginTop: theme.spacing(2),
  },
  pointer: {
    cursor: 'pointer',
  },
}));

const Categories = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  console.log('cat1', props.data);
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="FAQs and Customer Support"
        subtitle="If you didn’t find what you needed, these could help!"
        align="left"
      />
      <Grid container spacing={2}>
        {props.api_data.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Link
              href="faqs/[tid]/[url]"
              as={'faqs/' + item.tid + '/' + item.name}
            >
              <a>
                <CardBase
                  liftUp
                  variant="outlined"
                  style={{ borderTop: `5px solid ${item.field_color[500]}` }}
                  className={classes.pointer}
                >
                  <DescriptionListIcon
                    icon={
                      <IconAlternate
                        fontIconClass={item.field_icon}
                        color={colors.red}
                        shape="circle"
                        size="medium"
                      />
                    }
                    title={item.name}
                    subtitle={item.field_subtitle}
                  />

                  <Typography variant="body1" className={classes.answerCount}>
                    View All <i class="fas fa-arrow-right"></i>
                  </Typography>
                </CardBase>
              </a>
            </Link>
          </Grid>
        ))}
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
