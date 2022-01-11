import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardJobMinimal } from 'components/organisms';
import Link from 'next/link';

const Jobs = props => {
  const { api_data, className, ...rest } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  console.log('ll', api_data);
  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Job At OnlineAarogya"
        subtitle="Welcome to our Careers section. Please review the positions we are currently hiring for and apply to the ones that interest you."
        subtitleColor="textPrimary"
        ctaGroup={[
          <>
            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/about-us`}>
              <a>
                <Button color="primary" size="large" variant="contained">
                  About the company
                </Button>
              </a>
            </Link>
          </>,
        ]}
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {api_data.map((item, index) => (
          <Grid item xs={12} key={index}>
            {/* <a
              target="_blank"
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/HR-21-07-01 (Acct & HR).pdf`}
            > */}
            <Link href="job-details/[jobId]/" as={'job-details/' + item.nid}>
              <CardJobMinimal
                title={item.title}
                subtitle={`${item.field_log_location} / ${item.field_job_type}`}
                showArrow
                titleProps={{
                  variant: 'h6',
                }}
                subtitleProps={{
                  variant: 'subtitle1',
                }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Jobs.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Jobs;
