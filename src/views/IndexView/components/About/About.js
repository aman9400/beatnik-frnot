import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  colors,
  Typography,
  Divider,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped, Section, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  appStore: {
    maxWidth: 152,
  },
  bg: {
    background: theme.palette.grey.main,
  },
  googlePlayBtn: {
    border: '1px solid #A6A6A6',
    borderRadius: '5px',
    maxWidth: '150px',
  },
  cover: {
    width: '80%',
    height: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  coverImg: {
    objectFit: 'contain',
    marginLeft: '12px',
  },
  cardBase: {
    borderRadius: '35px',
    border: `2px solid ${colors.blueGrey[50]}`,
    maxWidth: 300,
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0),
  },
  dot: {
    display: 'block',
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '100%',
    background: colors.grey[500],
    marginRight: theme.spacing(1),
    '&:last-child': {
      marginRight: 0,
    },
  },
  dotHighlighted: {
    background: colors.grey[900],
  },
  divider: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  // mobileApp: {
  //   position: 'relative',
  //   left: '57px',
  // },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className="mobileDiv">
      <HeroShaped
        leftSide={
          <SectionHeader
            className="mobileApp"
            title={
              <span>
                Click on the icons to download the app
                <Typography
                  color="secondary"
                  variant="inherit"
                  component="span"
                ></Typography>
              </span>
            }
            // subtitle={
            //   <Typography
            //     type="body1"
            //     variant="h6"
            //     // style={{ color: '#2d3748' }}
            //   >
            //     Stop looking for answers on the search engine, take expert help.
            //     Choose the best doctor available in your locality or across the
            //     country Get personalized care and one-on-one interactions for
            //     any health related issues. 100% secured platform and complies to
            //     all the government guidelines
            //   </Typography>
            // }
            //             subtitle="Stop looking for answers on the search engine, take expert help.
            // Choose the best doctor available in your locality or across the country
            // Get personalized care and one-on-one interactions for any health related issues.
            // 100% secured platform and complies to all the government guidelines"
            ctaGroup={[
              <>
                <Typography
                  type="body1"
                  variant="h6"
                  // style={{ color: '#2d3748' }}
                >
                  Stop looking for answers on the search engine, take expert
                  help. Choose the best doctor available in your locality or
                  across the country. Get personalized care and one-on-one
                  interactions for any health related issues. 100% secured
                  platform and complies to all the government guidelines.
                </Typography>
                <br></br>
                <Image
                  src="https://assets.maccarianagency.com/the-front/mobile-addons/app-store.png"
                  alt="Get in on App Store"
                  className={classes.appStore}
                  lazy={false}
                />
                ,
                <Image
                  src="https://assets.maccarianagency.com/the-front/mobile-addons/play-store.png"
                  alt="Get in on Play Market"
                  className={classes.googlePlayBtn}
                  lazy={false}
                />
                ,
              </>,
            ]}
            align="left"
            disableGutter
            data-aos="fade-up"
            titleVariant="h3"
          />
        }
        rightSide={
          <div className={classes.cover}>
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + '/assets/MobileApp.png'}
              alt="..."
              className={classes.coverImg}
              data-aos="fade-up"
              lazy={false}
            />
          </div>
        }
      />
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
