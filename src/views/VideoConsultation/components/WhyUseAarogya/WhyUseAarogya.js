import React from 'react';
import PropTypes from 'prop-types';
import styles from './WhyUseAarogya.module.css';
import { Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import CertifiedDoctor from './../Images/Certified-Doctors.png';
import TWX7 from './../Images/24-7.png';
import SaveTimeMoney from './../Images/Cast-Effective.png';
import CareGuaranteed from './../Images/100-Care-Guaranteed.png';
import Confidential from './../Images/Convenience.png';
import PrivateSecure from './../Images/Private-Secure-Consultation.png';
import Convenience from './../Images/Convenience.png';
import CastEffective from './../Images/Cast-Effective.png';

const WhyUseAarogya = props => {
  const { className, ...rest } = props;
  return (
    <div className={styles.why_use_aarogya}>
      <SectionHeader
        className={styles.product_box_title}
        title="Why Use Online Aarogya "
        align="center"
        data-aos="fade-up"
      />
      <div className={styles.why_use_aarogya_inner}>
        <Grid className={styles.why_use_aarogya_card} container spacing={3}>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={CertifiedDoctor} alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>Certified Doctors</h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={TWX7}
                  alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>24 * 7 access to Health Care </h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={SaveTimeMoney}
                  alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>Save Time & Money </h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={CareGuaranteed}
                  alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>100% Care Guaranteed </h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={Confidential}
                  alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>100% Confidential </h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={PrivateSecure}
                  alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>Private & Secure Consultation</h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={Convenience}
                  alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>Convenience </h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid className={styles.why_use_aarogya_card_inner} item xs={3}>
            <div className={styles.why_use_aarogya_single}>
              <div className={styles.why_use_aarogya_img}>
                <img
                  src={CastEffective}
                  alt="Custom icon"
                />
              </div>
              <div className={styles.why_use_aarogya_title}>
                <h5>Cast Effective</h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh
                  vel velit.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
WhyUseAarogya.prototypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default WhyUseAarogya;
