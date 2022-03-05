import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './../../../MedicineOrder/components/MedicineOrder.module.css';

import {
    Grid,
    Paper,
    Typography,
    MobileStepper,
    Button,
    makeStyles,
    useTheme,
    TextField,Box
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
const LabForm1 = props => {
    return (
        <div className="App">
            <form noValidate autoComplete="off">
                <div className={styles.fetch_pin_code}>
                    <TextField
                        className={styles.pin_code}
                        id="outlined-secondary"
                        variant="outlined"
                        color="secondary"
                        label="Enter PIN Code"
                    />
                    <Button className={styles.fetch_btn}>Fetch</Button>
                </div>

                <div className={styles.div_or}>OR</div>
                <Button className={styles.fetch_btn}>Geo Current Location </Button>
                <div className={styles.div_or}>OR</div>
                <div className={styles.location_list}>
                    <p>Location List </p>
                    <div className={styles.location_list}>
                        <div className={styles.grid}>
                            <label for="radio-card-1" className={styles.radio_card}>
                                <input
                                    type="radio"
                                    name="radio-card"
                                    id="radio-card-1"
                                    checked
                                />
                                <div className={styles.card_content_wrapper}>
                                    <span className={styles.check_icon}></span>
                                    <div className={styles.card_content}>
                                        <p>
                                            175/108, Landmark Business Hub, 1st floor,Tokarkhada
                                            Silvassa, Dadra & Nagar and Daman & Diu, 396230
                                        </p>
                                    </div>
                                </div>
                            </label>

                            <label for="radio-card-2" className={styles.radio_card}>
                                <input type="radio" name="radio-card" id="radio-card-2" />
                                <div className={styles.card_content_wrapper}>
                                    <span className={styles.check_icon}></span>
                                    <div className={styles.card_content}>
                                        <p>
                                            175/108, Landmark Business Hub, 1st floor,Tokarkhada
                                            Silvassa, Dadra & Nagar and Daman & Diu, 396230
                                        </p>
                                    </div>
                                </div>
                            </label>
                            <label for="radio-card-2" className={styles.radio_card}>
                                <input type="radio" name="radio-card" id="radio-card-2" />
                                <div className={styles.card_content_wrapper}>
                                    <span className={styles.check_icon}></span>
                                    <div className={styles.card_content}>
                                        <p>
                                            175/108, Landmark Business Hub, 1st floor,Tokarkhada
                                            Silvassa, Dadra & Nagar and Daman & Diu, 396230
                                        </p>
                                    </div>
                                </div>
                            </label>
                            <label for="radio-card-2" className={styles.radio_card}>
                                <input type="radio" name="radio-card" id="radio-card-2" />
                                <div className={styles.card_content_wrapper}>
                                    <span className={styles.check_icon}></span>
                                    <div className={styles.card_content}>
                                        <p>
                                            175/108, Landmark Business Hub, 1st floor,Tokarkhada
                                            Silvassa, Dadra & Nagar and Daman & Diu, 396230
                                        </p>
                                    </div>
                                </div>
                            </label>
                            <label for="radio-card-2" className={styles.radio_card}>
                                <input type="radio" name="radio-card" id="radio-card-2" />
                                <div className={styles.card_content_wrapper}>
                                    <span className={styles.check_icon}></span>
                                    <div className={styles.card_content}>
                                        <p>
                                            175/108, Landmark Business Hub, 1st floor,Tokarkhada
                                            Silvassa, Dadra & Nagar and Daman & Diu, 396230
                                        </p>
                                    </div>
                                </div>
                            </label>
                            <label for="radio-card-2" className={styles.radio_card}>
                                <input type="radio" name="radio-card" id="radio-card-2" />
                                <div className={styles.card_content_wrapper}>
                                    <span className={styles.check_icon}></span>
                                    <div className={styles.card_content}>
                                        <p>
                                            175/108, Landmark Business Hub, 1st floor,Tokarkhada
                                            Silvassa, Dadra & Nagar and Daman & Diu, 396230
                                        </p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

const UploadDOC = props => {
    return (
        <>
            <div className={styles.medicine_p_upload}>
                <p>Choose from the following to upload prescription:</p>
                <div className={styles.medicine_file}>
                    <input type="file" id="icon-button-file" />
                    <label for="icon-button-file" class={styles.file_type_label}>
                        <FileCopyIcon />
                        <p>Choose from gallery</p>
                    </label>
                </div>
                <div className={styles.others}>
                    <label for="icon-button-file" class={styles.file_type_label}>
                        <p>OR</p>
                    </label>
                </div>
                <div className={styles.medicine_file}>
                    <input type="file" id="icon-button-file" />
                    <label for="icon-button-file" class={styles.file_type_label}>
                        <FileCopyIcon />
                        <p>RX</p>
                    </label>
                </div>
                <div className={styles.others}>
                    <label for="icon-button-file" class={styles.file_type_label}>
                        <p>OR</p>
                    </label>
                </div>
                <div className={styles.add_prescription}>
                    <TextField
                        className={styles.prescription_data}
                        id="outlined-secondary"
                        variant="outlined"
                        color="secondary"
                        multiline
                        label="Enter Prescription in Details"
                        aria-label="minimum height"
                        minRows={3}
                    />
                </div>
            </div>
        </>
    );
};
const tutorialSteps = [
    {
        label: 'Current Location',
        imgPath: '<CurrentLocation />',
    },
    {
        label: 'Bird',
        imgPath: <UploadDOC />,
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));
const LabForm = props => {
    const { data, className, ...rest } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    return (
        <div className={styles.medicine_form}>
            <Box item xl={12} direction="column">
                <div className={styles.title_page}>
                    <Typography gutterBottom variant="h2">
                        Book Lab Test
                    </Typography>
                </div>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <div className={styles.medicine_prescription}>
                        <div className={styles.root}>
                            <Paper square elevation={0} className={styles.header}>
                                <MobileStepper
                                    steps={maxSteps}
                                    position="static"
                                    variant="text"
                                    activeStep={activeStep}
                                    backButton={
                                        <Button
                                            size="small"
                                            onClick={handleBack}
                                            disabled={activeStep === 0}
                                        >
                                            {theme.direction === 'rtl' ? (
                                                <KeyboardArrowRight />
                                            ) : (
                                                <KeyboardArrowLeft />
                                            )}
                                            Back
                                        </Button>
                                    }
                                />
                                <Typography>{tutorialSteps[activeStep].label}</Typography>
                            </Paper>
                            <div>{tutorialSteps[activeStep].imgPath}</div>

                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                variant="text"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={styles.medicine_prescription}>
                        <div className={styles.medicine_p_upload}>
                            <p>
                                Make sure the prescription you upload contains the following
                                elements:
                            </p>
                            <div className={styles.medicine_points}>
                                <div className={styles.item_sure}>
                                    <div className={styles.item_icon}>
                                        <img
                                            src="https://newassets.apollo247.com/images/upload_prescription/ic_doctor2.svg"
                                            alt="Doctor"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <p> Doctor Details </p>
                                </div>
                                <div className={styles.item_sure}>
                                    <div className={styles.item_icon}>
                                        <img
                                            src="https://newassets.apollo247.com/images/upload_prescription/ic_doctor2.svg"
                                            alt="Doctor"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <p> Doctor Details </p>
                                </div>
                                <div className={styles.item_sure}>
                                    <div className={styles.item_icon}>
                                        <img
                                            src="https://newassets.apollo247.com/images/upload_prescription/ic_doctor2.svg"
                                            alt="Doctor"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <p> Doctor Details </p>
                                </div>
                                <div className={styles.item_sure}>
                                    <div className={styles.item_icon}>
                                        <img
                                            src="https://newassets.apollo247.com/images/upload_prescription/ic_doctor2.svg"
                                            alt="Doctor"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <p> Doctor Details </p>
                                </div>
                                <div className={styles.item_sure}>
                                    <div className={styles.item_icon}>
                                        <img
                                            src="https://newassets.apollo247.com/images/upload_prescription/ic_doctor2.svg"
                                            alt="Doctor"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <p> Doctor Details </p>
                                </div>
                                <div className={styles.item_sure}>
                                    <div className={styles.item_icon}>
                                        <img
                                            src="https://newassets.apollo247.com/images/upload_prescription/ic_doctor2.svg"
                                            alt="Doctor"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <p> Doctor Details </p>
                                </div>
                                <div className={styles.item_sure}>
                                    <div className={styles.item_icon}>
                                        <img
                                            src="https://newassets.apollo247.com/images/upload_prescription/ic_doctor2.svg"
                                            alt="Doctor"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <p> Doctor Details </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={styles.medicine_prescription}>
                        <div className={styles.medicine_p_upload}>
                            <p>Benefits of uploading prescription</p>
                            <div className={styles.medicine_file_des}>
                                <div className={styles.medicine_info}>
                                    <a href="#">
                                        <img
                                            className="banner_img"
                                            src="https://www.netmeds.com/images/cms/offers/1633011773_Mobikwik_logo.png"
                                            title="Get max. Rs. 650 assured MobiKwik Cashback* "
                                            alt="Get max. Rs. 650 assured MobiKwik Cashback* "
                                        />
                                        <div className={styles.description}>
                                            <h2>Get max. Rs. 650 assured MobiKwik Cashback* ..</h2>
                                            <p>
                                                Get “Assured MobiKwik Cashback” between max. Rs. 650 and
                                                min. Rs. 50 on a minimum purchase of AN..
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.medicine_file_des}>
                                <div className={styles.medicine_info}>
                                    <a href="#">
                                        <img
                                            className="banner_img"
                                            src="https://www.netmeds.com/images/cms/offers/1633011773_Mobikwik_logo.png"
                                            title="Get max. Rs. 650 assured MobiKwik Cashback* "
                                            alt="Get max. Rs. 650 assured MobiKwik Cashback* "
                                        />
                                        <div className={styles.description}>
                                            <h2>Get max. Rs. 650 assured MobiKwik Cashback* ..</h2>
                                            <p>
                                                Get “Assured MobiKwik Cashback” between max. Rs. 650 and
                                                min. Rs. 50 on a minimum purchase of AN..
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.medicine_file_des}>
                                <div className={styles.medicine_info}>
                                    <a href="#">
                                        <img
                                            className="banner_img"
                                            src="https://www.netmeds.com/images/cms/offers/1633011773_Mobikwik_logo.png"
                                            title="Get max. Rs. 650 assured MobiKwik Cashback* "
                                            alt="Get max. Rs. 650 assured MobiKwik Cashback* "
                                        />
                                        <div className={styles.description}>
                                            <h2>Get max. Rs. 650 assured MobiKwik Cashback* ..</h2>
                                            <p>
                                                Get “Assured MobiKwik Cashback” between max. Rs. 650 and
                                                min. Rs. 50 on a minimum purchase of AN..
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.medicine_file_des}>
                                <div className={styles.medicine_info}>
                                    <a href="#">
                                        <img
                                            className="banner_img"
                                            src="https://www.netmeds.com/images/cms/offers/1633011773_Mobikwik_logo.png"
                                            title="Get max. Rs. 650 assured MobiKwik Cashback* "
                                            alt="Get max. Rs. 650 assured MobiKwik Cashback* "
                                        />
                                        <div className={styles.description}>
                                            <h2>Get max. Rs. 650 assured MobiKwik Cashback* ..</h2>
                                            <p>
                                                Get “Assured MobiKwik Cashback” between max. Rs. 650 and
                                                min. Rs. 50 on a minimum purchase of AN..
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

LabForm.propTypes = {
    /**
     * External classes
     */
    className: PropTypes.string,
    /**
     * data to be rendered
     */
    data: PropTypes.array.isRequired,
};

export default LabForm;
