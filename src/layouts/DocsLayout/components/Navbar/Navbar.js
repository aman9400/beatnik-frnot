import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Hidden,
  List,
  ListItem,
  makeStyles,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
} from '@material-ui/core';
import { getPatientProfile } from '../../../../components/helper/PatientApi';
import styles from './Navbar.module.css';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const useStyles = makeStyles(theme => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 240,
    top: 60,
    height: 'calc(100% - 64px)',
    borderRight: '0px solid var(--heading-color)',
    backgroundColor: '#fff',
    boxShadow: '0 5px 5px rgb(0 0 0 / 35%)',
    overflow: 'hidden',
    height: '100%',
  },
  title: {
    fontWeight: 700,
    marginTop: '20px',
    marginLeft: '12px',
  },
  iconWidth: {
    minWidth: '32px',
    color: 'var(--theme-color)',
    fontSize: '16px',
  },
  navGroup: {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  navGroupTitle: {
    paddingBottom: 0,
  },
  medifile_sideBar: {
    position: 'relative',
  },
  nav_link: {
    color: 'var(--heading-color)',
    padding: '3px 15px !important',
  },
  nav_link_name: {
    '& span ': {
      fontSize: '14.5px',
      fontWeight: '600',
    },
  },
}));

const Navbar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [patientDetails, setPatientDetails] = useState([]);
  const handleClick = () => {
    setOpen(!open);
  };
  const getPatientProfileDetails = async () => {
    var doctorDatas = await getPatientProfile();
    // console.log('User Details', doctorDatas.patient_info.name);
    setPatientDetails(doctorDatas.patient_info);
  };
  React.useEffect(() => {
  
    getPatientProfileDetails();
  
  }, []);
  // Set Sidebar Menu Icon Color
  // MEdifiles Data sta

  const content = (
    <Box
      className={classes.medifile_sideBar}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box className={classes.side_bar_menu} paddingBottom={0}>
        <div className="dropdown user-pro-body text-center">
          <div className="user-pic">
            <img
              src={patientDetails.avatar_url}
              alt="user-img"
              className="avatar-xl rounded-circle mb-1"
            />
            <Tooltip title="You are Online." arrow placement="top">
              <div className="pulse"></div>
            </Tooltip>
          </div>
          <div className="user-info">
            <h5 className="mb-1">{patientDetails.name} </h5>
          </div>
        </div>
        <List className={styles.list_item}>
          <ListItem className={styles.nav_link} >
            <Link href="/account">
              <p className={styles.dashboard_data}>
                <ListItemIcon className={classes.iconWidth}>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText className={styles.page_title} primary="Dashboard" />
              </p>
            </Link>
          </ListItem>

          {/* <ListItem className={classes.nav_link} button onClick={handleClick}>
            <ListItemIcon className={classes.iconWidth}>
              <i className="fas fa-file-download"></i>
            </ListItemIcon>
            <ListItemText primary="Medifiles" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}medifiles`}>
                <ListItem
                  button
                  className={classes.nav_link}
                  style={{ marginLeft: '14px' }}
                >
                  <ListItemIcon className={classes.iconWidth}>
                    <i className="far fa-file-alt"></i>
                  </ListItemIcon>
                  <ListItemText
                    className={classes.nav_link_name}
                    primary="Record"
                  />
                </ListItem>
              </Link>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}account/account-info`}
              >
                <ListItem
                  className={classes.nav_link}
                  style={{ marginLeft: '14px' }}
                  button
                >
                  <ListItemIcon className={classes.iconWidth}>
                    <i className="fas fa-user-alt"></i>
                  </ListItemIcon>
                  <ListItemText
                    className={classes.nav_link_name}
                    primary="Account Profile"
                  />
                </ListItem>
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}medifiles/offer`}>
                <ListItem
                  button
                  className={classes.nav_link}
                  style={{ marginLeft: '14px' }}
                >
                  <ListItemIcon className={classes.iconWidth}>
                    <i className="fas fa-cog"></i>
                  </ListItemIcon>
                  <ListItemText
                    className={classes.nav_link_name}
                    primary="Offer"
                  />
                </ListItem>
              </Link>

              <Link
                className={classes.nav_link}
                href={`${process.env.NEXT_PUBLIC_BASE_URL}medifiles/plans-subscriptions`}
              >
                <ListItem
                  button
                  className={classes.nav_link}
                  style={{ marginLeft: '14px' }}
                >
                  <ListItemIcon className={classes.iconWidth}>
                    <i className="fas fa-handshake-slash"></i>
                  </ListItemIcon>
                  <ListItemText
                    className={classes.nav_link_name}
                    primary="Subscription"
                  />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <Divider /> */}
          <ListItem className={styles.nav_link} >
            <Link href="/account/all-consultations">
              <p className={styles.dashboard_data}>
                <ListItemIcon className={classes.iconWidth}>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText className={styles.page_title} primary="Appointment" />
              </p>
            </Link>
          </ListItem>
          <ListItem className={styles.nav_link} >
            <Link href="/account/medifiles">
              <p className={styles.dashboard_data}>
                <ListItemIcon className={classes.iconWidth}>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText className={styles.page_title} primary="Medifiles" />
              </p>
            </Link>
          </ListItem>
          <ListItem className={styles.nav_link} >
            <Link href="/account/visited-doctors">
              <p className={styles.dashboard_data}>
                <ListItemIcon className={classes.iconWidth}>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText className={styles.page_title} primary="Visited Doctor" />
              </p>
            </Link>
          </ListItem>
          <ListItem className={styles.nav_link} >
            <Link href="/account/offers">
              <p className={styles.dashboard_data}>
                <ListItemIcon className={classes.iconWidth}>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText className={styles.page_title} primary="Offers" />
              </p>
            </Link>
          </ListItem>
          <ListItem className={styles.nav_link} >
            <Link href="/account/my-subscription">
              <p className={styles.dashboard_data}>
                <ListItemIcon className={classes.iconWidth}>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText className={styles.page_title} primary="My Subscription" />
              </p>
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box p={2} paddingTop={0}></Box>
    </Box>
  );

  return (
    <>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

Navbar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

Navbar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false,
};

export default Navbar;
