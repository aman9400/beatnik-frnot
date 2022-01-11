import React from 'react';
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
} from '@material-ui/core';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  title: {
    fontWeight: 700,
    marginTop: '20px',
    marginLeft: '12px',
  },
  iconWidth: {
    minWidth: '32px',
    color: '#ec3832',
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
  medifile_sideBar:{
    position: 'relative',
  },
}));

const Navbar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // Set Sidebar Menu Icon Color
  // MEdifiles Data sta

  const content = (
    <Box className={classes.medifile_sideBar} height="100%" display="flex" flexDirection="column">
      <Box p={2} paddingBottom={0}>
        <List>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/account-info`}
          >
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fas fa-user-alt"></i>
              </ListItemIcon>
              <ListItemText className="accountInfo" primary="Account Profile" />
            </ListItem>
          </Link>

          {/* <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/plans-subscriptions`}
          >
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fas fa-handshake-slash"></i>
              </ListItemIcon>
              <ListItemText primary="Subscription" />
            </ListItem>
          </Link> */}

          <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/family-member`}>
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fas fa-users"></i>
              </ListItemIcon>
              <ListItemText primary="Family Members" />
            </ListItem>
          </a>

          <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/family-doctor`}>
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fas fa-user-md"></i>
              </ListItemIcon>
              <ListItemText primary="Family Doctor" />
            </ListItem>
          </a>

          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/our-doctor`}>
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fas fa-user-md"></i>
              </ListItemIcon>
              <ListItemText primary="Our Doctor" />
            </ListItem>
          </Link>

          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/all-consultations`}
          >
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fas fa-calendar-check"></i>
              </ListItemIcon>
              <ListItemText primary="Consultation" />
            </ListItem>
          </Link>

          <ListItem button>
            <ListItemIcon className={classes.iconWidth}>
              <i class="fas fa-divide"></i>
            </ListItemIcon>
            <ListItemText primary="Offer" />
          </ListItem>

          <ListItem button onClick={handleClick}>
            <ListItemIcon className={classes.iconWidth}>
              <i class="fas fa-file-download"></i>
            </ListItemIcon>
            <ListItemText primary="Medifiles" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles`}>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ marginLeft: '14px' }}
                >
                  <ListItemIcon className={classes.iconWidth}>
                    <i class="far fa-file-alt"></i>
                  </ListItemIcon>
                  <ListItemText primary="Record" />
                </ListItem>
              </Link>

              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/setting`}>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ marginLeft: '14px' }}
                >
                  <ListItemIcon className={classes.iconWidth}>
                    <i class="fas fa-cog"></i>
                  </ListItemIcon>
                  <ListItemText primary="Setting" />
                </ListItem>
              </a>

              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/medifiles/plans-subscriptions`}
              >
                <ListItem
                  button
                  className={classes.nested}
                  style={{ marginLeft: '14px' }}
                >
                  <ListItemIcon className={classes.iconWidth}>
                    <i class="fas fa-handshake-slash"></i>
                  </ListItemIcon>
                  <ListItemText primary="Subscription" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <Divider />

          {/* <div>
            {' '}
            <Typography
              variant="button"
              color="textSecondary"
              className={classes.title}
            >
              Support
            </Typography>
          </div> */}
          {/* <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/account/customer-support`}
          >
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Log Complaint" />
            </ListItem>
          </Link> */}

          {/* <Link href="#">
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fa fa-gavel" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="Legal Information" />
            </ListItem>
          </Link> */}

          {/* <Link href="#">
            <ListItem button>
              <ListItemIcon className={classes.iconWidth}>
                <i class="fa fa-question-circle" aria-hidden="true"></i>
              </ListItemIcon>
              <ListItemText primary="FAQ's" />
            </ListItem>
          </Link> */}
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
  onMobileClose: () => {},
  openMobile: false,
};

export default Navbar;
