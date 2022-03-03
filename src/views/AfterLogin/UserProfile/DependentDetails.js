import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TableContainer, Table, IconButton, TableCell, TableRow, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { checkToken } from './../../../../src/components/helper/LoginCheck';

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

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

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

export default function DependentDetails() {
    const [dependents, setDependents] = React.useState({});

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
            fetch(
                `https://admindemo.onlineaarogya.com/api/patient/profile/dependents/163`,
                requestOptions,
            )
                .then(response => response.json())
                .then(response => console.log('ksjdkjfksdkgjkfdjjk', response.dependents))
                
                .catch(error => console.log('error', error));
        }
        console.log('ssssssssssssssssssssssd', dependents);
    }, [])

    return (
        <div>
            <DialogTitle id="customized-dialog-title">
                Family Dependents Details
            </DialogTitle>
            <DialogContent dividers>
                <TableContainer >
                    <Table aria-label="customized table">
                        <TableRow>
                            <TableCell colSpan={2}>Full Name </TableCell>
                            <TableCell align="right">{dependents.first_name}fdfsd</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </DialogContent>
        </div>
    );
}