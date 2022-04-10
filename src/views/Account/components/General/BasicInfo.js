import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Divider,
  LinearProgress,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  IconButton,
  Avatar,
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
const BasicInfo = props => {

  return (
    <div className="praveenk">
        <Grid container spacing={3}>
          <h1>hjgjhgjgjhgjhh</h1>
        </Grid>
    </div>
  );
};

BasicInfo.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default BasicInfo;
