import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  Box,
  Grid,
  Menu,
  MenuItem,
  Select,
  Avatar,
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import AddIcon from '@material-ui/icons/Add';
import Breadcrumb from '../Reusable/MediBreadcrumb';
import validator from 'validator';
import MetaTitle from '../../../components/helper/MetaTitle';
import UploadFile from './components/UploadFile';
import ShareIcon from '@material-ui/icons/Share';
import styles from './MemberDetails.module.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Swal from "sweetalert2"; 
import { checkToken } from '../../../components/helper/LoginCheck';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      overflow: 'hidden',
      // width:"960px",
    },
  },
  tableButton: {
    backgroundColor: '#e0e0e0',
    fontWeight: 600,
    padding: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#FF0010',
      color: 'white',
    },
    height: '27px',
    fontSize: '13px',
  },
  search: {
    background: '#ebeef1',
    padding: '3px 10px',
    borderRadius: '5px',
  },
  icon: {
    fontSize: '13px',
  },
  headerWidth: {
    width: '150px',
    backgroundColor: '#ebeef1',
    padding: '10px !important',
  },
}));

class MemberDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isDeleteUserDialogOpen: false,
      scroll: true,
      isUserFormDialogOpen: false,
      indexToDeleteOrUpdate: '',
      act: 0, //0-Create_User || 1-Update_User
    };
    this.userFormSubmit = this.userFormSubmit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.setAnchorEl = this.setAnchorEl.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // Create User Section Starts //

  handleOpenCreateUserDialog = () => {
    this.setState({ isUserFormDialogOpen: true });
  };

  handleCloseCreateUserDialog = () => {
    this.setState({ isUserFormDialogOpen: false, act: 0 });
  };

  userFormSubmit(event) {
    event.preventDefault();
    const act = this.state.act;
    const form = event.target;

    const patient_name = form.elements['patient_name'].value;
    const file_description = form.elements['file_description'].value;
    const source_of_file = form.elements['source_of_file'].value;
    const date_of_upload = form.elements['date_of_upload'].value;
    if (
      validator.trim(patient_name) === '' ||
      validator.trim(file_description) === '' ||
      validator.trim(source_of_file) === '' ||
      validator.trim(date_of_upload) === ''
    ) {
      alert('Please fill the Required Fields');
    } else {
      if (act === 0) {
        let users = this.state.users;
        let data = {
          patient_name,
          file_description,
          source_of_file,
          date_of_upload,
        };
        users.push(data);
        this.setState({ users: users, isUserFormDialogOpen: false });
      }
      if (act === 1) {
        let index = this.state.indexToDeleteOrUpdate;
        let users = this.state.users;
        const form = event.target;
        users[index].patient_name = form.elements['patient_name'].value;
        users[index].file_description = form.elements['file_description'].value;
        users[index].source_of_file = form.elements['source_of_file'].value;
        users[index].date_of_upload = form.elements['date_of_upload'].value;
        this.handleCloseCreateUserDialog();
      }
    }
  }

  renderCreateUserForm = () => {
    const act = this.state.act;
    let patient_name = '';
    let title = '';
    let buttonText = '';
    let file_description = '';
    let source_of_file = '';
    let date_of_upload = '';
    let disabled = false;
    if (act === 0) {
      title = 'Create User';
      buttonText = 'Create';
    }
    if (act === 1) {
      title = 'Update User';
      buttonText = 'Update';
      const index = this.state.indexToDeleteOrUpdate;
      let users = this.state.users[index];
      disabled = true;
      patient_name = users.patient_name;
      file_description = users.file_description;
      source_of_file = users.source_of_file;
      date_of_upload = users.date_of_upload;
    }

    return (
      <Dialog
        className={(styles.member_record_dialog, 'member_record_dialog')}
        scroll={this.scroll}
        open={this.state.isUserFormDialogOpen}
        onClose={this.handleCloseCreateUserDialog}
      >
        <DialogTitle className={styles.user_record_data} id="form-dialog-title">
          {title}
        </DialogTitle>
        <form onSubmit={this.userFormSubmit} noValidate autoComplete="off">
          <DialogContent dividers={this.scroll === 'paper'}>
            <DialogContentText>Enter User Details</DialogContentText>

            <div className="textFieldContainer">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    className={styles.input_field}
                    id="patient_name"
                    label="Patient Name"
                    variant="outlined"
                    defaultValue={patient_name}
                    disabled={disabled}
                    required
                  />

                  <div className={styles.input_field}>
                    <p>Upload Reports </p>
                    <UploadFile />
                  </div>
                  <TextField
                    className={styles.input_field}
                    id="file_description"
                    label="File Description"
                    variant="outlined"
                    defaultValue={file_description}
                    required
                  />

                  <TextField
                    className={styles.input_field}
                    id="source_of_file"
                    label="Source Of File"
                    variant="outlined"
                    type="number"
                    defaultValue={source_of_file}
                    required
                  />

                  <TextField
                    className={styles.input_field}
                    id="date_of_upload"
                    label="Date Of Upload"
                    variant="outlined"
                    defaultValue={date_of_upload}
                    required
                  />
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions className={styles.user_record_data_action}>
            <Button
              onClick={this.handleCloseCreateUserDialog}
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button color="primary" type="submit" variant="contained">
              {buttonText}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  };

  // Create User Section Ends //

  // Show User Details Section Starts //

  renderTableHead = () => {
    return (
      <TableHead>
        <TableRow className={styles.table_head}>
          <TableCell>Sr. No.</TableCell>
          <TableCell>Patient Name</TableCell>
          <TableCell>File Description</TableCell>
          <TableCell>Source of File</TableCell>
          <TableCell>Date Of Upload </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Share</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
    );
  };
  handleClick(event) {
    this.setAnchorEl(event.currentTarget);
  }
  setAnchorEl(value) {
    this.setState({
      anchorEl: value,
      open: !this.state.open,
    });
  }
  handleClose() {
    this.setAnchorEl(null);
  }
  HandleClick() {  
    Swal.fire({  
      title: 'Are you sure?',  
      text: 'Your order has been placed.',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Yes!'  
    });  
  }  
  renderMenu() {
    return (
      <Menu
        id="fade-menu"
        className={styles.share_sub_menu}
        anchorEl={this.state.anchorEl}
        open={this.state.open}
        onClose={this.handleClose}
      >
        <MenuItem target="_blank" onClick={this.handleClose}>
          <WhatsAppIcon />
          What's App
        </MenuItem>
        <MenuItem target="_blank" onClick={this.handleClose}>
          <WhatsAppIcon />
          What's App
        </MenuItem>
        <MenuItem target="_blank" onClick={this.handleClose}>
          <WhatsAppIcon />
          What's App
        </MenuItem>
        <MenuItem target="_blank" onClick={this.handleClose}>
          <WhatsAppIcon />
          What's App
        </MenuItem>
      </Menu>
    );
  }
  renderTableBody = () => {
    return (
      <TableBody>
        {this.state.users.map((user, index) => {
          return (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {' '}
                {index + 1}{' '}
              </TableCell>
              <TableCell>{user.patient_name}</TableCell>
              <TableCell>{user.file_description}</TableCell>
              <TableCell>{user.source_of_file}</TableCell>
              <TableCell>{user.date_of_upload}</TableCell>
              <TableCell>
                <b>Pending</b>
              </TableCell>
              <TableCell>
                <IconButton onClick={this.handleClick} aria-label="share">
                  <ShareIcon />
                </IconButton>
                {this.renderMenu()}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={this.handleOpenUpdateUserDialog.bind(this, index)}
                  variant="outlined"
                  color="secondary"
                  aria-label="Edit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={this.handleOpenDeleteUserDialog.bind(this, index)}
                  variant="outlined"
                  color="primary"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  onClick={this.HandleClick}
                  variant="outlined"
                  color="primary"
                  aria-label="delete"
                >
                  <OpenInNewIcon />
                </IconButton>
             
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell component="th" scope="row">
            1
          </TableCell>
          <TableCell>Som Nath Gupta</TableCell>
          <TableCell>
            <div className={styles.preview_img}>
              <AvatarGroup max={4}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg"
                />
              </AvatarGroup>
            </div>
          </TableCell>
          <TableCell>som-nath-gupta-blood-suger-report</TableCell>
          <TableCell>20/01/2022</TableCell>
          <TableCell>
            <b>Pending</b>
          </TableCell>
          <TableCell>
            <IconButton onClick={this.handleClick} aria-label="share">
              <ShareIcon />
            </IconButton>
            {this.renderMenu()}
          </TableCell>
          <TableCell>
            <IconButton variant="outlined" color="secondary" aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton variant="outlined" color="primary" aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton
                  
                  variant="outlined"
                  color="primary"
                  aria-label="delete"
                >
                  <OpenInNewIcon />
                </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  };

  // Show User Details Section Ends //

  //Update User Section Starts //

  handleOpenUpdateUserDialog = (index, event) => {
    this.setState({
      isUserFormDialogOpen: true,
      indexToDeleteOrUpdate: index,
      act: 1,
    });
  };

  // Update User Section Ends //

  // Delete User Section Starts //

  handleOpenDeleteUserDialog = (index, event) => {
    this.setState({
      isDeleteUserDialogOpen: true,
      indexToDeleteOrUpdate: index,
    });
  };

  handleCloseDeleteUserDialog = () => {
    this.setState({ isDeleteUserDialogOpen: false });
  };

  renderDeleteUserDialog = index => {
    return (
      <Dialog
        open={this.state.isDeleteUserDialogOpen}
        onClose={this.isDeleteUserDialogOpen}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this user ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.handleCloseDeleteUserDialog}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            onClick={this.deleteUser.bind(this, index)}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  deleteUser = index => {
    let users = this.state.users;
    users.splice(index, 1);
    this.setState({ users: users });
    this.handleCloseDeleteUserDialog();
  };

  //Delete User Section Ends //

  render() {
    const { isUserFormDialogOpen } = this.state;
    const { isDeleteUserDialogOpen } = this.state;
    const { indexToDeleteOrUpdate } = this.state;
    const { isUpdateUserDialogOpen } = this.state;
    return (
      <div className={styles.mdeifile_dashboard}>
        <div className="member-detail">
          <MetaTitle
            title={`Medifile Member Details | OnlineAarogya`}
            metaKeyWord=""
            metaDescription=""
          />

          <div className={styles.medifiles_pannel}>
            <div className={styles.medifile_dashboard}>
              <h3 className={styles.medifile_head}>
                Hi! Welcome to Medifiles{' '}
              </h3>
              <Breadcrumb url="Member Details" />
            </div>

            <Grid container className={styles.medifile_table_data}>
              <Grid item xs={12}>
                <div className={styles.root}>
                  <Paper elevation={0}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Box className={styles.table_name} display="flex">
                          <Typography variant="43" color="primary">
                            Members Details
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box className={styles.table_feature} display="flex">
                          <Select
                            labelId="demo-simple-select-label"
                            className={styles.select_member}
                            id="demo-simple-select"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                          >
                            <MenuItem value="showall">Select Member</MenuItem>
                            <MenuItem value="Johny">Johny</MenuItem>
                            <MenuItem value="Deba">Deba</MenuItem>
                            <MenuItem value="Ranju">Ranju</MenuItem>
                            <MenuItem value="Arjun">Arjun</MenuItem>
                          </Select>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleOpenCreateUserDialog}
                          >
                            <AddIcon /> Add User
                          </Button>
                        </Box>
                      </Grid>
                      <Grid className={styles.table_container}>
                        {isUserFormDialogOpen && this.renderCreateUserForm()}
                        <br /> <br />
                        <Table className="UserTable">
                          {this.renderTableHead()}
                          {this.renderTableBody()}
                        </Table>
                        {isDeleteUserDialogOpen &&
                          this.renderDeleteUserDialog(indexToDeleteOrUpdate)}
                        {isUpdateUserDialogOpen &&
                          this.renderCreateUserForm(indexToDeleteOrUpdate)}
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
export default MemberDetails;
