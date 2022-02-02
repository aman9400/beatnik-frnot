import React from 'react';
import PropTypes from 'prop-types';
import styles from './PackageInfo.module.css';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
const PackageInfo = props => {
  const { className, ...rest } = props;
  return (
    <div className={styles.banner_container}>
      <div className={styles.video_consult_banner}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className={styles.acpl_zindex_zero}>
              <div className={styles.acpl_ihbox}>
                <div className={styles.acpl_ihbox_inner} data-name="1">
                  <img
                    src="https://www.ambiguousit.com/wp-content/uploads/2020/12/happy-clients.png"
                    alt="#"
                  />
                </div>
                <div className={styles.acpl_ihbox_contents}>
                  <div className={styles.acpl_ihbox_heading}>
                    <h2 className={styles.acpl_custom_heading}>
                      Encryption 
                    </h2>
                    <p>256 - bit</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.acpl_zindex_zero}>
              <div className={styles.acpl_ihbox}>
                <div className={styles.acpl_ihbox_inner} data-name="2">
                  <img
                    src="https://www.ambiguousit.com/wp-content/uploads/2020/12/happy-clients.png"
                    alt="#"
                  />
                </div>
                <div className={styles.acpl_ihbox_contents}>
                  <div className={styles.acpl_ihbox_heading}>
                    <h2 className={styles.acpl_custom_heading}>
                      ISO Certified
                    </h2>
                    <p>ISO 980099</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.acpl_zindex_zero}>
              <div className={styles.acpl_ihbox}>
                <div className={styles.acpl_ihbox_inner} data-name="3">
                  <img
                    src="https://www.ambiguousit.com/wp-content/uploads/2020/12/happy-clients.png"
                    alt="#"
                  />
                </div>
                <div className={styles.acpl_ihbox_contents}>
                  <div className={styles.acpl_ihbox_heading}>
                    <h2 className={styles.acpl_custom_heading}>
                      User Access Control
                    </h2>
                    <p>Centralized data</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={styles.acpl_zindex_zero}>
              <div className={styles.acpl_ihbox}>
                <div className={styles.acpl_ihbox_inner} data-name="4">
                  <img
                    src="https://www.ambiguousit.com/wp-content/uploads/2020/12/happy-clients.png"
                    alt="#"
                  />
                </div>
                <div className={styles.acpl_ihbox_contents}>
                  <div className={styles.acpl_ihbox_heading}>
                    <h2 className={styles.acpl_custom_heading}>
                      HIPAA
                    </h2>
                    <p>Compliant data center</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={styles.acpl_data_security_text}>
              <Typography variant="h2" gutterBottom>
                Your Data has only one owner. <em>You !</em>
              </Typography>
              <List className={styles.acpl_data_security_list} component="nav" aria-label="contacts">
                <ListItem>
                  <DoneAllIcon />
                  <ListItemText primary="Online Aarogya does not have access to your data." />
                </ListItem>
                <ListItem>
                  <DoneAllIcon />
                  <ListItemText primary="Online Aarogya does not sell or share your data with third party." />
                </ListItem>
                <ListItem>
                  <DoneAllIcon />
                  <ListItemText primary="Online Aarogya follow stringent policies so that data isn't comprised at any step." />
                </ListItem>
                <ListItem>
                  <DoneAllIcon />
                  <ListItemText primary="Online Aarogya follow stringent policies so that data isn't comprised at any step." />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.acpl_data_security}>
              <img
                src="https://cdn.dribbble.com/users/3002860/screenshots/7605435/media/6241de16a09640ead357d09ef8a8b7c5.gif"
                alt="#"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
PackageInfo.prototypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default PackageInfo;
