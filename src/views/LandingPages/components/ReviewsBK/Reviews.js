import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardProduct } from 'components/organisms';
import styles from './reviews.module.css';
const useStyles = makeStyles(theme => ({
  reviewAuthor: {
    fontWeight: 'bold',
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
  },
  authorPhoto: {
    width: '100%',
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(3),
  },
  swiperContainer: {
    position: 'relative',
  },
  swiperWrapper: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(7),
    },
  },
  swiperNav: {
    '& .swiper-button-prev, & .swiper-button-next': {
      width: theme.spacing(6),
      height: theme.spacing(6),
      padding: theme.spacing(3),
      background: theme.palette.primary.main,
      borderRadius: '100%',
      boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
      border: `2px solid ${theme.palette.background.paper}`,
      '&:after': {
        fontSize: 'initial',
        color: theme.palette.background.paper,
      },
    },
  },

  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    boxShadow: 'none',
    borderRadius: 6,
    '& .card-product__content': {
      padding: theme.spacing(2, 0, 0, 0),
    },
    '& .card-product__media': {
      height: 160,
      '& img': {
        height: 160,
      },
    },
  },
  image: {
    objectFit: 'cover',
    width:110,
    height:110,
    border: 'var(--border)',
    borderRadius:'50%',
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  blogTitle: {
    fontWeight: 700,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
}));

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isXs = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true,
  });

  React.useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: isXs ? 16 : 0,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
      },
    });
  });
  const dataArticle = [
    {
      cover: {
        src:
          'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg',
        srcSet:
          'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg 2x',
      },
      title: "Allergists/Immunologists",
      author: {
        photo: {
          src:
            'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
          srcSet:
            'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg 2x',
        },
        name: 'RK Sharma',
      },
      date: '04 Aug',
      tags: ['larq', 'bottle', 'shop', 'drinks', 'eco', 'self washing'],
    },
    {
      cover: {
        src:
          'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg',
        srcSet:
          'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg 2x',
      },
      title: 'Anesthesiologists',
      author: {
        photo: {
          src:
            'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
          srcSet:
            'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
        },
        name: 'RK Sharma',
      },
      date: '04 Aug',
      tags: ['nike', 'sport', 'shop', 'training'],
    },
    {
      cover: {
        src:
          'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
        srcSet:
          'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg 2x',
      },
      title: 'Cardiologists',
      author: {
        photo: {
          src:
            'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
          srcSet:
            'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
        },
        name: 'RK Sharma',
      },
      date: '04 Aug',
      tags: ['adidas', 'sport', 'shop', 'training'],
    },
    {
      cover: {
        src:
          'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg',
        srcSet:
          'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x',
      },
      title: 'Colon and Rectal Surgeons',
      author: {
        photo: {
          src:
            'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
          srcSet:
            'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
        },
        name: 'Veronica Adams',
      },
      date: '04 Aug',
      tags: ['coffee', 'cups', 'morning coffee', 'breakfast'],
    },
    {
      cover: {
        src:
          'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg',
        srcSet:
          'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x',
      },
      title: 'Dermatologists',
      author: {
        photo: {
          src:
            'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
          srcSet:
            'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
        },
        name: 'Veronica Adams',
      },
      date: '04 Aug',
      tags: ['coffee', 'cups', 'morning coffee', 'breakfast'],
    },
    {
      cover: {
        src:
          'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg',
        srcSet:
          'https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg 2x',
      },
      title: 'Endocrinologists',
      author: {
        photo: {
          src:
            'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
          srcSet:
            'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
        },
        name: 'Veronica Adams',
      },
      date: '04 Aug',
      tags: ['coffee', 'cups', 'morning coffee', 'breakfast'],
    },
  ];
  const BlogContent = props => (
    <div className={classes.blogContent}>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.blogTitle}
        gutterBottom
      >
        {props.title}
      </Typography>
      <Typography variant="caption" color="textPrimary">
        <i>
          {props.author.name} - {props.date}
        </i>
      </Typography>
    </div>
  );

  const BlogMediaContent = props => (
    <Image {...props} className={classes.image} />
  );

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="25+ Specialization"
        subtitle="Consult with top doctors across speciality."
        align="left"
      />
      <div className={clsx('swiper-container', classes.swiperContainer)}>
        <div className={clsx('swiper-wrapper', classes.swiperWrapper)}>
          {dataArticle.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <Grid className={styles.card_main} spacing={2} key={index} data-aos="fade-up">
                <CardProduct
                  className={styles.cardProduct}
                  mediaContent={
                    <BlogMediaContent {...item.cover} alt={item.title} />
                  }
                  cardContent={
                    <BlogContent
                      title={item.title}
                      subtitle={item.subtitle}
                      author={item.author}
                      date={item.date}
                      tags={item.tags}
                    />
                  }
                />
              </Grid>
            </div>
          ))}
        </div>

        {!isXs ? null : <div className="swiper-pagination" />}
        {isXs ? null : (
          <div className={classes.swiperNav}>
            <div className={clsx('swiper-button-prev')} />
            <div className={clsx('swiper-button-next')} />
          </div>
        )}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
