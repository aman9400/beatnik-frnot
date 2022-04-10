import React, { useState } from 'react';
import styles from './General.module.css';
import {
  useMediaQuery,
  makeStyles,
  useTheme,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  LinearProgress,
  MenuItem,
  IconButton,
  Avatar,
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';

import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
  KeyboardDatePicker,
  DateTimePicker,
} from '@material-ui/pickers';
import Medical from './Medical';
import FamilyMember from './FamilyMember';
import MetaTitle from '../../../../../components/helper/MetaTitle';
import BasicInfo from './BasicInfo';
import FamilyDoctor from './FamilyDoctor';
import FamilyMemberEdit from './FamilyMemberEdit';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    width: '100%',
  },
  tabHeader: {
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
    backgroundColor: theme.palette.background.white,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  profileImage: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
}));

// code for Tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const General = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // code for tabs and
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [imgPreview, setImgPreview] = useState('');

  return (
    // <div className={className} {...rest}>
    <div className={styles.som_account_info}>
      <MetaTitle
        title={`Account Info | OnlineAarogya`}
        metaKeyWord=""
        metaDescription=""
      />
      <AppBar position="static" color="" className={classes.tabHeader}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className="account_info_profile"
        >
          <Tab label="Basic Info" {...a11yProps(0)} />
          <Tab label="Medical History" {...a11yProps(1)} />
          <Tab label="Family Members" {...a11yProps(2)} />
          <Tab label="Family Doctor" {...a11yProps(3)} />
          <Tab label="Family Members Edit" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicInfo/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Medical />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FamilyMember/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FamilyDoctor/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FamilyMemberEdit/>
      </TabPanel>
    </div>
    // </div>
  );
};

General.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default General;
