import React from 'react';
import styles from './patientConsult.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTheme } from '@material-ui/core/styles';
import {  Box, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';
import Fever from './../../../../../public/assets/Images/common/PatientConslt/Fever.png';
import JoinPain from './../../../../../public/assets/Images/common/PatientConslt/JoinPain.png';
import Headache from './../../../../../public/assets/Images/common/PatientConslt/Headache.png';
import Diarrhea from './../../../../../public/assets/Images/common/PatientConslt/Diarrhea.png';
import EyeProblem from './../../../../../public/assets/Images/common/PatientConslt/EyeProblem.png';
import Thyroid from './../../../../../public/assets/Images/common/PatientConslt/Thyroid.png';
import Dental from './../../../../../public/assets/Images/common/PatientConslt/Dental.png';
import Pregnancy from './../../../../../public/assets/Images/common/PatientConslt/Pregnancy.png';
import Overweight from './../../../../../public/assets/Images/common/PatientConslt/Overweight.png';
import Pimple from './../../../../../public/assets/Images/common/PatientConslt/Pimple.png';
import Depression from './../../../../../public/assets/Images/common/PatientConslt/Depression.png';
import Child from './../../../../../public/assets/Images/common/PatientConslt/Child.png';

const PatientConsult = props => {
  const { className, ...rest } = props;
  const theme = useTheme();
  const data = [
    {
      _id:1,
      content: 'Fever, Cold, Shaking Chills',
      imgAttribute: 'Fever, Cold, Shaking Chills',
      img: Fever,
      pathLink:'/find-doctor'
    },
    {
      _id:2,
      content: 'Join Pain Arthritis ',
      imgAttribute: 'Join Pain Arthritis ',
      img: JoinPain,
      pathLink:'/find-doctor'
      
    },
    {
      _id:3,
      content: 'Headache, Migraine',
      imgAttribute: 'Headache, Migraine',
      img:Headache,
        pathLink:'/find-doctor'
    },
    {
      _id:4,
      content: 'Diarrhea , Stomach Upset, Digestion Problem',
      imgAttribute: 'Diarrhea , stomach upset, digestion problem',
      img:Diarrhea,
        pathLink:'/find-doctor'
    },
    {
      _id:5,
      content: 'Eye Problem, Paid, Watery, Dryness',
      imgAttribute: 'Eye problem, paid, watery, dryness',
      img: EyeProblem,
      pathLink:'/find-doctor'
    },
    {
      _id:6,
      content: 'Obesity, Thyroid ',
      imgAttribute: 'Obesity, Thyroid',
      img:Thyroid,
        pathLink:'/find-doctor'
    },
    {
      _id:7,
      content: 'Dental Issues, Tooth Ache, Gum Bleeding',
      imgAttribute: 'Dental issues, Tooth Ache, Gum Bleeding',
      img:Dental,
        pathLink:'/find-doctor'
    },
    {
      _id:8,
      content: 'Overweight or Under weight problem in children',
      imgAttribute: 'Overweight or Under weight problem in children',
      img: Overweight,
      pathLink:'/find-doctor'
    },
    {
      _id:9,
      content: 'Period Doubts or Pregnancy',
      imgAttribute: 'Period Doubts or Pregnancy',
      img:Pregnancy,
        pathLink:'/find-doctor'
    },
    {
      _id:10,
      content: 'Acne, Pimple or Skin Issue',
      imgAttribute: 'Acne,Pimple or Skin Issue',
      img: Pimple,
      pathLink:'/find-doctor'
    },
    {   _id:11,
      content: 'Depression or Anxiety',
      imgAttribute: 'Depression or Anxiety',
      img:Depression,
        pathLink:'/find-doctor'
    },

    {
      _id:12,
      content: 'Child not feeling well',
      imgAttribute: 'Child not feeling well',
      img:Child,
        pathLink:'/find-doctor'
    },
  ];

  return (
    <div className={styles.patientConsult_container} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={styles.patientConsult_main_title}>
            <Typography
              className={styles.patientConsult_title}
            >
              Consult top doctors online for any health concern
            </Typography>
            <Typography
              className={styles.patientConsult_subtitle}
            >
              Private online consultations with verified doctors in all
              specialists
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={styles.patientConsult_inner}>
        {data.map(name => (
          <Grid
          container
            data-aos="zoom-in"
            className={styles.patientConsult_inner_con}
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={2}
          >
            <Box key={name._id} className={styles.patientConsult_inner_card}>
              <Link href={name.pathLink}>
                <div className={styles.card_color}>
                  <Box className={styles.img_card}>
                    <img src={name.img} alt={name.imgAttribute} />
                  </Box>
                  <Box className={styles.patient_content}>{name.content}</Box>
                </div>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

PatientConsult.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  // data: PropTypes.array.isRequired,
};

export default PatientConsult;
