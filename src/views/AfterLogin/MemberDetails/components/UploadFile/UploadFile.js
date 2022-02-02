
import { withStyles } from '@material-ui/core/styles';
import { DropzoneDialogBase,DropzoneArea } from 'material-ui-dropzone';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles,createTheme,  useTheme,
  MuiThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import  { useState,useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  TextField,
  Snackbar,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
} from '@material-ui/core';

const styless = makeStyles((theme) => ({
  root: {
    background: '#4caf50'
  }
}));


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

// CSS For Dialog Box and Dropzon box

const stylesss = makeStyles((theme) => ({
   diaLog :
   {
        position:"absolute",
        zIndex: '1301 !important',
        inset:"0px",
       
    },
   
  }
));

export default function CustomizedDialogs(props) {
    const classes = stylesss();

    const [open, setOpen] = React.useState(false);
      const [fileObjects, setFileObjects] = React.useState([]);

      const dialogTitle = () => (
        <>
          <span>Upload file</span>
          <IconButton
            style={{right: '12px', top: '8px', position: 'absolute'}}
            onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </>
      );
   
      const [opens, setOpens] = React.useState(false);
      const [filess, setFiless] = React.useState();

      const handleClickOpen = () => {
        setOpens(true);
       
      };
      const handleClose = () => {
        setOpens(false);
      };
      const handleData = () =>
      {
          var dt =  document.getElementById('myInput').textContent;  
          alert(dt)
      }


       const documentUpload = (values) =>
       {
        let data = new FormData();

        data.append('title', "Dheeraj");
        data.append('field_resume_c', values);
        data.append('email',"dys@email.com");
        data.append('body', "Hello I am Dheeraj");
        data.append('field_applied_for_', 363);
        console.log("Print value",values);
        console.log('dsds',values.resume);
        return fetch(
          `${process.env.NEXT_PUBLIC_DB_HOST}/api/post-contact`,
          {
            method: 'post',
 
            body: data,
          },
        )
          .then(response => response.json())
          .then(result => {
            console.log('Success:', result);

          })
          .catch(error => {
  
            console.log(error)
          });
       }


      const [mystatess,setMystate] = useState([]);

      const [autodata,setAutodat] = useState();

      const [value, setValue] = React.useState(null);

      const[bigarray,setBigarray]= useState([]);

 
      const addItemArray = () =>{

        setMystate([
           {"name":filess ? filess.[0].file.name : null},
           {"type":filess ? filess.[0].file.type : null},
           {"fileSize":filess ? filess.[0].file.size : null},
           
        ])

         console.log("This is Big Array",mystatess);

      }
        
   
       const [mystatesss,setMystates] = useState([]);

       console.log("Hello I am ",autodata)

       const addItemArrayss = ()=>
       {
          setMystates(autodata)
          console.log('My New Array will be like',mystatesss)
       }

       

  return (
 <div>
  <Grid item xs={12} lg={12}>
    <p style={{float: 'left',
    padding: '10px 20px',
    backgroundColor: '#f1f1f1 !important',
    width: '100%',
    border: 'var(--border)',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '20px',
    fontWeight:'600',
    }} variant="contained" color="primary" onClick={() => setOpen(true)}>
      Add New Medical Record 

    </p>
    
    <DropzoneDialogBase
        dialogTitle={dialogTitle()}
        acceptedFiles={['image/*','application/pdf','application/docs']}
        fileObjects={fileObjects}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        filesLimit={10}
        maxFileSize={50000000}
        open={open}
        dropzoneClass={classes.dropZones}
        onAdd={newFileObjs => {
          setFiless(newFileObjs)
          console.log('onAdd', newFileObjs);
          console.log('The File Name is',filess)
          setFileObjects([].concat(fileObjects, newFileObjs));
          handleClickOpen();
          addItemArray();
        
        }}
        onDelete={deleteFileObj => {
          console.log('onDelete', deleteFileObj);
        }}
        onClose={() => setOpen(false)}
        onSave={() => {
          console.log('onSave', fileObjects);
          documentUpload(fileObjects.[0].file)
          setOpen(false);
         
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />

      {/* Code for Dialog Box  */}
     
     <div style={{marginLeft:"478px"}} >
      <Dialog
        className={classes.diaLog}
        PaperProps={{
          style: {
            height:"400px",
            width:"350px"
          },
        }}
        open={opens}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"> 
        
        <DialogTitle id="alert-dialog-slide-title">{"Select Record"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           {/* <div id = "myInput">{filess ? filess.[0].file.name : null }</div>
           <div>{filess ? filess.[0].file.type : null }</div>
           <div>{filess ? filess.[0].file.size : null }</div> */}
         </DialogContentText>
          <Autocomplete
             disablePortal
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              onChange={(event, newValue) => {
                setAutodat(newValue);
              }}
              // value={(e)=>setAutodat(e.target.value)}
              onChange={(event, value) => setAutodat(value)}
              renderInput={(params) => <TextField   style={{ width: 300 }} {...params} label="Combo box" variant="outlined" />}
            />
          

        </DialogContent>
        <DialogActions>
          <Button onClick={addItemArrayss} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
       </div>
      {/* Auto Complete Box */}
      </Grid>
    </div>
  );
}

const top100Films = [
  { title: 'Sugar Report', year: 1994 },
  { title: 'Blood Report', year: 1972 },
  { title: 'Sample Data', year: 1974 },
  { title: 'Brain Test', year: 2008 },
  { title: 'Cold Report', year: 1957 },
 
];
