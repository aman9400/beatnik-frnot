
import React, { useEffect } from "react";
import { checkToken } from './../../../../../components/helper/LoginCheck';
import styles from './General.module.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import {
    Dialog,
    MuiDialogTitle,
    DialogContent,
    DialogActions,
    DialogTitle,
    IconButton,
    Typography,
    CloseIcon,
    MuiDialogActions,
    MuiDialogContent,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Grid,
} from '@material-ui/core';

export default function FamilyMember() {
    const [dependents, setDependents] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [singleMember, setSingleMember] = React.useState([]);
    const [dependent, setDependent] = React.useState([]);
const [singleDependent,setSingleDependent] = React.useState([]);
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const loginToken = checkToken();
        var myHeaders = new Headers();
        if (loginToken) {
            var bearerTokern = loginToken;
            var myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${bearerTokern}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
            };
            fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'patient/profile/dependents',
                requestOptions,
            )
                .then(response => response.json())
                .then(response => setDependents(response.dependents))
                .catch(error => console.log('error', error));
        }
    }, [])
    function deleteDoctor(id) {
        const loginToken = checkToken();
        var myHeaders = new Headers();
        if (loginToken) {
            var bearerTokern = loginToken;
            var myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${bearerTokern}`);
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/deleteDependent/${id}', requestOptions)
                .then(response => console.log(response))
                .then(data => console.log(data))
                .catch(error => console.error('Unable to get items.', id));
        }
    }


    function handleClickOpen(id) {
        setOpen(true);
        const loginToken = checkToken();
        var myHeaders = new Headers();
        if (loginToken) {
            var bearerTokern = loginToken;
            var myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${bearerTokern}`);
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/dependent/${id}', requestOptions)
                .then(response  => response.json())
                .then(data => console.log(data.dependent))
                .catch(error => console.error('Unable to get items.', id));
        }
    }
    const getPatientProfileDetails = async () => {
        var dependent = await setSingleMember();
        console.log('User Details', dependent);
        setSingleMember(dependent);
    };
    React.useEffect(() => {
        getPatientProfileDetails();
    }, []);
    return (
        <>
            <div className={styles.family_membeer}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>S No. </TableCell>
                                <TableCell align="left">Full Name </TableCell>
                                <TableCell align="left">E-mail ID</TableCell>
                                <TableCell align="left">Mobile No</TableCell>
                                <TableCell align="left">Gender</TableCell>
                                <TableCell align="left">Specialization</TableCell>
                                <TableCell align="left">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dependents.map((contain, index) => (
                                <TableRow key={contain.id}>
                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                    <TableCell align="left" className={styles.user_profile}><img src={contain.avatar_url} alt="#" /></TableCell>
                                    <TableCell align="left">{contain.title} {contain.first_name} {contain.last_name}</TableCell>
                                    <TableCell align="left">{contain.relation_ship.name}</TableCell>
                                    <TableCell align="left">{contain.gender}</TableCell>
                                    <TableCell align="left">{contain.age}</TableCell>
                                    <TableCell align="left" className={styles.button_list}>
                                        <IconButton aria-label="delete" onClick={() => deleteDoctor(contain.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="Update" >
                                            <UpdateIcon />
                                        </IconButton>
                                        <IconButton color="View" onClick={() => handleClickOpen(contain.id)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
{/* Single Dependent Data View */}
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </DialogTitle>
                    <DialogContent dividers>
{/* ============================ */}
<div className='view_table_data'>
                        <Grid container spacing={2}>
  <Grid item xs={6}>
    <div className='single_item'>
        <div className='icon_field'></div>
        <div className='data_item'>
            <div className='title'>Name</div>
            <div className='title_name'>
                
            </div>
            </div>

    </div>
  </Grid>
  </Grid>
                        </div>
{/* ============================ */}



                        <TableBody>

                            <TableRow>
                                <TableCell component="th" scope="row"></TableCell>
                                <TableCell align="left" className={styles.user_profile}>
                                    <img src={singleDependent.avatar_url} alt="#" />
                                </TableCell>
                                <TableCell align="left">
                                     {singleDependent.first_name} {singleDependent.last_name}
                                </TableCell>
                            
                            </TableRow>
                        </TableBody>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}