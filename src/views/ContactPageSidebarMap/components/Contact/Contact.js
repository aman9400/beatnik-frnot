import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styles from './Contact.module.css';

const Contact = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        className={styles.contact_info_title}
        title="Contact details"
        subtitle="Our contact details. We carefully read and answer to all your questions."
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <Grid container spacing={1}>
        <Grid item xs={4} spacing={4}>
          <ListItem
            disableGutters
            data-aos="fade-up"
            className={styles.listItem}
          >
            <Link href="tel:+919760078301">
              <div className={styles.Contact_data}>
                <ListItemAvatar className={styles.contact_icon}>
                  <PhoneIcon />
                </ListItemAvatar>
                <ListItemText
                  className={styles.listItemText}
                  primary="Phone"
                  secondary="+91 8866126777"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                    component: 'p',
                  }}
                />
              </div>
            </Link>
          </ListItem>
        </Grid>
        <Grid item xs={4} spacing={4}>
          <ListItem
            disableGutters
            data-aos="fade-up"
            className={styles.listItem}
          >
            <Link href="mailto:hr@oaarogya.com">
              <div className={styles.Contact_data}>
                <ListItemAvatar className={styles.contact_icon}>
                  <MailIcon />
                </ListItemAvatar>
                <ListItemText
                  className={styles.listItemText}
                  primary="Email"
                  secondary="hr@oaarogya.com"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                    component: 'p',
                  }}
                />
              </div>
            </Link>
          </ListItem>
        </Grid>
        <Grid item xs={4} spacing={4}>
          <ListItem
            disableGutters
            data-aos="fade-up"
            className={styles.listItem}
          >
            <a target="_blank" href="https://goo.gl/maps/RqWBYhdrsZGUSjPh6">
              <div className={styles.Contact_data}>
                <ListItemAvatar className={styles.contact_icon}>
                  <LocationOnIcon />
                </ListItemAvatar>
                <ListItemText
                  className={styles.listItemText}
                  primary="Head Office"
                  secondary="802 Landmark Business Hub Silvassa, 396230"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                    component: 'p',
                  }}
                />
              </div>
            </a>
          </ListItem>
        </Grid>
      </Grid>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Contact;
