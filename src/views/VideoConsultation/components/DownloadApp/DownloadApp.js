import React from 'react';
import styles from './DownloadApp.module.css';
import QRCode from 'qrcode.react';
import { Grid, Button } from '@material-ui/core';
const DownloadApp = () => {
  return (
    <>
      <div className={styles.download_app_new}>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <div className={styles.app_card_con}>
              <div className={styles.app_card_img}>
                <img src="https://play-lh.googleusercontent.com/UlnkfPpbn4aF1n1XVVQoK1Gy3p0Q5LxBCJo5bGmOtreTCA8TcqaElCS8w8t6oVMtbg=w1280-h619-rw" />
              </div>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className={styles.download_app_title}>
              <h3>Download the Online Aarogya App</h3>
              <p>
                Book consultation with the best of the Doctors of your choice.
                Also choose the mode of consultation Video or in Clinic walk in
              </p>
              <ul className={styles.download_app_list}>
                <li>Easily organize and manage all patient requirement</li>
                <li>Simple and intuitive interface</li>
                <li>
                  The ability to provide video consultation and save individual
                  members for future consultation
                </li>
                <li>
                  The ability to upload your report from your mobile device for
                  detailed viewing and sharing
                </li>
              </ul>

              <div className={styles.download_section}>
                <p>Download our apps</p>

                <QRCode
                  className={styles.download_qr_code}
                  value="https://play.google.com/store/apps/details?id=com.aarogya"
                />
                <div className={styles.button_group}>
                  <Button
                    href="#contained-buttons"
                    mt={2}
                    style={{ backgroundColor: '#2d2d32', color: 'white' }}
                    size="large"
                    variant="contained"
                  >
                    <i
                      class="fab fa-google-play"
                      style={{ marginRight: '7px' }}
                    ></i>{' '}
                    Google Play{' '}
                  </Button>
                  <Button
                    href="#contained-buttons"
                    mt={2}
                    style={{
                      backgroundColor: '#2d2d32',
                      color: 'white',
                      marginLeft: '10px',
                    }}
                    size="large"
                    variant="contained"
                  >
                    {' '}
                    <i
                      class="fab fa-apple"
                      style={{ marginRight: '7px', fontSize: '20px' }}
                    ></i>
                    App Store
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default DownloadApp;
