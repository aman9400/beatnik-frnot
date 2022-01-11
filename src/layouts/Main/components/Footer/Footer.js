import React from 'react';
import styles from './footer.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Typography,
  Grid,
  ListItem,
  List,
  Box,
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 0),
    },
    background: 'var(--white)',
  },
  // url(./assets/Images/Footer_waves.svg)
  rootMode: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: '#fddbda',
  },

  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    margin: '0 auto',
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    marginTop: '-18px',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    position: 'relative',
    top: '-26px',
    left: '6px',
    marginRight: theme.spacing(1),
    color: '#5e5e64',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },

  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: '#ec3832',
    fontWeight: '600',
    fontSize: '15px',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgb(78 77 84)',
  },
  navLinkMode: {
    color: 'rgb(231 231 232)',
  },

}));

const Footer = props => {
  const { pages, themeMode, className, ...rest } = props;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  console.log('theme', props);

  const classes = useStyles();

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(
                themeMode === 'light' ? classes.navLink : classes.navLinkMode,
                'submenu-item',
              )}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, company, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={services} />
          <MenuGroup item={company} />
        </div>
        {/* <div style={isMd ? { marginLeft: '0px' } : { marginLeft: '40px' }}>
          <MenuGroup item={company} />
        </div> */}
        <div>
          <MenuGroup item={web} />
          <MenuGroup item={company} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      helpCenter,
      company,
      contact,
      blog,
      portfolio,
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
        </div>
        <div>
          <MenuGroup item={company} />
        </div>
        <div>
          <MenuGroup item={portfolio} />
          <MenuGroup item={blog} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  return (
    <div
      container
      {...rest}
      className={clsx(
        themeMode === 'light' ? classes.root : classes.rootMode,
        className,
      )}
    >
      <div container className={styles.footerContainer}>
        <Grid container spacing={4} className={styles.footerInnerContainer}>
          <Grid  xs={12} md={4}>
            <LandingPages />
          </Grid>
          <Grid xs={12} md={4}>
            <SupportedPages />
          </Grid>
          <Grid xs={12} md={2}>
            <Box
              mt={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <div
                style={{
                  padding: '8px',
                  backgroundColor: '#ffdede',
                  color: 'brown',
                  fontSize: 'medium',
                }}
              >
                {' '}
                <span style={{ marginRight: '8px' }}>Offer</span>
                <i class="fas fa-gift"></i>
              </div>
            </Box>

            <Box
              mt={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>Download App</Typography>
              <br />
            </Box>

            <Box
              mt={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <div
                style={{
                  height: '25px',
                  width: '25px',
                  padding: '',
                  borderRadius: '50%',
                  display: 'inline-block',
                  border: '1px solid #a3a3a3',
                  marginRight: '5px',
                }}
              >
                <center>
                  <i class="fab fa-apple"></i>
                </center>
              </div>
              <div
                style={{
                  height: '25px',
                  width: '25px',
                  padding: '',
                  borderRadius: '50%',
                  display: 'inline-block',
                  border: '1px solid #a3a3a3',
                }}
              >
                <center>
                  <i class="fab fa-google-play"></i>
                </center>
              </div>
            </Box>

            <Box
              mt={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>FOLLOW US</Typography>
              <br />
            </Box>

            <Box
              mt={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <div
                style={{
                  height: '25px',
                  width: '25px',
                  padding: '',
                  borderRadius: '50%',
                  display: 'inline-block',
                  border: '1px solid #a3a3a3',
                  marginRight: '5px',
                }}
              >
                <center>
                  <i class="fab fa-facebook-f"></i>
                </center>
              </div>
              <div
                style={{
                  height: '25px',
                  width: '25px',
                  padding: '',
                  borderRadius: '50%',
                  display: 'inline-block',
                  border: '1px solid #a3a3a3',
                  marginRight: '5px',
                }}
              >
                <center>
                  <i class="fab fa-instagram-square"></i>
                </center>
              </div>
              <div
                style={{
                  height: '25px',
                  width: '25px',
                  padding: '',
                  borderRadius: '50%',
                  display: 'inline-block',
                  border: '1px solid #a3a3a3',
                  marginRight: '5px',
                }}
              >
                <center>
                  <i class="fab fa-twitter"></i>
                </center>
              </div>
              <div
                style={{
                  height: '25px',
                  width: '25px',
                  padding: '',
                  borderRadius: '50%',
                  display: 'inline-block',
                  border: '1px solid #a3a3a3',
                }}
              >
                <center>
                  <i class="fab fa-google-play"></i>
                </center>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className={styles.bottom_footer}>
        <Grid item xl={12}>
          <p>
            Copyright @ 2021 All rights reserved.{' '}
            <Link href="#">Aarogya Consult Pvt. Ltd.</Link>{' '}
          </p>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
