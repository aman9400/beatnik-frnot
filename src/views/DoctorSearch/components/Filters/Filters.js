import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DoctorFilter.module.css';
import { useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import { MultiSelect } from 'react-multi-select-component';

const options = [
  { label: 'Test 1', value: 'test1' },
  { label: 'Test 2', value: 'test2' },
  { label: 'Test 3', value: 'test3' },
  { label: 'Test 4', value: 'test4' },
  { label: 'Test 5', value: 'test5' },
  { label: 'Test 6', value: 'test6' },
];
const DoctorFilter = props => {
  const { data, className, ...rest } = props;

  const [selected, setSelected] = useState([]);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  // Checkbox Group
  const [flavors, setFlavors] = React.useState({
    video_Consult: true,
    audio_Consult: false,
    walk_in: false,
    chat_consult: false,
  });

  const {
    video_Consult,
    audio_Consult,
    walk_in,
    chat_consult,
    strawberry,
  } = flavors;

  const handleFlavorChange = event => {
    setFlavors({ ...flavors, [event.target.name]: event.target.checked });
  };
  // Our States
  const [value, setValue] = React.useState([0, 100]);
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);

  const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: theme => theme.palette.common.white,
            stroke: theme => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Date
            </Typography>
            <FormGroup className={styles.doctor_filte_list}>
              <TextField
                mt={2}
                id="date"
                label="Appointment Date"
                type="date"
                defaultValue="2017-05-24"
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormGroup>
          </div>
          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Doctor Gender
            </Typography>
            <FormGroup className={styles.doctor_filte_list}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={strawberry}
                    onChange={handleFlavorChange}
                    name="strawberry"
                  />
                }
                label="Male"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={strawberry}
                    onChange={handleFlavorChange}
                    name="strawberry"
                  />
                }
                label="Female"
              />
            </FormGroup>
          </div>
          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Consultation Language
            </Typography>
            <FormGroup className={styles.doctor_filte_list}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={strawberry}
                    onChange={handleFlavorChange}
                    name="strawberry"
                  />
                }
                label="English"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={strawberry}
                    onChange={handleFlavorChange}
                    name="strawberry"
                  />
                }
                label="Hindi"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={strawberry}
                    onChange={handleFlavorChange}
                    name="strawberry"
                  />
                }
                label="Gujarati"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={strawberry}
                    onChange={handleFlavorChange}
                    name="strawberry"
                  />
                }
                label="Marathi"
              />
            </FormGroup>
          </div>

          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Doctor Experience
            </Typography>
            <FormGroup className={styles.doctor_filte_list}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={video_Consult}
                    onChange={handleFlavorChange}
                    name="video_Consult"
                  />
                }
                label="2+ Experience"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={audio_Consult}
                    onChange={handleFlavorChange}
                    name="audio_Consult"
                  />
                }
                label="4+ Experience"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={walk_in}
                    onChange={handleFlavorChange}
                    name="walk_in"
                  />
                }
                label="6+ Experience"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={chat_consult}
                    onChange={handleFlavorChange}
                    name="chat_consult"
                  />
                }
                label="8+ Experience"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={chat_consult}
                    onChange={handleFlavorChange}
                    name="chat_consult"
                  />
                }
                label="10+ Experience"
              />
            </FormGroup>
          </div>
          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Consultation Type
            </Typography>
            <FormGroup className={styles.doctor_filte_list}>
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={video_Consult}
                    onChange={handleFlavorChange}
                    name="video_Consult"
                  />
                }
                label="Video Consult"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={audio_Consult}
                    onChange={handleFlavorChange}
                    name="audio_Consult"
                  />
                }
                label="Audio Consult"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={walk_in}
                    onChange={handleFlavorChange}
                    name="walk_in"
                  />
                }
                label="Walk In Consult"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    className={styles.doctor_check_bx}
                    checked={chat_consult}
                    onChange={handleFlavorChange}
                    name="chat_consult"
                  />
                }
                label="Chat Consult"
              />
            </FormGroup>
          </div>
          <div className={styles.doctor_filterBox}>
            <Typography
              variant="h5"
              gutterBottom
              className={styles.doctor_filte_Title}
            >
              Doctor Specialist
            </Typography>
            <FormGroup className={styles.doctor_filte_list}>
              <label>Select Specialist</label>
              <MultiSelect
                className={styles.doctor_multi_select}
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </FormGroup>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

DoctorFilter.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default DoctorFilter;
