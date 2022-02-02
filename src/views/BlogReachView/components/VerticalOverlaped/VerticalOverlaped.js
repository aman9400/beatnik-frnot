import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Typography, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { CardProduct } from 'components/organisms';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    background: 'transparent',
    paddingBottom: theme.spacing(2),
    '& .card-product__content': {
      padding: theme.spacing(4),
      zIndex: 1,
      background: theme.palette.background.paper,
      width: '90%',
      margin: '0 auto',
      marginTop: theme.spacing(-6),
      borderRadius: theme.spacing(1),
      boxShadow: '0 3px 10px 2px rgba(0, 0, 0, 0.1)',
    },
    '& .card-product__media': {
      minHeight: 300,
      '& img': {
        transitionDuration: '.7s',
        transform: 'scale(1.0)',
      },
    },
    '&:hover': {
      '& .card-product__media img': {
        transform: 'scale(1.2)',
      },
    },
  },
  image: {
    objectFit: 'cover',
  },
  blogTitle: {
    fontWeight: 700,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.primary.main,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
  author: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
}));

const VerticalOverlaped = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = props => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = props => (
    <div>
      <div className={classes.tags}>
        {props.tags.split(',').map((item, index) => (
          <Typography variant="caption" className={classes.tag} key={index}>
            {item}
          </Typography>
        ))}
      </div>
      <Link href="blog/[postId]/[url]" as={'blog/' + props.nid + props.url}>
        <a>
          <Typography
            variant="h6"
            color="textPrimary"
            className={classes.blogTitle}
          >
            {props.title.substring(0, 100)}
          </Typography>
        </a>
      </Link>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.author}
      >
        <i>
          {props.name} - {props.created}
        </i>
      </Typography>
      <Typography variant="body1" color="textPrimary">
        {props.subtitle.substring(0, 300)}
      </Typography>
    </div>
  );

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {props.api_data.map((item, index) => (
          <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
            <CardProduct
              className={classes.cardProduct}
              mediaContent={
                <BlogMediaContent
                  src={`${process.env.NEXT_PUBLIC_DB_HOST}` + item.field_image}
                  alt={item.title}
                />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.body.replace(/<[^>]*>?/gm, '')}
                  name={item.field_full_name}
                  user_picture={item.user_picture}
                  created={item.created}
                  tags={item.field_tags}
                  url={item.view_node.substring(13)}
                  nid={item.nid}
                  // author={item.author}
                  // date={item.date}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

VerticalOverlaped.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default VerticalOverlaped;
