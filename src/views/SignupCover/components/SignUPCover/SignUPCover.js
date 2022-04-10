import React from 'react';
import styles from './../../../SigninCover/SigninCover.module.css';
import Form from '../Form/Form';
import { Button } from '@material-ui/core';

const SignUPCover = () => {
  return (
    <div>
      <section className={styles.signup__area}>
        <div className={styles.signup__full_container}>
          <div className={styles.signup__right_side}>
            <div className={styles.page__title}>
              <h2>Sign Up</h2>
              <p>Explore the Beatnik community</p>
              <div className={styles.longin_container}>
                <div className={styles.login_button}>
                  <div className={styles.login_mode}>
                    <Button className={styles.google_mode}>
                      <img
                        src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg"
                        alt="Google Mode Of Login "
                      />
                    </Button>
                    <Button className={styles.facebook_mode}>
                      <img
                        src="https://icon-library.com/images/google-g-icon/google-g-icon-12.jpg"
                        alt="Google Mode Of Facebook "
                      />
                    </Button>
                  </div>
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

export default SignUPCover;
