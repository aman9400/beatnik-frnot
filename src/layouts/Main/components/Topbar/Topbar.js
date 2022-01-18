import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  Box,
  Grid,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 4,
  },
  listName: {
    marginRight: '10px',
    '&  $lastChild': { marginRight: '0px' },
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
  },
  upMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    height: '55px',
    padding: theme.spacing('10px', 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing('10px', 8),
    },
  },
  menuSubheading: {
    color: '#b9b9b9',
  },

  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },

  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
    fontWeight: 600,
    fontSize: '14px',
  },
  listItemTextMenu: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
    whiteSpace: 'nowrap',
    fontWeight: 600,
    fontSize: '15px',
  },

  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 200,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoImage: {
    position: 'relative',
    height: 'auto',
    width: '160px',
    display: 'block',
    top: '-14px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  pointer: {
    cursor: 'pointer',
  },
}));

const Topbar = ({
  themeMode,
  themeToggler,
  onSidebarOpen,
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);
  const router = useRouter();
  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Link href={page.href}>
              <Typography
                variant="body1"
                component="a"
                href={page.href}
                className={clsx(
                  classes.navLink,
                  'submenu-item',
                  classes.pointer,
                )}
                color="textSecondary"
                onClick={handleClose}
              >
                {page.title}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web, career } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={web} />
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
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
          <MenuGroup item={helpCenter} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={company} />
          <MenuGroup item={contact} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={blog} />
          <MenuGroup item={portfolio} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={settings} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signup} />
          <MenuGroup item={signin} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  const renderPages = id => {
    if (id === 'landing-pages') {
      return <LandingPages />;
    }
    if (id === 'supported-pages') {
      return <SupportedPages />;
    }
    if (id === 'account') {
      return <AccountPages />;
    }
  };

  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = e => {
    const header = document.querySelector('.toolbar');
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  const nameTopMenuBar = [
    {
      _id: 1,
      navTitle: 'For Corporates',
      navPath: '/corporate',
    },
    {
      _id: 2,
      navTitle: 'For Doctors',
      navPath: '/doctor',
    },
    {
      _id: 3,
      navTitle: 'For Patients',
      navPath: '/patients',
    },
  ];
  const namMenuBar = [
    {
      _id: 1,
      navTitle: 'Find Doctor',
      navPath: '/find-doctor',
    },
    {
      _id: 2,
      navTitle: 'Video Consultation',
      navPath: '/video-consultation',
    },
    {
      _id: 3,
      navTitle: 'In Clinic Consultation',
      navPath: '/clinic-consultation',
    },
    {
      _id: 4,
      navTitle: 'Packages',
      navPath: '/packages',
    },
    {
      _id: 5,
      navTitle: 'Medifiles',
      navPath: '/medifiles',
    },
    {
      _id: 6,
      navTitle: 'Data Security',
      navPath: '/data-security',
    },
    {
      _id: 7,
      navTitle: 'Contact us',
      navPath: '/contact-us',
    },
    {
      _id: 8,
      navTitle: 'Login/Sign-up',
      navPath: '/sign-up',
    },
  ];
  return (
    <div>
      <Grid
        container
        justify="flex-end"
        className={clsx(classes.toolbar, ' top_menu')}
      >
        {isMd ? (
          <Box mr={4}>
            <List disablePadding className={clsx(classes.toolbar)}>
              {nameTopMenuBar.map(menuTopName => (
                <Link
                  key={menuTopName._id}
                  href={menuTopName.navPath}
                  color="textPrimary"
                  variant="body1"
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  <Typography
                    variant="body1"
                    style={{
                      padding: '5px',
                      borderRadius: '2px',
                    }}
                    color="textPrimary"
                    className={clsx(
                      classes.listItemText,
                      'menu-item',
                      classes.pointer,
                      classes.navLink,
                    )}
                  >
                    {menuTopName.navTitle}
                  </Typography>
                </Link>
              ))}
            </List>
          </Box>
        ) : (
          <p></p>
        )}
      </Grid>
      <Toolbar
        disableGutters
        className={clsx(classes.toolbar, 'toolbar')}
        {...rest}
      >
        <div className={classes.logoContainer}>
          <Link href="/">
            <Image
              className={classes.logoImage}
              src={
                themeMode === 'light'
                  ? process.env.NEXT_PUBLIC_BASE_URL + '/assets/logo-blue.png'
                  : process.env.NEXT_PUBLIC_BASE_URL + '/assets/logo-blue.png'
              }
              alt="OnlineAarogya"
              lazy={false}
            />
          </Link>
        </div>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <List disablePadding className={classes.navigationContainer}>
            {namMenuBar.map(menuName => (
              <Link
                href={menuName.navPath}
                key={menuName._id}
                color="textPrimary"
                variant="body1"
                className={clsx(classes.listItemTextMenu, 'menu-item')}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={clsx(
                    classes.listItemTextMenu,
                    'menu-item',
                    classes.pointer,
                  )}
                >
                  {router.pathname == `${menuName.navPath}` ? (
                    <p
                      className={clsx(classes.listName)}
                      style={{
                        borderBottom: '2px solid red ',
                        padding: '20px 10px',
                        color: 'red',
                        background: '#fff4f2',
                      }}
                    >
                      {menuName.navTitle}
                    </p>
                  ) : (
                    <p
                      className={clsx(classes.listName)}
                      style={{ color: 'black' }}
                    >
                      {menuName.navTitle}
                    </p>
                  )}
                </Typography>
              </Link>
            ))}
          </List>
        </Hidden>
      </Toolbar>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
