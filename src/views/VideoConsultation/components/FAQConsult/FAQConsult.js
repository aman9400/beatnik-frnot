import React from 'react';
import styles from './FAQConsult.module.css';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const DownloadApp = () => {
  return (
    <>
      <div className={styles.faq_section}>
        <SectionHeader
          className={styles.faq_section_title}
          title="Frequently Asked Questions"
          align="center"
          data-aos="fade-up"
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  I have a new phone, how can I get the same Account back?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  • Download the App from Play store/App store on the new phone.<br />
                  • Use the same mobile number to login which was used previously, enter OTP.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  What happens if I don’t receive an OTP?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  • Make sure there is adequate network signal on your phone when you are registering the number. <br />
                  • Wait for 30 seconds for the OTP, if you don’t receive an SMS, tap the "Resend OTP" option that would become available after some time. Wait a while after you click on resend the OTP.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  Can I access my reports on a laptop/desktop?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  Yes, you can as UI of mobile application and web application is same.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  Which number should I use to Login?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  • You can login with any mobile number. <br />
                  • You can also use "Login with a different number" option if you want to switch to a different number in which case you want to create a new account.<br />
                  • We recommend that you use the number which you use with all your healthcare service providers so that all health related information/records are mapped to one Number & one Account.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  I am unable to access my already registered account. What should I do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  • Please make sure that the number used to Login is the one used at the time of registration, OTP will be sent on this number.<br />
                  • Also ensure Internet and Network connectivity.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                How do I report a Bug or Suggestion in the app? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                You can contact us using the App, from the settings menu, "Contact us" section. 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                How can I share my reports with someone who is not using this Application? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                You can share your records with another recipient using ONLINE AAROGYA or through other applications like messenger or emails. 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                I am unable to see any contacts when I want to share records further 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                Please go to the phone settings and provide permissions to the app to access your Contacts. 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                What kind of files can I upload? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                You can upload image files, click pictures from your phone camera or upload PDF reports into the app. You can also upload PDFs from your email labs directly into the app. 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                I have few MRI and CT scan in film and CD? How do I upload them? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                Get the Records converted into images in JPEG or PDF format at any Healthcare Service Provider and then you can easily upload.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={6}>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  I have changed my mobile number. How do I log into my previous account?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  • If you still have the old number, you can use the same to login.<br />
                  • If you wish to change your mobile number associated with the ONLINE AAROGYA account please write to <a href="mailto:support@onlineaarogya.com.">support@onlineaarogya.com.</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  Can I be logged into multiple devices at the same time?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  Although a user can be logged into multiple different devices at the same time, the changes made on one device may or may not be synced with the rest of the devices. We highly recommend our users to use the application on only one device at a time
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  How can I include my family's records in my account?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  • Login/Register using Mobile App or web App.<br />
                  • Go to My Profile. And then go to Family members and start adding.<br />
                  • Online Aarogya gives the flexibility to create new account of your family members by simply validating through OPT and the time of adding. Or you can still proceed without validating through OTP and can add their records.<br />
                  • We would recommend you to use separate accounts for individual family members for better identification and bifurcation of the records, whose copy they can share with you anytime using the sharing feature.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  What happens to my reports if I lose my phone?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  • You can retrieve the reports if you still have access to the registered mobile number by downloading the app again on your new phone. <br />
                  • If you need access to old reports using new number please write to <a href="mailto:support@onlineaarogya.com">support@onlineaarogya.com</a>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                  I want to change my mobile number that I use to log into the app, what should I do?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                  Please write to us on <a href="mailto:support@onlineaarogya.com ">support@onlineaarogya.com </a>
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                How do I put the data into Online Aarogya on my own? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                In the medifiles section.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                Can I see the medical records offline? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                While viewing, you have an option to download and save the record. After downloading, the record is available for you to use and view offline. 
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                I need to send a file to my doctor through Online Aarogya, how much time does it take? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                • The sharing of files on ONLINE AAROGYA happens instantly. If your Doctor is a Online Aarogya User, they receive an in-app notification from Online Aarogya. On clicking the notification they can view your shared records. <br/>
    • In case of non Online Aarogya users, records can be shared using other applications like messenger or emails
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion_main}>
              <AccordionSummary
                className={styles.accordion_summery}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_question}>
                Does the size of the file affects the time taken to share? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_answer}>
                <Typography>
                No! Once the files are available in the app, even if they are large imaging files, they can be shared with just a click and can be viewed directly on the phone. 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default DownloadApp;
