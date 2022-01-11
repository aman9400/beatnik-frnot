import React from 'react';
import PropTypes from 'prop-types';
import styles from './process.module.css';
import {
  Paper,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
} from '@material-ui/core';
import PNGImage from '../Images/click.png';
import Chat from '../Images/chat.png';
import Pointer from '../Images/pointer.png';
import Touch from '../Images/touch.png';
import DataSecurity from '../../../DoctorSearch/components/Images/draw-check-mark.png';
import ServerData from '../Images/server-copy.png';
import Quality from '../Images/quality-copy.png';
import FolderData from '../Images/folder-Recovered.png';

const WorkingProcess = props => {
  const { className, ...rest } = props;
  return (
    <div className={styles.banner_container}>
      <div className={styles.video_consult_banner}>
        <Grid container>
          <Grid item xs={6}>
            <Paper className={styles.work_process_step}>
              <div className={styles.steps_section}>
                <Typography variant="h3">How It Work</Typography>
              </div>
              <div className={styles.steps_timeline}>
                <div className={styles.steps_one}>
                  <span>
                    <img className={styles.steps_img} src={Chat} alt="" />
                  </span>
                  <Typography variant="h6">
                    Select a speciality or symptom
                  </Typography>
                </div>

                <div className={styles.steps_two}>
                  <span>
                    <img className={styles.steps_img} src={Pointer} alt="" />
                  </span>
                  <Typography variant="h6">
                    Audio / Video call with a verified doctor
                  </Typography>
                </div>

                <div className={styles.steps_three}>
                  <span>
                    <img className={styles.steps_img} src={Touch} alt="" />
                  </span>
                  <Typography variant="h6">
                    Get a digital prescription & a free follow-up{' '}
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        
          <Grid item xs={6}>
            <Paper className={styles.work_data_patch}>
              <Box>
                <div className={styles.card_container}>
                  <Card className={styles.card_container_inner}>
                    <CardContent className={styles.card_inner_holder}>
                      <img
                        className={styles.image_symbol}
                        src={FolderData}
                        alt=""
                      />
                      <Typography variant="h6" gutterBottom>
                        256 - bit
                      </Typography>

                      <Typography>Encryption</Typography>
                    </CardContent>
                  </Card>
                  <Card className={styles.card_container_inner}>
                    <CardContent className={styles.card_inner_holder}>
                      <img
                        className={styles.image_symbol}
                        src={Quality}
                        alt=""
                      />
                      <Typography variant="h6" gutterBottom>
                        256 - bit
                      </Typography>

                      <Typography>Encryption</Typography>
                    </CardContent>
                  </Card>
                  <Card className={styles.card_container_inner}>
                    <CardContent className={styles.card_inner_holder}>
                      <img
                        className={styles.image_symbol}
                        src={ServerData}
                        alt=""
                      />
                      <Typography variant="h6" gutterBottom>
                        256 - bit
                      </Typography>

                      <Typography>Encryption</Typography>
                    </CardContent>
                  </Card>
                </div>
                <div className={styles.card_down_container}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <div className={styles.vc_consultation_box}>
                      <Typography variant="h3">
                        Your data has only one <br />
                        owner.YOU!
                      </Typography>
                      <div className={styles.list_item}>
                        <ul>
                          <li><img src={DataSecurity} alt=""/>
                            Online Aarogya does not have access to your data.
                          </li>
                          <li><img src={DataSecurity} alt=""/>
                            Online Aarogya does not sell or share your data with
                            third party.
                          </li>
                          <li><img src={DataSecurity} alt=""/>
                            Online Aarogya follow stringent policies so that
                            data isn't comprised at any step.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={styles.data_security_img}>
                      <img src={PNGImage} alt="" />
                    </div>
                  </Grid>
                  </Grid>
                </div>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
WorkingProcess.prototypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default WorkingProcess;
