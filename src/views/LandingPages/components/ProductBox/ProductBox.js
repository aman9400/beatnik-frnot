import React from 'react';
import PropTypes from 'prop-types';
import styles from './productBox.module.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const ProductBox = props => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const data = [
    {
      authorPhoto: {
        src:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
        srcSet:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
      },
      authorName: 'Online Aarogya',
      authorOccupation: 'Growth Marketer, Crealytics',
      feedback:
        'Online Aarogya is medical consultation platform, which empowers patients to take consultation through the choice of their doctors, without geographical limitations.',
    },
    {
      authorPhoto: {
        src:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
        srcSet:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
      },
      authorName: 'Pet Aarogya',
      authorOccupation: 'Lead Generation, Alternative Capital',
      feedback:
        'A digital veterinary platform that offers online consultations to pet owners to offer advice and prescribe medications depending on their pets health.',
    },
    {
      authorPhoto: {
        src:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
        srcSet:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
      },
      authorName: 'MediFiles',
      authorOccupation: 'Head of Operations, Parkfield Commerce',
      feedback:
        'Your personal secure online locker to keep all your medical records digitally, which can be shared at your finger tip.',
    },
    {
      authorPhoto: {
        src:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
        srcSet:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
      },
      authorName: 'ShapeItUp',
      authorOccupation: 'Growth Marketer, Crealytics',
      feedback:
        'We believe every individual is unique in terms of metabolism, routine and hobbies. Combining technology and artificial intelligence.',
    },
    {
      authorPhoto: {
        src:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
        srcSet:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
      },
      authorName: 'Aarogya Mall',
      authorOccupation: 'Lead Generation, Alternative Capital',
      feedback:
        'Besides catering to the supply for lets talk, Pet aarogya, shapeitup and online aarogya, it provides various medical services to your door.',
    },
    {
      authorPhoto: {
        src:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
        srcSet:
          'https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg',
      },
      authorName: "Let's Talk",
      authorOccupation: 'Head of Operations, Parkfield Commerce',
      feedback:
        'At some point we all experience disturbing thoughts that holds us back, with online let’s talk aarogya, one can get help to discover and overcome these hindrance.',
    },
  ];

  return (
    <div className={className} {...rest}>
      <SectionHeader
        className={styles.product_box_title}
        title="Benefits of Online Consultation "
        align="center"
        data-aos="fade-up"
      />
      <Grid
        className={styles.benefits_container}
        container
        spacing={isMd ? 4 : 2}
      >
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            className={styles.benefits_cont}
            data-aos="fade-up"
          >
            <Grid className={styles.benefits_inner} container spacing={0}>
              <Grid className={styles.benefits_inner_data} item xs={12}>
                <ListItem className={styles.benefits_inner_list} key={index}>
                  <ListItemAvatar>
                    <img
                      alt="#"
                      variant="square"
                      className={styles.large}
                      {...item.authorPhoto}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        type="body1"
                        variant="h6"
                        style={{ fontWeight: 'bold' }}
                      >
                        {item.authorName}
                      </Typography>
                    }
                    secondaryTypographyProps={{
                      variant: 'body1',
                      noWrap: true,
                    }}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{item.feedback}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

ProductBox.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default ProductBox;
