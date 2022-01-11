import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import MetaTitle from 'components/helper/MetaTitle';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 560,
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <MetaTitle
        title="Careers with ACPL"
        metaKeyWord="Careers with ACPL"
        metaDescription="We believes in building Team with diversity through fundamentals of providing employment opportunities to qualified applicants irrespective of race, color, gender, marital status or affectional. "
      />
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="Career with ACPL"
              subtitle="At ACPL, we believe in building team with diversity through fundamentals of providing employment opportunities to qualified applicants irrespective of race, color, gender, marital status or affectional.
If you have desire to learn, have a go-getter attitude and a passion for making a difference, come and be a part of the team. 
Our recruitment process has been designed to be as un-biased, straight forward and to help you get the most out of it."
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
              ctaGroup={[
                <div>
                  <p>
                    <strong>How should you apply?</strong>
                  </p>
                  <p>A few things to keep in mind before you apply:</p>
                  <ol>
                    <li>
                      Ensure you meet all of the minimum criteria for the
                      desired position.
                    </li>
                    <li>
                      For the selected position of interest, apply online by
                      your resume in site.
                    </li>
                    <li>Complete the application process.</li>
                    <li>
                      Verify the details you have entered and click on submit
                      button.
                    </li>
                  </ol>
                  <p>
                    <strong>What happens after you apply?</strong>
                  </p>
                  <ol>
                    <li>
                      You will receive an automated email confirming your
                      submission.
                    </li>
                    <li>
                      Applicants who are selected and have best met all of the
                      requirements of a position may receive a pre-screening
                      phone interview.
                    </li>
                    <li>
                      After your pre-screening phone call with a recruiter, you
                      may be contacted for a follow-up, in-person or second
                      phone interview or interview through online video call.
                    </li>
                    <li>
                      In case you are selected for the position, an offer letter
                      will be given to you indicating date of joining, position,
                      compensation packages, benefits, employment terms and
                      conditions etc.
                    </li>
                  </ol>
                </div>,

                // <Button color="primary" variant="contained" size="large">
                //   View open positions
                // </Button>,
              ]}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'flex-start'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src={
              process.env.NEXT_PUBLIC_BASE_URL + '/assets/join our team-01.png'
            }
            alt="Our story"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
