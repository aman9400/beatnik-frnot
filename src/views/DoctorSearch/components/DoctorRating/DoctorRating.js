import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  review_box: {
    textAlign: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff1f0',
    border: '1px solid #f1dbd8c2',
    borderRadius: '50px',
    width: '50%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  review_type: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'red',
  },
});
export default function DoctorRatingForm() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return (
    <div>
      <DialogTitle id="form-dialog-title">Customer Reviews </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Customer service reviews are comments written or spoken by people who
          have interacted with a company and had experiences worth sharing.
          Rather than reviewing a specific product or service, a customer
          service review emphasizes how the employees and policies of a company
          work together to meet the needs of the consumer.
        </DialogContentText>
        <Box className={classes.review_box}>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {value !== null && (
            <Box className={classes.review_type} ml={2}>
              {labels[hover !== -1 ? hover : value]}
            </Box>
          )}
        </Box>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          multiline
          label="Comment "
          type="email"
          fullWidth
        />
      </DialogContent>
    </div>
  );
}
