import * as React from 'react';
import { Box, Button, Modal } from '@material-ui/core';
import styles from "../../Dashboard.module.css";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 5
};

export default function BasicModal({ open, setOpen }) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.cp_modal_header}>
                        Create Portfolio
                    </div>
                    <div className={styles.cp_modal_body}>

                        <div
                            className={styles.cp_modal_body_options}
                        >
                            <div className={styles.cp_modal_options_item}>
                                <input type="radio" name="thisMustBeSame" id="modal_item_1" />
                                <label for="modal_item_1" >Artist</label>
                            </div>

                            <div className={styles.cp_modal_options_item}>
                                <input type="radio" name="thisMustBeSame" id="modal_item_2" />
                                <label for="modal_item_2" >Organization</label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cp_modal_footer}>
                        <Button
                            className={styles.cp_modal_footer_button}
                            onClick={handleClose}
                        >
                            Submit
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
