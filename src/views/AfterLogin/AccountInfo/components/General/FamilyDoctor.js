
import React, { useEffect } from "react";
import { checkToken } from './../../../../../components/helper/LoginCheck';
import styles from './General.module.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@material-ui/core';

export default function FamilyDoctor() {
    const [familyDoctors, setFamilyDoctors] = React.useState([]);
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
            fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/getFamilyDoctor',
                requestOptions,
            )
                .then(response => response.json())
                .then(response => setFamilyDoctors(response.familyDoctors))
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
                method: 'HEAD',
                headers: myHeaders,
                redirect: 'follow'
            };
        fetch(process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/familyDoctor/${id}',requestOptions)
        .then(response => console.log(response))
        .then(data => console.log(data))
        .catch(error => console.error('Unable to get items.', id));
        }
    }


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
                            {familyDoctors.map((contain, index) => (
                                <TableRow key={contain.id}>
                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                    <TableCell align="left">{contain.title} {contain.first_name} {contain.middle_name} {contain.last_name}</TableCell>
                                    <TableCell align="left">{contain.email}</TableCell>
                                    <TableCell align="left">{contain.mobile}</TableCell>
                                    <TableCell align="left">{contain.gender}</TableCell>
                                    <TableCell align="left">{contain.specialization.name}</TableCell>
                                    <TableCell align="left" className={styles.button_list}>
                                        <IconButton aria-label="delete" onClick={()=>deleteDoctor(contain.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="Update" >
                                            <UpdateIcon />
                                        </IconButton>
                                        <IconButton color="View">
                                            <VisibilityIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}