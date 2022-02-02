import React from 'react';
import PropTypes from 'prop-types';
import styles from './usersay.module.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Box, Typography, Grid } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles = makeStyles(theme => ({
  carousel_container: {
    '&.react-multiple-carousel__arrow': {
      color: 'black',
      marginLeft: '100px',
    },
  },

  card_color: {
    boxShadow: '0 4px 8px rgb(0 0 0 / 12%)',
    borderRadius: '4px',
    marginRight: '30px',
    marginBottom: '20px',
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: '10px',
    borderRadius: '8px',
  },
  sliderimg: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    marginLeft: '20px',
    cursor: 'pointer',
  },
  testimonial: {
    fontSize: '22px',
    marginTop: '20px',
  },
  testimonialHeading: {
    fontWeight: '700',
    fontSize: '26px',
  },

  avtr: {
    marginLeft: '200px',
    marginTop: '10px',
  },

  dotCls: {
    color: 'red',
    '& .react-multi-carousel-dot button': {
      borderColor: '#ff230136',
    },
    '& .react-multi-carousel-dot--active button': {
      background: 'var(--theme-color)',
    },
  },
  arrowButton: {
    '& .react-multiple-carousel__arrow--right': {
      background: 'var(--white)',
      color: 'red',
    },
    '& .react-multiple-carousel__arrow--left': {
      background: 'var(--white)',
      color: 'red',
    },
    '& .react-multiple-carousel__arrow--left': {
      left: 'calc(4% + -31px)',
      minWidth: '27px',
      minHeight: '27px',
      marginTop: '-150px',
      [theme.breakpoints.down('sm')]: {
        left: 'calc(4% + 4px)',
      },
      background: 'var(--white)',
      border: 'var(--border)',
      boxShadow: 'var(--bs-lg)',
    },
    '& .react-multiple-carousel__arrow--right': {
      right: 'calc(4% + -39px)',
      [theme.breakpoints.down('sm')]: {
        right: 'calc(4% + -11px)',
      },
      minWidth: '27px',
      minHeight: '27px',
      marginTop: '-150px',
      background: 'var(--white)',
      border: 'var(--border)',
      boxShadow: 'var(--bs-lg)',
    },
    '.react-multiple-carousel__arrow ': {
      background: 'var(--white)',
    },
    '.react-multi-carousel-dot--active button': {
      background: 'var(--white)',
    },
  },
}));

const UserSay = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = [
    {
      title: 'Amit Shah',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'This app is really flawless. Good for elderly people. Best part of the app is home delivery of medicine at a discounted price very easily',
    },
    {
      title: 'George Shah',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'I got lab tests done for my parents on MFine since we couldn’t travel. Sample was collected at home & I got both reports on the app. .',
    },
    {
      title: 'Dinesh Singh',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'My 3 y/o son was unwell late at night and I had to speak to a doctor immediately. I chose a doctor and got to consult in 10 minutes. ',
    },
    {
      title: 'Arya G Gupta',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'I booked an appointment for an Ultrasound via MFine. Got my scan done immediately at my time slot. Didn’t have to stand in queue.',
    },
    {
      title: 'Sameer Sheikh',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'I got lab tests done for my parents on MFine since we couldn’t travel. Sample was collected at home & I got both reports on the app.',
    },
    {
      title: 'Amit Shah',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'This app is really flawless. Good for elderly people. Best part of the app is home delivery of medicine at a discounted price very easily',
    },
    {
      title: 'George Shah',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'I got lab tests done for my parents on MFine since we couldn’t travel. Sample was collected at home & I got both reports on the app. .',
    },
    {
      title: 'Dinesh Singh',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'My 3 y/o son was unwell late at night and I had to speak to a doctor immediately. I chose a doctor and got to consult in 10 minutes. ',
    },
    {
      title: 'Arya G Gupta',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'I booked an appointment for an Ultrasound via MFine. Got my scan done immediately at my time slot. Didn’t have to stand in queue.',
    },
    {
      title: 'Sameer Sheikh',
      subTitle: 'Chief Executive Officer (CEO)',
      testiImage: `https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg`,
      content:
        'I got lab tests done for my parents on MFine since we couldn’t travel. Sample was collected at home & I got both reports on the app.',
    },
  ];

  // code for slider

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.bottomArea}>
        <Grid container justifyContent="center">
          <Box>
            <Typography variant="h2" className={styles.testimonial_title}>
              Testimonials
            </Typography>
            <br />
          </Box>
        </Grid>
      </Grid>

      <Carousel
        minHeight="80%"
        responsive={responsive}
        className={classes.arrowButton}
        containerClass="carousel_container"
        onSwipeStart
        dotListClass={classes.dotCls}
        showDots={true}
        onClickItem
        autoPlay={true}
      >
        {data.map(name => (
          <div className={classes.sliderimg}>
            <figure className={styles.snip1192}>
              <blockquote>{name.content}</blockquote>
              <div className={styles.author}>
                <img src={name.testiImage} alt={name.subTitle} />
                <h5>
                  {name.title}
                  <span> {name.subTitle}</span>
                </h5>
              </div>
            </figure>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

UserSay.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default UserSay;
