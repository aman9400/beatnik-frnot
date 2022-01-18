import React, { useState } from 'react';
import clsx from 'clsx';
import { getPatientProfile } from '../../../../components/helper/PatientApi';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  List,
  ListItem,
  Button,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { Image, DarkModeToggler } from 'components/atoms';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Encodr from 'encodr';
import Cookies from 'js-cookie';
import { checkToken } from '../../../../components/helper/LoginCheck';
import Topbar from '../../../Main/components/Topbar/Topbar';
import { useRouter } from 'next/router';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles(theme => ({
  root_som: {
    padding: '10px',
    boxShadow: '1px 1px 15px rgb(0 0 0 / 10%)',
  },
  loginAvatar: {
    marginLeft: '9px',
    width: '30px',
    height: '30px',
    borderRadius: 4,
    '& img ': {
      objectFit: 'contain !important',
    },
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    position: 'relative',
    height: 'auto',
    top: '-6px',
    width: '85px',
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    paddingRight: 0,
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  iconButton: {
    paddingRight: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  inner_header: {
    position: 'relative',
    height: '40px',
    minHeight: '40px',
    overflow: 'hidden',
  },
  notification: {
    width: '.55em',
    height: '.55em',
  },
  listItem: {
    padding: '0px !important',
    boxShadow: 'var(--bs-md)',
  },
  listItemText: {
    padding: '4px 10px !important',
    border: 'var(--border)',
    backgroundColor: '#e5e5e5',
  },
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  themeToggler,
  themeMode,
  ...rest
}) => {
  const classes = useStyles();
  //Code For Dashboard
  // Code for Right Dropdown  Menu
  const [patientDetails, setPatientDetails] = useState([]);
  const router = useRouter();
  const getPatientProfileDetails = async () => {
    var doctorDatas = await getPatientProfile();
    console.log('User Details', doctorDatas.patient_info.name);
    setPatientDetails(doctorDatas.patient_info);
  };
  React.useEffect(() => {
    //console.log('ssssssssssssssss',user)
    getPatientProfileDetails();
    console.log('ssssssssssssssss');
  }, []);
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles(theme => ({
    deleteIcon4: {
      '& svg': {
        fontSize: 100,
      },
    },
    root: {
      '&:focus': {
        backgroundColor: theme.palette.secondary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Code for Right Dropdown menu ends

  const logoutData = () => {
    Cookies.remove('token');
    const loginToken = checkToken();
    if (loginToken) {
      alert('Login Set');
    } else {
      router.push('/signin', undefined, { shallow: true });
    }
  };

  return (
    <AppBar
      className={clsx(classes.root_som, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
      {/* <Topbar/> */}
      <Toolbar className={classes.inner_header}>
        <div className={classes.logoContainer}>
          <a href="/" title="OnlineAarogya">
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
          </a>
        </div>

        <Box flexGrow={1} />
        <IconButton className="notification">
          <Badge color="primary" badgeContent={0} showZero>
            <NotificationsIcon className={classes.notification} />
          </Badge>
        </IconButton>
        <Hidden smDown>
          <List disablePadding className={classes.navigationContainer}>
            <ListItem
              className={clsx(classes.listItem, 'menu-item--no-dropdown')}
            >
              <Button
                className={classes.listItemText}
                component="a"
                onClick={handleClick}
              >
                {patientDetails.name}
                <Avatar
                  variant="square"
                  className={classes.loginAvatar}
                  src={patientDetails.avatar_url}
                />
              </Button>
            </ListItem>
          
          </List>
          <IconButton  className="log_out_button" onClick={logoutData} variant="outlined" color="primary" aria-label="delete">
            <ExitToAppIcon />
          </IconButton>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
            className={classes.iconButton}
            disableRipple
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default TopBar;
