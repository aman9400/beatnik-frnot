import React from 'react';
import styles from './Benefit.module.css';
import { Grid, Box, Typography } from '@material-ui/core';

export default function Benefit() {
  return (
    <div className={styles.benefits_section}>
      <Grid>
        <Grid md={6} style={{ margin: '0 auto' }}>
          <div className={styles.benefit_title}>
            <Typography gutterBottom variant="h2">
              Benefit Of Online Aarogya
            </Typography>
            <Typography gutterBottom variant="div">
              Aliquam et dolor tincidunt odio consequat posuere et non purus.
              Sed enim lacus, tincidunt pellentesque justo sit amet lorem
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid spacing={3} className={styles.full_container}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={styles.benefit_container}>
            <div className={styles.benefit_inner_container}>
              <div className={styles.benefit_single_block}>
                <div className={styles.single_block_inner}>
                  <div className={styles.single_first_top}>
                    <div className={styles.icons}>
                      <div className={styles.img_wrapper}>
                        <img
                          src="http://rayoflightthemes.com/wordpress-themes/vaxi-wordpress-theme/wp-content/uploads/2021/10/3-1.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.text_wrapper}>
                        <h3>Safe &amp; Effective</h3>
                        <p>Maecenas vel nibh aliquet lectus</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.single_block_inner}>
                  <div className={styles.single_first}>
                    <div className={styles.icons}>
                      <div className={styles.img_wrapper}>
                        <img
                          src="http://rayoflightthemes.com/wordpress-themes/vaxi-wordpress-theme/wp-content/uploads/2021/10/3-1.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.text_wrapper}>
                        <h3>Safe &amp; Effective</h3>
                        <p>Maecenas vel nibh aliquet lectus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.benefit_middle_container}>
              <div className={styles.middle_inner}>
                <div className={styles.image_part}>
                  <img
                    width="522"
                    height="516"
                    src="http://rayoflightthemes.com/wordpress-themes/vaxi-wordpress-theme/wp-content/uploads/2021/09/Img1.png"
                    className="attachment-large size-large"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className={styles.benefit_inner_container}>
              <div className={styles.benefit_single_block}>
                <div className={styles.single_block_inner}>
                  <div className={styles.single_first_right}>
                    <div className={styles.icons}>
                      <div className={styles.img_wrapper}>
                        <img
                          src="http://rayoflightthemes.com/wordpress-themes/vaxi-wordpress-theme/wp-content/uploads/2021/10/3-1.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.text_wrapper}>
                        <h3>Safe &amp; Effective</h3>
                        <p>Maecenas vel nibh aliquet lectus</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.single_block_inner}>
                  <div className={styles.single_right_bottom}>
                    <div className={styles.icons}>
                      <div className={styles.img_wrapper}>
                        <img
                          src="http://rayoflightthemes.com/wordpress-themes/vaxi-wordpress-theme/wp-content/uploads/2021/10/3-1.png"
                          alt=""
                        />
                      </div>
                      <div className={styles.text_wrapper}>
                        <h3>Safe &amp; Effective</h3>
                        <p>Maecenas vel nibh aliquet lectus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.working_process}>
            <Grid container spacing={3}>
              <Grid xs={6} sm={3} md={3} lg={3} xl={3}>
                <div className={styles.working_box}>
                  <div class={styles.icons_box}>
                    <div class={styles.step}>
                      <div><h4>1. </h4></div>
                      <div><h2>Sign up for free</h2>
                        <p>Nam rhoncus nisl purus, ac lobortisamet dapibus malesuada</p> </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} xl={3}>
              <div className={styles.working_box}>
                  <div class={styles.icons_box}>
                    <div class={styles.step}>
                      <div><h4>2. </h4></div>
                      <div><h2>Search Doctor</h2>
                        <p>Nam rhoncus nisl purus, ac lobortisamet dapibus malesuada</p> </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} xl={3}>
              <div className={styles.working_box}>
                  <div class={styles.icons_box}>
                    <div class={styles.step}>
                      <div><h4>3. </h4></div>
                      <div><h2>Book Slots</h2>
                        <p>Nam rhoncus nisl purus, ac lobortisamet dapibus malesuada</p> </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={6} sm={3} md={3} lg={3} xl={3}>
              <div className={styles.working_box}>
                  <div class={styles.icons_box}>
                    <div class={styles.step}>
                      <div><h4>4. </h4></div>
                      <div><h2>Conform Appointments</h2>
                        <p>Nam rhoncus nisl purus, ac lobortisamet dapibus malesuada</p> </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
