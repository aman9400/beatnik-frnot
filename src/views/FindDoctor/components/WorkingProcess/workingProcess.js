import React from 'react';
import PropTypes from 'prop-types';
import styles from './workingProcess.module.css';
import { Grid, Container } from '@material-ui/core';
import { DescriptionCta } from 'components/molecules';
const WorkingProcess = props => {
  return (
    <>
      <React.Fragment>
        <div className={styles.workingProcess_main}>
          <Container fixed>
            <Grid
              md={8}
              justifyContent={'center'}
              className={styles.workingProcess_grid}
            >
              <DescriptionCta
                title="Working Process of Find Doctor"
                subtitle="Aliquam et dolor tincidunt odio consequat posuere et non purus. Sed enim lacus, tincidunt pellentesque justo sit amet lorem"
                align={'center'}
                justifyContent={'center'}
                titleProps={{
                  variant: 'h2',
                  color: 'textPrimary',
                  className: styles.title,
                }}
                subtitleProps={{
                  color: 'textPrimary',
                  noWrap: false,
                }}
                className={styles.descriptionCta}
                data-aos="fade-up"
              />
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className={styles.paper}>
                  <div class="icons2"></div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </React.Fragment>
    </>
  );
};

WorkingProcess.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default WorkingProcess;
