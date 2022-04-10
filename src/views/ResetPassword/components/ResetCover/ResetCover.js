import React from 'react';
import ResetForm from '../ResetForm/ResetForm';
import styles from './../../../SigninCover/SigninCover.module.css';

const ResetCover = () => {
  return (
    <div>
      <section className={styles.signup__area}>
        <div className={styles.signup__full_container}>
          <div className={styles.signup__right_side}>
            <div className={styles.page__title}>
              <h2>Reset Password</h2>
              <p>Explore the Beatnik community</p>
              <div className={styles.longin_container}>
              <ResetForm/> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetCover;
