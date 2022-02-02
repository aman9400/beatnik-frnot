import React from 'react';
import styles from './paitent-info.module.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MedicalHistory from './medical-history';
import ListIcon from '@material-ui/icons/List';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {
  FormControl,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
} from '@material-ui/core';
import VideoCall from '../../../../Images/video.png';
import AudioCall from '../../../../Images/phone-call.png';
import WalkIN from '../../../../Images/home.png';
import ChatSer from '../../../../Images/chat.png';

const lists = [
  {
    key: 'inbox',
    label: 'Medical Problems',
    icon: ListIcon,
    items: [
      { key: 'nerves', label: 'Nerves Weakness', icon: DoneAllIcon },
      { key: 'hello', label: 'Hello World', icon: DoneAllIcon },
    ],
  },
  {
    key: 'allergies',
    label: 'Allergies',
    icon: ListIcon,
    items: [
      { key: 'DrugAllergy', label: 'Drug Allergy', icon: DoneAllIcon },
      { key: 'FoodAllergy', label: 'Food Allergy', icon: DoneAllIcon },
      { key: 'InsectAllergy', label: 'Insect Allergy.', icon: DoneAllIcon },
      { key: 'LatexAllergy', label: 'Latex Allergy', icon: DoneAllIcon },
      { key: 'MoldAllergy', label: 'Mold Allergy', icon: DoneAllIcon },
      { key: 'PetAllergy', label: 'Pet Allergy', icon: DoneAllIcon },
    ],
  },
  {
    key: 'familyHistory',
    label: 'Family History',
    icon: ListIcon,
    items: [
      { key: 'DrugAllergy', label: 'Drug Allergy', icon: DoneAllIcon },
      { key: 'FoodAllergy', label: 'Food Allergy', icon: DoneAllIcon },
      { key: 'InsectAllergy', label: 'Insect Allergy.', icon: DoneAllIcon },
      { key: 'LatexAllergy', label: 'Latex Allergy', icon: DoneAllIcon },
      { key: 'MoldAllergy', label: 'Mold Allergy', icon: DoneAllIcon },
      { key: 'PetAllergy', label: 'Pet Allergy', icon: DoneAllIcon },
    ],
  },
  {
    key: 'lifestyle',
    label: 'Life Style',
    icon: ListIcon,
    items: [
      { key: 'nerves', label: 'Nerves Weakness', icon: DoneAllIcon },
      { key: 'hello', label: 'Hello World', icon: DoneAllIcon },
    ],
  },
];
// const useStyles = makeStyles(theme => ({}));
const useStyles = theme => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={styles.root_patient_info_data}
      {...other}
    >
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const PatientInfo = props => {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const { data, className, ...rest } = props;

  const selectShortlistedApplicant = e => {
    const checked = e.target.checked;
    if (checked) {
      console.log('Checked');
    } else {
      console.log('UNChecked');
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Code to get URL Parameter in var 

  const params = new URLSearchParams(location.search);
  const getData = params.get('doctor_id');
  const appointmentID =  params.get('appointmentType');
  
  const appointmentDate =  params.get('appointmentDate');
  const consultAmount =  params.get('consultAmount');

  const startTime =  params.get('startTime');

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div className={styles.patient_info}>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Appointment Date & Time</FormLabel>
          <p>{appointmentDate}, {startTime}</p>
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Consultation Type</FormLabel>
          {appointmentID == '1' ? <p>Video </p> : '' }
          {appointmentID == '2' ? <p>Audio</p> : '' }
          {appointmentID == '3' ? <p>Chat</p> : '' }
          {appointmentID == '4' ? <p>Walk In</p> : '' }
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Consultation Fee</FormLabel>
          <p>
            <b>₹</b> {consultAmount}
          </p>
        </FormControl>

        <FormControl className={styles.patient_info_data}>
          <FormLabel>Appointment For</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onClick={e => {
              selectShortlistedApplicant(e);
            }}
          >
            <FormControlLabel
              className={styles.appoinment_for}
              value="male"
              control={<Radio />}
              label="You"
            />
          </RadioGroup>
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Medical History</FormLabel>
          <Button
            className={styles.view_history}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            <FindInPageIcon />
            {'  '} View{' '}
          </Button>
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel>Check Complaint</FormLabel>
          <TextField
            id="outlined-multiline-static"
            rows={4}
            placeholder="Chief Complaint"
            variant="outlined"
          />
        </FormControl>
        <FormControl className={styles.patient_info_data}>
          <FormLabel style={{marginBottom:'10px'}}>Attachments </FormLabel>
          <input
           
            id="contained-button-file"
            type="file"
          />
          <label  className={styles.upload_data} htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
        </FormControl>
      </div>
     
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Medical History
        </DialogTitle>
        <DialogContent dividers>
          <MedicalHistory lists={lists} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

PatientInfo.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default PatientInfo;