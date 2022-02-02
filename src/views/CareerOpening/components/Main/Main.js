import React from 'react';
import PropTypes from 'prop-types';
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
import { CardBase } from 'components/organisms';

import Link from 'next/link';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const useStyles = makeStyles(theme => ({
  root: {
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  title: {
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
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Main = props => {
  const { api_data, className, ...rest } = props;
  console.log('main', api_data);
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const scrollTo = id => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <DescriptionCta
        title={api_data.title}
        subtitle={api_data.field_log_location}
        primaryCta={
          <a href={api_data.file} download>
            <Button variant="outlined" color="primary" size="large">
              <PictureAsPdfIcon /> &nbsp; DownLoad
            </Button>
          </a>
        }
        secondaryCta={
          <Button
            onClick={() => scrollTo('apply')}
            variant="contained"
            color="primary"
            size="large"
          >
            <ContactMailIcon /> &nbsp; Apply now
          </Button>
        }
        align={'left'}
        titleProps={{
          variant: 'h4',
          className: classes.title,
          color: 'textPrimary',
        }}
        subtitleProps={{
          color: 'textPrimary',
        }}
      />
      <Divider className={classes.divider} />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          {/* <SectionHeader
            title="Who we are"
            subtitle=""
            align="left"
            data-aos="fade-up"
            titleProps={{
              className: classes.title,
              color: 'textPrimary',
            }}
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          /> */}
          <Typography component="p" variant="h7" color="textPrimary">
            <div
              dangerouslySetInnerHTML={{
                __html: api_data.body,
              }}
            ></div>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <CardBase withShadow>
                <SectionHeader
                  // title="Have a question?"
                  // titleVariant="h6"
                  // subtitle="Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!"
                  ctaGroup={[
                    // <Link href="/contact-us">
                    //   <Button variant="contained" color="primary">
                    //     Contact Us
                    //   </Button>
                    // </Link>,
                    <div>
                      <h4 style={{ marginBottom: '15px' }}>
                        Job ID :{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_job_id}
                        </label>
                      </h4>
                      <h4 style={{ marginBottom: '15px' }}>
                        Years’ of Experience:{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_experience}
                        </label>
                      </h4>
                      <h4 style={{ marginBottom: '15px' }}>
                        CTC (Rs Lakh) :{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_ctc}
                        </label>
                      </h4>
                      <h4 style={{ marginBottom: '15px' }}>
                        Position :{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_job_position}
                        </label>
                      </h4>
                      <h4 style={{ marginBottom: '15px' }}>
                        Company Name :{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_company_name}
                        </label>
                      </h4>
                      <h4 style={{ marginBottom: '15px' }}>
                        Job Location :{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_log_location}
                        </label>
                      </h4>
                      <h4 style={{ marginBottom: '15px' }}>
                        Job Posted Date :{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_job_posting_date}
                        </label>
                      </h4>
                      <h4 style={{ marginBottom: '15px' }}>
                        End date :{' '}
                        <label style={{ marginLeft: '10px', color: '#ec3832' }}>
                          {api_data.field_end_date}
                        </label>
                      </h4>
                    </div>,
                  ]}
                  disableGutter
                  align="left"
                  subtitleProps={{
                    variant: 'body1',
                  }}
                />
              </CardBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default Main;
