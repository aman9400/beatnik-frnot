import React from 'react';
import { LearnMoreLink } from 'components/atoms';
import { Form } from './components';
import styles from './../SigninCover/SigninCover.module.css';
import { Grid } from '@material-ui/core';
import MetaTitle from 'components/helper/MetaTitle';
import BrandLogo from './../../../public/assets/Images/logo/online-aarogya-logo.png';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Link from 'next/link';
const SignupCover = () => {
  return (
    <div>
      <MetaTitle
        title={`Online Aarogya | Sign Up`}
        metaKeyWord="Online Consultation, Doctor Appointment Booing Online Aarogya"
        metaDescription="ACPL is a start-up in the field of medical healthcare including tele-medicine. The software platform will enable patients to search doctors for various specialties, check their profile, book appointment, and take consultation. The company is going to start the pilot launch by end of Aug 2021 and a full-scale launch of services by end of Oct 2021. The company’s mission is to create medical healthcare eco-system accessible, easier and better in terms of quality especially serving to the rural and non-metro geographies, which constitutes more than 75% of the population."
      />
      <div className={styles.sign_in_cover}>
        <Grid className={styles.main_account}>
          <Grid
            item
            className={styles.left_side_card}
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
          >
            <div className={styles.entry_cover_left}>
              <div className={styles.entry_cover_inner}>
                <div className={styles.top_strip_left}>
                  <h4 className={styles.brand_name_text}> Online Aarogya </h4>
                  <div className={styles.brand_logo}>
                    <Link href="/">
                      <img src={BrandLogo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className={styles.second_title_box}>
                  <div className={styles.head_title}>
                    <h1>
                      Welcome to <br />
                      <em>Online Aarogya</em>
                    </h1>
                    <h6>Please Sign In to Continue</h6>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className={styles.formContainer}>
              <div className={styles.login_board}>
                <div className={styles.login_container}>
                  <div className={styles.page_title}>
                    <div className={styles.page_title_inner}>
                      <h5>Register</h5>
                      <Link className={styles.link_up} href="/signin">
                        <LearnMoreLink
                          title="Sign In"
                          typographyProps={{ variant: 'h6' }}
                        ></LearnMoreLink>
                      </Link>
                    </div>
                  </div>
                  <Form />
                </div>
              </div>
              <div className={styles.company_info}>
                <div className={styles.login_contact}>
                  <p>
                    Why Not Speak Or Write To Our Team, We Will Be Happy To
                    Assist
                  </p>
                </div>
                <div className={styles.login_info_support}>
                  <Link href="tel:+91-8500456815">
                    <p>
                      <PhoneIphoneIcon />
                      +91-8500456815
                    </p>
                  </Link>
                  <Link href="mailto:support@onlineaarogya.com">
                    <p>
                      <MailOutlineIcon />
                      support@onlineaarogya.com
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignupCover;
