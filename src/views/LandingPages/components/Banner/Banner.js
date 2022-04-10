import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, useMediaQuery } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HeroBanner from './../../../../../public/assets/Images/banner/hero1.jpg';
import HorizontalGrand from './../../../../../public/assets/Images/banner/vertical-brand.png';
import styles from './Banner.module.css';
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
    height: '100vh',
    objectFit: 'cover',
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
    position: 'absolute',
    display: 'flex',
    left: '0',
    bottom: '14% !important',
    right: '-72%',
    justifyContent: 'center',
    margin: 'auto',
    padding: '0',
    listStyle: 'none',
    textAlign: 'center',
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

const Banner = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = [
    {
      id: 1,
      title: 'For Those Who',
      subTitle: 'Love Art, Live Art',
      para: 'Bringing together artists and art spaces around the world',
      testiImage: HeroBanner,
      bottomTitle1: 'THE',
      bottomTitle2:'COMMUNITY',
      to:`To <br/> Showcases your work,<br/> Discover opportunities & <br/> Get Inspired`,
      horizontalLogo: HorizontalGrand,
      buttonName: 'Join The Community',
      buttonLink: '#',
    },
    {
      id: 2,
      title: 'For Those Who',
      subTitle: 'Love Art, Live Art',
      para: 'Bringing together artists and art spaces around the world',
      testiImage: HeroBanner,
      bottomTitle1: 'THE',
      bottomTitle2:'COMMUNITY',
      to:`To <br/> Showcases your work,<br/> Discover opportunities & <br/> Get Inspired`,
      horizontalLogo: HorizontalGrand,
      buttonName: 'Join The Community',
      buttonLink: '#',
    },
  ];

  // code for slider

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className={styles.banner_container}>
        <div className={className} {...rest}>
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
                <div className={styles.img_section}>
                  <img src={name.testiImage} alt={name.subTitle} />
                </div>
                <div className={styles.content_section}>
                  <div className={styles.title_part}>
                    <h5>{name.title}</h5>
                    <h1>
                      <span> {name.subTitle}</span>
                    </h1>
                    <p>{name.para}</p>
                  </div>
                  <div className={styles.horizontal_content}>
                    <h4>{name.bottomTitle1}<br /><b>{name.bottomTitle2}</b></h4>
                    <div className={styles.cont_letter} dangerouslySetInnerHTML={ {__html: name.to} } />
                  </div>
                  <blockquote>{name.content}</blockquote>
                  <div className={styles.horizontalBbrand}>
                    <img src={name.horizontalLogo} alt="#"/>
                  </div>
                  <Button className={styles.community_btn}>{name.buttonName}</Button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Banner;
