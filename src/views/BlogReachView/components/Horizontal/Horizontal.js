import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Avatar,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  cardProduct: {
    display: 'flex',
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-product__content, & .card-product__media': {
      flex: '1 1 50%',
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column !important',
      '& .card-product__content, & .card-product__media': {
        flex: '1 1 100%',
      },
    },
  },
  cardProductReverse: {
    flexDirection: 'row-reverse',
    '& .card-product__media img': {
      borderRadius: theme.spacing(0, 0, 0, 20),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.secondary.light,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));

const Horizontal = props => {
  // console.log('horizental', props.api_data);
  const { data, className, ...rest } = props;
  // console.log('props', props);

  // console.log('praveen', process.env.DB_HOST);

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
    <div className={classes.blogContent}>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography
        escapeHtml="false"
        variant="subtitle1"
        color="textSecondary"
        gutterBottom
      >
        {props.subtitle.substring(0, 400)}
      </Typography>
      <div className={classes.tags}>
        {props.tags.split(',').map((item, index) => (
          <Typography
            variant="caption"
            color="primary"
            className={classes.tag}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </div>
      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Avatar
            src={`${process.env.NEXT_PUBLIC_DB_HOST + props.user_picture}`}
            className={classes.avatar}
          />

          <Typography variant="body2" color="textPrimary">
            {props.name}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {props.created}
        </Typography>
      </div>
    </div>
  );

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {props.api_data.map((item, index) => (
          <Grid item xs={12} key={index} data-aos="fade-up">
            {/* <p>{item.title}</p> */}
            <CardProduct
              withShadow
              liftUp
              className={clsx(
                classes.cardProduct,
                index % 2 !== 0 ? classes.cardProductReverse : {},
              )}
              mediaContent={
                <>
                  <BlogMediaContent
                    src={
                      `${process.env.NEXT_PUBLIC_DB_HOST}` + item.field_image
                    }
                    alt={item.title}
                  />
                </>
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.body.replace(/<[^>]*>?/gm, '')}
                  name={item.field_full_name}
                  user_picture={item.user_picture}
                  created={item.created}
                  tags={item.field_tags}
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

Horizontal.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Horizontal;
