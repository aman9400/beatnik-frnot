import React from 'react';
import clsx from 'clsx';
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

const useStyles = makeStyles(theme => ({
  root_som: {
    borderBottom: 'var(--border)',
    padding: '10px',
  },
  loginAvatar: {
    marginLeft: '9px',
    width: '30px',
    height: '30px',
    borderRadius: 4,
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
    top: '-17px',
    width: '130px',
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
  inner_header:{
position: 'relative',
height: '40px',
minHeight:'40px',
overflow: 'hidden',
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
    // notification1: {
    //   fontSize: 36,
    //   color: '#2d3748',
    // },
  }))(MenuItem);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Code for Right Dropdown menu ends

  return (
    <AppBar
      className={clsx(classes.root_som, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
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
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/* <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} /> */}
        <Hidden smDown>
          <List disablePadding className={classes.navigationContainer}>
            <ListItem
              className={clsx(classes.listItem, 'menu-item--no-dropdown')}
            >
              <Button
                className={classes.listItemText}
                component="a"
                variant="outlined"
                onClick={handleClick}
              >
                Praveen Singh
                <Avatar
                  variant="square"
                  className={classes.loginAvatar}
                  src="/broken-image.jpg"
                />
              </Button>
            </ListItem>
            <Box mt={2}>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </StyledMenuItem>
              </StyledMenu>
            </Box>
          </List>
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
