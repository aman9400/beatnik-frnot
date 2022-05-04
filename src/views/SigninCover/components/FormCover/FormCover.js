import React from 'react';
import styles from './../../../SigninCover/SigninCover.module.css';
import Form from '../Form/Form';
import { Button } from '@material-ui/core';
// import GoogleIcona from './../../../../../public/assets/Images/banner/Google.png';
// // import Facebook from './../../../../../public/assets/Images/banner/Google.png';
const FormCover = () => {
  return (
    <div>
      <section className={styles.signup__area}>
        <div className={styles.signup__full_container}>
          <div className={styles.signup__right_side}>
            <div className={styles.page__title}>
              <h2>Log In</h2>
              <p>Explore the Beatnik community</p>

              <div className={styles.longin_container}>
                <div className={styles.login_button}>
                  <div className={styles.login_mode}>
                    <Button className={styles.google_mode}>
                      <img
                        // src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg"
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="Google Mode Of Login "
                      />
                    </Button>
                    <Button className={styles.facebook_mode}>
                      <img
                        // src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg"
                        src="https://image.similarpng.com/very-thumbnail/2020/04/Facebook-logo-with-white-circle-PNG.png"
                        alt="Google Mode Of Facebook "
                        style={{borderRadius: '50%'}}
                      />
                    </Button>
                  </div>
                </div>
                <div className={styles.divider}>
                  <span></span>
                  <b>OR</b>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormCover;
