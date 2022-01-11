import React, { Suspense, lazy, useState, useEffect } from 'react';

import {
  Typography,
  Paper,
  Box,
  TextField, 
   Grid,
   Link,
   Divider ,
  Button,
  MenuItem,
} from '@material-ui/core';
// Picker

import MaterialTable, { MTableBodyRow } from 'material-table';
import { forwardRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import {getSupportTicket} from '../../../../../components/helper/PatientApi'
import {checkToken} from '../../../../../components/helper/LoginCheck'
import {raiseSupportTicket} from '../../../../../components/helper/PatientApi'

function CreateTicket() {
   
    
    const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
        overflow: 'hidden',
        // width:"960px",
      },
    },
    icon: {
      fontSize: '13px',
    },
    headerWidth: {
      width: '170px',
    },
    dailogTextField:
    {
      marginTop:"10px",
      width:"550px"
    },
    dilogBoxTypo:
    {
      fontWeight: 600,
      fontSize: "15px"
    },
    searchBoxBgCol:
    {
      backgroundColor:"rgb(222 222 222 / 38%)",
    },
    searchBox:
    {
      backgroundColor:"white",
      border: "none",
      padding:"14px",
      width:"550px",
      marginLeft:"60px",
      marginTop:"50px",
      boxShadow: "1px 2px 11px 2px rgb(0 0 0 / 20%)",
      height:"40px"
    },
    searchBoxBtn:
    {
      marginTop:"50px",
      backgroundColor:"white",
      boxShadow: "1px 2px 11px 2px rgb(0 0 0 / 20%)",
      height:"40px"
    },
    serachBoxText:{
       marginLeft:"250px",
       position:"absolute"
    }
  }));

  // Code for Dilog Box 
  const classes = useStyles();
 
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
   // Code for model box Select box 

   const [age, setAge] = React.useState('');
 
   const handleChanges = (event) => {
     setAge(event.target.value);
   };
 
   // Code for show category data in dropdown

   const [datas, setDatas] = useState([]);

    const supportTicket = async () =>
    {
      var showTicketData = await getSupportTicket();
      console.log("Data:",showTicketData.support_categories);
      setDatas(showTicketData.support_categories);
    }

    useEffect(() => {
        const loginToken = checkToken();
        if(loginToken)
        {
          supportTicket();
        }
        else
        {
          Router.push('/signin', undefined, { shallow: true })
        }
    }, [])


    // Code for Submit the Model Form Data


    const [formState, setFormState] = React.useState({
      isValid: false,
      values: {},
      touched: {},
      errors: {},
    });
  
    const [subming, setSubiting] = React.useState(false);
    const [status, setStatusBase] = React.useState('');
    const [progress,setProgress] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [clearform, setClearform] = React.useState('');
    const [submitbtn,setSubmitbtn] = React.useState(false);

    
    const handleChange = event => {
      event.persist();
  
      setFormState(formState => ({
        ...formState,
        values: {
          ...formState.values,
          [event.target.name]:
            event.target.type === 'checkbox'
              ? event.target.checked
              : event.target.value,
        },
        touched: {
          ...formState.touched,
          [event.target.name]: true,
        },
      }));
    };


    // Code for submit the form data
    const handleSubmit = async event => {
      event.preventDefault();
       setSubiting(true);
       if (formState.isValid) 
       {

         var data = JSON.stringify({"support_category_id":formState.values.bookingID,"ticket_subject":formState.values.subject,"ticket_description":formState.values.message});
       
           const res = await raiseSupportTicket(data);
           if(res.success)
           {
            setStatusBase('')
            setStatusBase({
            key: 22,
            status: 'success',
            msg:
              'Ticket has been created successfully.',
          });
         }
        else
        {
           alert('Error in the code ')
        }
      }
       
      setFormState(formState => ({
        ...formState,
        touched: {
          ...formState.touched,
          ...formState.errors,
        },
      }));
    };
    

  return (
         <div className="member-detail">
                <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{border: "0px solid rgba(236, 56, 50, 0.5)"}}>
                 <b>Create New Ticket</b>
                 </Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                  <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography color="primary"><b> Create New Ticket </b></Typography>
                  </DialogTitle>
                
                  <DialogContent dividers>
                  <div style={{width:"60px"}}> <Box bgcolor="primary.main" mt={-2} style={{height:"4px"}}></Box></div>
                  <form name="password-reset-form" method="post" onSubmit={handleSubmit}>   
                   <Box mb={2} mt={2}>
                     <Typography className={classes.dilogBoxTypo}>Category</Typography>
                     <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width:"550px",height:"5opx",marginTop:"10px"}}>
                       <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChanges}
                        label="Category"
                       >
                  
                      {datas.map((records,index)=> 
                        <MenuItem key={index} value={records.name}>{records.name}</MenuItem>
                      )}
                     
                      </Select>
                    </FormControl>
                    </Box>

                     <Box mb={2}> 
                     <Typography className={classes.dilogBoxTypo}>Booking ID</Typography>
                       <TextField
                        fullWidth
                        className={classes.dailogTextField}
                        label="Enter Booking ID*"
                        name="bookingID"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        type="text"
                        value={formState.values.bookingID || ''}
                       /></Box>

                     <Box mb={2}> 
                     <Typography className={classes.dilogBoxTypo}>Subject</Typography>
                       <TextField
                        fullWidth
                        className={classes.dailogTextField}
                        label="Enter Subject*"
                        name="subject"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        type="text"
                        value={formState.values.subject || ''}
                       />
                     </Box>

                     <Box mb={2}>
                      <Typography  className={classes.dilogBoxTypo}><b>Message</b></Typography>
                        <TextField
                        fullWidth
                        className={classes.dailogTextField}
                        label="Enter Message*"
                        name="message"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        type="text"
                        value={formState.values.message || ''}
                       />
                      </Box>
                   </form>

                  </DialogContent>

                  <DialogActions style={{backgroundColor:"#ececec"}}>
                   <Grid container>
                      <Grid item md={8} xs={12}>
                         <Box p={1} >  <Typography>Once You Submit our support tream will reach you through call</Typography></Box>
                      </Grid>   

                    <Grid item md={4} xs={12}>
                     <Box p={1} style={{marginLeft:"20px"}}  > 
                        <Button autoFocus onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button autoFocus onClick={handleClose} variant="contained" color="primary">
                           Submit
                        </Button>
                      </Box>
                     </Grid>
                     
                    </Grid> 
                   
                  </DialogActions>
                </Dialog>
    </div>
  );
}
export default CreateTicket;
