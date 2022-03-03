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
      title:'GENERAL PHYSICIAN',
      content: 'Fever, Cough, Runny Nose,Throat Pain, Headache, Vomiting, Loose Motion, Cold, Chills',
      imgAttribute: 'Fever, Cough, Runny Nose,Throat Pain, Headache, Vomiting, Loose Motion, Cold, Chills',
      img: Fever,
      pathLink:'/find-doctor'
    },
    {
      _id:2,
      title:'ORTHODONTICS',
      content: 'Back pain,Knee pain,Shoulder pain,Fracture,Sprain,Joint pain,Arthristis ',
      imgAttribute: 'Back pain,Knee pain,Shoulder pain,Fracture,Sprain,Joint pain,Arthristis',
      img: JoinPain,
      pathLink:'/find-doctor'
      
    },
    {
      _id:3,
      title:'PSHYCHATRIST',
      content: 'Mental health issues,Depression,Anxiety,Stress,Panic attack',
      imgAttribute: 'Mental health issues,Depression,Anxiety,Stress,Panic attack',
      img:Headache,
        pathLink:'/find-doctor'
    },
    {
      _id:4,
      title:'DIABETOLOGIST',
      content: 'Fluctuating blood sugars,Insulin related concerns,Diabetic Ulcers,Oral Antidiabetic Medications',
      imgAttribute: 'Fluctuating blood sugars,Insulin related concerns,Diabetic Ulcers,Oral Antidiabetic Medications',
      img:Diarrhea,
        pathLink:'/find-doctor'
    },
    {
      _id:5,
      title:'OPTHALMOLOGIST',
      content: 'Eye related issues,Redness of eyes,Itching of eyes,Discharge from eyes,Watering of eyes',
      imgAttribute: 'Eye related issues,Redness of eyes,Itching of eyes,Discharge from eyes,Watering of eyes',
      img: EyeProblem,
      pathLink:'/find-doctor'
    },
    {
      _id:6,
      title:'GYNECOLOGY',
      content: 'Period related issues,White Discharge,Pregnancy related issues,Excessive Bleeding',
      imgAttribute: 'Period related issues,White Discharge,Pregnancy related issues,Excessive Bleeding',
      img:Thyroid,
        pathLink:'/find-doctor'
    },
    {
      _id:7,
      title:'DENTISTRY',
      content: 'Tooth sensitivity,Jaw pain,Toothache,Mouth ulcer,Swollen gums,Bleeding gums',
      imgAttribute: 'Tooth sensitivity,Jaw pain,Toothache,Mouth ulcer,Swollen gums,Bleeding gums',
      img:Dental,
        pathLink:'/find-doctor'
    },
    {
      _id:8,
      title:'DIET & NUTRITIONIST',
      content: 'Diet for gaining weight,Weight loss,Diet for Hypertension,Diet for Diabetes',
      imgAttribute: 'Diet for gaining weight,Weight loss,Diet for Hypertension,Diet for Diabetes',
      img: Overweight,
      pathLink:'/find-doctor'
    },
    {
      _id:9,
      title:'UROLOGIST',
      content: 'Urinary bladder problems,Urinary stream issues,Frequent Urinary tract infection',
      imgAttribute: 'Urinary bladder problems,Urinary stream issues,Frequent Urinary tract infection',
      img:Pregnancy,
        pathLink:'/find-doctor'
    },
    {
      _id:10,
      title:'DERMATOLOGY',
      content: 'Pimples/Acne,Hairfall,Dry Scalp,Pigmentation & Melasma,Dark Circles',
      imgAttribute: 'Pimples/Acne,Hairfall,Dry Scalp,Pigmentation & Melasma,Dark Circles',
      img: Pimple,
      pathLink:'/find-doctor'
    },
    {   _id:11,
      title:'SEXOLOGIST',
      content: 'Premature ejaculation,Painful Ejaculation,Decreased Sexual Drive,Testicular Pain,Erectile Dysfunction',
      imgAttribute: 'Premature ejaculation,Painful Ejaculation,Decreased Sexual Drive,Testicular Pain,Erectile Dysfunction',
      img:Depression,
        pathLink:'/find-doctor'
    },

    {
      _id:12,
      title:'PEDIATRICIAN',
      content: 'Child not feeling well,Cough in Children,Stomach pain,Skin rashes,Fever',
      imgAttribute: 'Child not feeling well,Cough in Children,Stomach pain,Skin rashes,Fever',
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
              Consult online with our verified Doctors for any health related issues
            </Typography>
            {/* <Typography
              className={styles.patientConsult_subtitle}
            >
              Private online consultations with verified doctors in all
              specialists
            </Typography> */}
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
                  <Box className={styles.patient_content}>
                    <h6>{name.title}</h6>
                    <p>{name.content}</p>
                    </Box>
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
