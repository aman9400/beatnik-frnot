import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import DoctorInformation from '../DoctorInfo/DoctorInfo';
import PatientInfo from '../PaitentInfo/PaitentInfo';
import PatientSummery from '../Summery/Summery';
import {
  Grid,
  Typography,
  Button,
  StepLabel,
  Step,
  Stepper,
  Paper,
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root_patient_info: {
    width: '100%',
    borderBottom: 'var(--border)',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  btn_group_stepper: {
    padding: '5px 20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
  }
}));
function getSteps() {
  return ['Patient Info', 'Summary'];
}
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PatientInfo />;
    case 1:
      return <PatientSummery />;
    default:
      return 'Unknown stepIndex';
  }
}
const DoctorBookingFrom = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const { data, className, ...rest } = props;
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={3} style={{ justifyContent: 'space-around' }}>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
          <Paper className={classes.paper}>
            <DoctorInformation />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
          <Paper className={classes.paper}>
            <div>
              <Stepper
                className={classes.root_patient_info}
                activeStep={activeStep}
                alternativeLabel
              >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div className={classes.patient_inner_data}>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed 1
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div className={classes.btn_group_stepper}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Pay Amount' : 'Next'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

DoctorBookingFrom.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default DoctorBookingFrom;
