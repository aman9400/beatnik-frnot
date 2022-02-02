import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {
    Typography,
    Paper,
    TextField,
    Link,
    Fab,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
    Box
  } from '@material-ui/core';
  import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
  } from "@material-ui/pickers";
  
  import DateFnsUtils from "@date-io/date-fns";
  

const validationSchema = yup.object({
  first_name: yup
     .string('Enter your First Name')
    .required('First Name is required'),
  last_name: yup
    .string('Enter your Last Name')
    .required('Last Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
   mobile: yup
    .string('Enter your password')
    .min(10, 'Phone Number should be 10 characters length')
    .required('Mobile is required'),
  relationship: yup
    .string('Select Relationship')
    .required('Relationship is required'),
  martial_status: yup
    .string('Select Martial Status')
    .required('Martial Status is required'),

  date: yup
    .string('Select Date')
    .required('Date is required'),

  age: yup
    .string('Enter Age')
    .required('Age is required'),

  address: yup
    .string('Enter Address')
    .required('Address is required'),

  state: yup
    .string('State is required')
    .required('Select State'),

  city: yup
    .string('Select City')
    .required('City is required'),

  pincode: yup
    .string('Enter Pincode')
    .required('Pincode is required'),
});

const UpdateProfile = () => {
  const formik = useFormik({
    initialValues: {
      first_name:'',
      last_name:'',
      email: '',
      mobile: '',
      relationship:'',
      martial_status:'',
      age:'',
      address:'',
      state:'',
      city:'',
      pincode:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{padding: 30}}>
    <Grid container> 
     <Paper elevation={3} style={{ padding: 30,width:"920px" }} >
    
       <form onSubmit={formik.handleSubmit} > 
       <Grid container alignItems="flex-start"  spacing={3}>
        <Grid item xs={12} md={6}>
         <TextField fullWidth  variant="outlined"id="first_name" name="first_name" label="First Name" value={formik.values.first_name} onChange={formik.handleChange}  error={formik.touched.first_name && Boolean(formik.errors.first_name)}  helperText={formik.touched.first_name && formik.errors.first_name}/>
        </Grid>
        <Grid item xs={12} md={6}>
         <TextField fullWidth variant="outlined" id="last_name" name="last_name" label="Last Name" value={formik.values.last_name} onChange={formik.handleChange}  error={formik.touched.last_name && Boolean(formik.errors.last_name)}  helperText={formik.touched.last_name && formik.errors.last_name}/>
        </Grid>
        <Grid item xs={12} md={6}>
         <TextField fullWidth  variant="outlined"id="email" name="email" label="Email" value={formik.values.email} onChange={formik.handleChange}  error={formik.touched.email && Boolean(formik.errors.email)}  helperText={formik.touched.email && formik.errors.email}/>
        </Grid>
        <Grid item xs={12} md={6}>
         <TextField fullWidth variant="outlined" id="mobile" name="mobile" label="Mobile Number" value={formik.values.mobile} onChange={formik.handleChange}  error={formik.touched.mobile && Boolean(formik.errors.mobile)}  helperText={formik.touched.mobile && formik.errors.mobile}/>
        </Grid>
        
        
        <Grid item xs={12} md={3}>
        <TextField id="relationship" name="relationship"  select label="Relationship"  variant="outlined"  value={formik.values.relationship} onChange={formik.handleChange}  error={formik.touched.relationship && Boolean(formik.errors.relationship)}  helperText={formik.touched.relationship && formik.errors.relationship} fullWidth>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem>
                   Male
            </MenuItem>
            <MenuItem>
                   Female
            </MenuItem>
        </TextField>
         </Grid>

         <Grid item xs={12} md={3}>
         <TextField id="martial_status" name="martial_status" select label="Martial Status" variant="outlined"  value={formik.values.martial_status} onChange={formik.handleChange}  error={formik.touched.martial_status && Boolean(formik.errors.martial_status)}  helperText={formik.touched.martial_status && formik.errors.martial_status} fullWidth>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem>
                  Married
            </MenuItem>
            <MenuItem>
                   Unmarried
            </MenuItem>
        </TextField>
         </Grid>

         <Grid item xs={12} md={3}>
           <Box >
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
              </Box>
         </Grid>

         <Grid item xs={12} md={3}>
           <Box >
            <TextField fullWidth variant="outlined" id="age" name="age" label="Age" value={formik.values.age} onChange={formik.handleChange}  error={formik.touched.age && Boolean(formik.errors.age)}  helperText={formik.touched.age && formik.errors.age}/>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box> <TextField  variant="outlined" rows={10}  id="address" name="address" value={formik.values.address} onChange={formik.handleChange}  error={formik.touched.address && Boolean(formik.errors.age)}  helperText={formik.touched.address && formik.errors.address} fullWidth   multiline label="Address"/></Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
           <TextField id="state"  select label="State"  variant="outlined" value={formik.values.state} onChange={formik.handleChange}  error={formik.touched.state && Boolean(formik.errors.state)}  helperText={formik.touched.state && formik.errors.state} fullWidth   multiline label="State" fullWidth >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem>
                   Male
            </MenuItem>
            <MenuItem>
                   Female
            </MenuItem>
          </TextField>
      
         <TextField id="city" margin="normal"  select label="City"  variant="outlined" value={formik.values.city} onChange={formik.handleChange}  error={formik.touched.city && Boolean(formik.errors.city)}  helperText={formik.touched.city && formik.errors.city} fullWidth   multiline label="State" fullWidth>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem>
                   Male
            </MenuItem>
            <MenuItem>
                   Female
            </MenuItem>
          </TextField>
           </Box>
          <TextField fullWidth margin="normal" variant="outlined" id="mobile"  name="mobile" label="Zip/Postal Code" value={formik.values.mobile} onChange={formik.handleChange}  error={formik.touched.mobile && Boolean(formik.errors.mobile)}  helperText={formik.touched.mobile && formik.errors.mobile}/>
         </Grid>

        <Grid item xs={12} md={12}>
          <Button color="primary" variant="contained" fullWidth type="submit">
           Submit
         </Button>
        </Grid>
       
        </Grid>
      </form>
      </Paper> 
     </Grid>
    </div>
  );
};

export default UpdateProfile;
